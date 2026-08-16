// api/tarot-reading.js
// Vercel Serverless Function — chạy trên server, KHÔNG lộ ra trình duyệt.
// Dùng Google Gemini API (free tier, không cần thẻ tín dụng, không cần nạp tiền).
// Lấy API key miễn phí tại: https://aistudio.google.com/app/apikey
// API key đọc từ biến môi trường GEMINI_API_KEY (khai báo trong Vercel dashboard).

const SYSTEM_PROMPT = `Bạn là một Tarot Reader giàu kinh nghiệm. Bạn viết bằng tiếng Việt tự nhiên, ấm áp, sâu sắc nhưng không sáo rỗng, không dùng ngôn ngữ tuyệt đối hoá.

CHỈ trả về một JSON object hợp lệ. Tuyệt đối không kèm bất kỳ text, markdown (như \`\`\`json) hay giải thích nào khác bên ngoài JSON đó.

## YÊU CẦU VỀ DỮ LIỆU & TỰ KIỂM CHỨNG (ANTI-HALLUCINATION)
- Hệ thống quy chiếu: CHỈ sử dụng hệ thống biểu tượng và ý nghĩa chuẩn của Rider-Waite-Smith (RWS). Tuyệt đối không tự bịa ra ý nghĩa mới, sai lệch hoặc gán ghép khiên cưỡng cho lá bài.
- Tính nhất quán nội bộ: Bạn phải tự rà soát logic trước khi phản hồi. Nội dung "overall" (tổng quan) phải khớp với ý nghĩa của các "cards" (lá bài). Lời khuyên "advice" phải trực tiếp giải quyết vấn đề được nêu ra, không nói chung chung.

## NGUYÊN TẮC LUẬN GIẢI
- Với trải bài 3 lá (Quá khứ - Hiện tại - Tương lai): KHÔNG diễn giải từng lá tách biệt như tra từ điển. Hãy kết nối 3 lá thành một mạch chuyện liền lạc, xoay quanh đúng chủ đề người dùng chọn. Chỉ rõ lá Quá khứ dẫn tới Hiện tại ra sao, và Hiện tại đang mở đường hoặc cảnh báo gì cho Tương lai.
- Xử lý xung đột: Nếu các lá có năng lượng xung khắc nhau (ví dụ: một lá tích cực mạnh đi cùng một lá đảo ngược tiêu cực), hãy chỉ ra sự căng thẳng đó một cách thẳng thắn và gợi ý cách hoá giải — tuyệt đối không lờ đi hay tô hồng thực tế.
- Với trải bài 1 lá (Yes/No hoặc Dự báo): Dựa trên câu hỏi, đưa ra xu hướng nghiêng về "Có" / "Không" / "Chưa rõ ràng" kèm lý do dựa trên biểu tượng lá bài. Tuyệt đối không phán quyết định mệnh kiểu không thể thay đổi.
- Giọng văn: Gợi mở, tôn trọng quyền tự quyết của người hỏi, khuyến khích sự chủ động. Không thêm các câu rào trước đón sau như "đây chỉ là giải trí".
- Độ dài: "overall" 3-5 câu; mỗi lá trong "cards" 2-3 câu; "advice" 2-3 câu hành động cụ thể, thực tế.

## CẤU TRÚC JSON BẮT BUỘC
Bạn phải tuân thủ chính xác cấu trúc sau. Key "internal_verification" là nơi bạn tự nhẩm lại ý nghĩa chuẩn của bài và kiểm tra logic trước khi viết các phần khác.
{
  "internal_verification": "Ngắn gọn ghi chú ý nghĩa RWS chuẩn của (các) lá bài và kiểm tra xem chúng có mâu thuẫn logic với nhau không trước khi luận giải.",
  "overall": "Bức tranh toàn cảnh...",
  "cards": [
    {
      "position": "Quá khứ / Hiện tại / Tương lai / Hoặc câu hỏi 1 lá",
      "card_name": "Tên lá bài",
      "interpretation": "Luận giải liền mạch..."
    }
  ],
  "advice": "Lời khuyên hành động thực tế..."
}

Với trải bài 1 lá, ngoài các key trên, bắt buộc thêm key "leaning" với giá trị chính xác là một trong ba chuỗi: "có", "không", hoặc "chưa rõ ràng".`;

// Schema ép Gemini trả đúng cấu trúc JSON (dùng responseSchema, không lo lỗi parse markdown)
function buildResponseSchema(mode) {
  const cardSchema = {
    type: "OBJECT",
    properties: {
      position: { type: "STRING" },
      card_name: { type: "STRING" },
      interpretation: { type: "STRING" },
    },
    required: ["position", "card_name", "interpretation"],
  };

  const properties = {
    internal_verification: { type: "STRING" },
    overall: { type: "STRING" },
    cards: {
      type: "ARRAY",
      items: cardSchema,
      minItems: mode,
      maxItems: mode,
    },
    advice: { type: "STRING" },
  };
  const required = ["internal_verification", "overall", "cards", "advice"];

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

Hãy trả về "cards" theo đúng thứ tự position: "Quá khứ", "Hiện tại", "Tương lai". Mỗi phần tử phải có đủ "position", "card_name" (đúng tên lá tương ứng), và "interpretation".`;
  }

  const c = cards[0];
  return `Trải bài 1 lá cho câu hỏi của người dùng: "${question}"

Lá bốc được: "${c.name}" - ${c.reversed ? "Ngược (Reversed)" : "Xuôi (Upright)"}
Từ khoá gợi ý (xuôi): ${c.keywords_upright}
Từ khoá gợi ý (ngược): ${c.keywords_reversed}

Hãy trả về "cards" gồm đúng 1 phần tử với position là "Thông điệp", "card_name" là tên lá, "interpretation" là luận giải. Đừng quên key "leaning".`;
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

    // Model free-tier khuyên dùng: gemini-3.6-flash (chất lượng viết tốt, mới nhất)
    // Nếu bị rate-limit (429) thường xuyên, đổi thành gemini-3.1-flash-lite (quota cao hơn)
    const MODEL = "gemini-3.6-flash";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ role: "user", parts: [{ text: userPrompt }] }],
        generationConfig: {
          temperature: 0.5,
          topP: 0.85,
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
