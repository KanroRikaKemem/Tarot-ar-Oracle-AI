# Tarot AR + AI Luận Giải

## Tổng quan kiến trúc

```
Trình duyệt (index.html, three.js, mediapipe)
        │
        │  fetch('/api/tarot-reading', {cards, theme/question})
        ▼
Vercel Serverless Function (api/tarot-reading.js)
        │
        │  gọi Gemini API bằng GEMINI_API_KEY (giấu ở server, free tier)
        ▼
Google Gemini API → trả về JSON luận giải → hiển thị lên modal
```

---

## Cây thư mục

```
tarot-app/
├── index.html          ← 
├── data.js              
├── back.png             
├── ambient.mp3          
├── api/
│   └── tarot-reading.js ← serverless function gọi AI
├── package.json
├── vercel.json
├── .gitignore
└── .env.example
```

## Giới thiệu
- Là bản nâng cấp có thêm AI của [Tarot-ar-Oracle](https://kanrorikakemem.github.io/Tarot-ar-Oracle/), hoàn toàn miễn với Gemini free tier, miễn là traffic không vượt giới hạn request/phút hoặc request/ngày. Nếu web được nhiều người dùng cùng lúc, có thể gặp lỗi 429 (rate limit) - code đã tự fallback về nghĩa lá bài tĩnh trong trường hợp đó nên trải nghiệm không bị gián đoạn hoàn toàn.
- Trải nghiệm thử ở [Tarot-ar-Oracle-AI](https://tarot-ar-oracle-ai.vercel.app/).
