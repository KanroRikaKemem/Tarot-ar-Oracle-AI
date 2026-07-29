// api/tarot-reading.js
// Vercel Serverless Function - chạy trên server, không lộ ra trình duyệt.
// Dùng Google Gemini API (free tier).
// API key miễn phí: https://aistudio.google.com/app/apikey
// API key đọc từ biến môi trường GEMINI_API_KEY (khai báo trong Vercel dashboard).

const SYSTEM_PROMPT = `Bạn là một tarot reader giàu kinh nghiệm, viết bằng tiếng Việt tự nhiên, ấm áp, sâu sắc nhưng không sáo rỗng, không dùng ngôn ngữ tuyệt đối hoá.

CHỈ trả về một JSON object hợp lệ, không kèm bất kỳ text, markdown, hay giải thích nào khác ngoài JSON đó.

Nguyên tắc luận giải:
- Với trải bài 3 lá (Quá khứ - Hiện tại - Tương lai): KHÔNG diễn giải từng lá tách biệt như tra từ điển. Hãy kết nối 3 lá thành một mạch chuyện liền lạc, xoay quanh đúng chủ đề người dùng chọn (tình cảm / công việc / sức khoẻ / tinh thần). Chỉ rõ lá Quá khứ dẫn tới Hiện tại ra sao, và Hiện tại đang mở đường hoặc cảnh báo gì cho Tương lai.
- Nếu các lá có năng lượng xung khắc nhau (ví dụ một lá tích cực mạnh đi cùng một lá đảo ngược tiêu cực), hãy chỉ ra sự căng thẳng đó thẳng thắn và gợi ý cách hoá giải - đừng lờ đi hay tô hồng.
- Với trải bài 1 lá: dựa trên câu hỏi Yes/No hoặc câu hỏi dự báo mà người dùng nhập, đưa ra xu hướng nghiêng về "có" / "không" / "chưa rõ ràng, cần thêm thời gian" kèm lý do. Tuyệt đối không phán quyết cứng nhắc kiểu định mệnh không thể thay đổi.
- Giọng văn: gợi mở, tôn trọng quyền tự quyết của người hỏi, khuyến khích chủ động thay vì thụ động chờ đợi.
- Độ dài: "overall" 3-5 câu; mỗi lá trong "cards" 2-3 câu; "advice" 2-3 câu hành động cụ thể, thực tế.
- Không thêm disclaimer kiểu "đây chỉ là giải trí" - người dùng đã biết điều đó.`;

// Schema ép Gemini trả đúng cấu trúc JSON (dùng responseSchema, không lỗi parse markdown)
function buildResponseSchema(mode) {
  const cardSchema = {
    type: "OBJECT",
    properties: {
      position: { type: "STRING" },
      text: { type: "STRING" },
    },
    required: ["position", "text"],
  };

  const properties = {
    overall: { type: "STRING" },
    cards: {
      type: "ARRAY",
      items: cardSchema,
      minItems: mode,
      maxItems: mode,
    },
    advice: { type: "STRING" },
  };
  const required = ["overall", "cards", "advice"];

  if (mode === 1) {
    properties.leaning = { type: "STRING", enum: ["có", "không", "chưa rõ ràng"] };
    required.push("leaning");
  }

  return { type: "OBJECT", properties, required };
}

function buildUserPrompt({ mode, theme, question, cards }) {
  if (mode === 3) {
    const positions = ["Quá khứ", "Hiện tại", "Tương lai"];
    const cardLines = cards
      .map((c, i) => `Lá ${i + 1} (${positions[i]}): "${c.name}" - ${c.reversed ? "Ngược (Reversed)" : "Xuôi (Upright)"}
   Từ khoá gợi ý (xuôi): ${c.keywords_upright}
   Từ khoá gợi ý (ngược): ${c.keywords_reversed}`)
      .join("\n");

    return `Trải bài 3 lá, chủ đề người dùng chọn: "${theme}".

${cardLines}

Hãy trả về "cards" theo đúng thứ tự position: "Quá khứ", "Hiện tại", "Tương lai".`;
  }

  const c = cards[0];
  return `Trải bài 1 lá cho câu hỏi của người dùng: "${question}"

Lá bốc được: "${c.name}" - ${c.reversed ? "Ngược (Reversed)" : "Xuôi (Upright)"}
Từ khoá gợi ý (xuôi): ${c.keywords_upright}
Từ khoá gợi ý (ngược): ${c.keywords_reversed}

Hãy trả về "cards" gồm đúng 1 phần tử với position là "Thông điệp".`;
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  if (req.method !== "POST") {
    return res.status(405).json({ error: "method_not_allowed" });
  }

  try {
    const { mode, theme, question, cards } = req.body || {};

    if (!Array.isArray(cards) || cards.length === 0) {
      return res.status(400).json({ error: "invalid_cards" });
    }
    if (mode !== 1 && mode !== 3) {
      return res.status(400).json({ error: "invalid_mode" });
    }
    if (mode === 3 && !theme) {
      return res.status(400).json({ error: "missing_theme" });
    }
    if (mode === 1 && !question) {
      return res.status(400).json({ error: "missing_question" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY chưa được cấu hình");
      return res.status(500).json({ error: "server_misconfigured" });
    }

    const userPrompt = buildUserPrompt({ mode, theme, question, cards });

    // Model free-tier: gemini-3.6-flash
    // Nếu bị rate-limit (429) thường xuyên, đổi thành gemini-3.1-flash-lite
    const MODEL = "gemini-3.6-flash";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ role: "user", parts: [{ text: userPrompt }] }],
        generationConfig: {
          temperature: 0.9,
          maxOutputTokens: 2500,
          thinkingConfig: { thinkingLevel: "low" },
          responseMimeType: "application/json",
          responseSchema: buildResponseSchema(mode),
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", response.status, errText);
      if (response.status === 429) {
        return res.status(429).json({ error: "rate_limited" });
      }
      return res.status(502).json({ error: "ai_provider_error" });
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      console.error("Gemini không trả về nội dung hợp lệ:", JSON.stringify(data));
      return res.status(502).json({ error: "empty_response" });
    }

    let parsed;
    try {
      parsed = JSON.parse(rawText);
    } catch (parseErr) {
      console.error("Không parse được JSON từ Gemini:", rawText);
      return res.status(502).json({ error: "parse_failed" });
    }

    return res.status(200).json(parsed);
  } catch (err) {
    console.error("Lỗi không xác định:", err);
    return res.status(500).json({ error: "internal_error" });
  }
};
