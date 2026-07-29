# Tarot AR + AI Luận Giải — Hướng dẫn setup từng bước

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

Bạn KHÔNG cần 2 hosting riêng — frontend và backend nằm chung 1 project, deploy 1 lần trên Vercel.

---

## Bước 0 — Chuẩn bị file

Trong thư mục project mình gửi, bạn có:
```
tarot-app/
├── index.html          ← trang chính (đã tích hợp AI)
├── data.js              ← BẠN CẦN COPY FILE GỐC CỦA MÌNH VÀO ĐÂY
├── back.png             ← BẠN CẦN COPY FILE GỐC CỦA MÌNH VÀO ĐÂY
├── ambient.mp3           ← BẠN CẦN COPY FILE GỐC CỦA MÌNH VÀO ĐÂY
├── api/
│   └── tarot-reading.js ← serverless function gọi AI
├── package.json
├── vercel.json
├── .gitignore
└── .env.example
```

Mình không có file `data.js`, `back.png`, `ambient.mp3` gốc của bạn (chúng không nằm trong file bạn upload), nên hãy copy 3 file đó từ project cũ của bạn vào đúng vị trí trên.

**Lưu ý quan trọng về `data.js`:** file `index.html` mới gửi lên AI 2 field `keywords_upright` và `keywords_reversed`, lấy từ `d.upright` và `d.reversed` sẵn có trong mỗi object của `TAROT_DATABASE`. Nếu file `data.js` của bạn đã có cấu trúc như bản gốc bạn gửi (mỗi lá có `name`, `url`, `upright`, `reversed`) thì không cần sửa gì cả.

---

## Bước 1 — Lấy API key MIỄN PHÍ của Google Gemini

Bản này dùng **Google Gemini API** thay vì Anthropic — có free tier thật sự miễn phí, không cần thẻ tín dụng, không cần nạp tiền.

1. Vào https://aistudio.google.com/app/apikey và đăng nhập bằng tài khoản Google.
2. Bấm **Create API key** → chọn tạo project mới (hoặc dùng project có sẵn).
3. Copy key (dạng `AIzaSy...`) — lưu lại cẩn thận.

**Giới hạn free tier** (tính tới cuối tháng 7/2026, có thể Google thay đổi theo thời gian):
- Model `gemini-3.6-flash` (đang dùng trong code, vừa ra mắt 21/7/2026): chất lượng viết tốt, free tier vẫn có nhưng quota vừa phải.
- Nếu bị lỗi 429 (rate limit) thường xuyên, đổi `MODEL` trong `api/tarot-reading.js` thành `gemini-3.1-flash-lite` — quota free tier cao hơn hẳn, chất lượng nhỉnh thấp hơn 1 chút nhưng vẫn ổn cho tarot.
- Free tier **không có SLA** (thỉnh thoảng chậm hơn ở giờ cao điểm) và Google có thể dùng dữ liệu request để cải thiện model — đừng gửi thông tin nhạy cảm.
- Nếu vượt giới hạn phút/ngày, code đã xử lý sẵn: sẽ tự động fallback về nghĩa lá bài tĩnh, người dùng vẫn thấy kết quả bình thường.

⚠️ **Tuyệt đối không** dán key này vào bất kỳ file `.html`/`.js` nào nằm trong thư mục `index.html` — chỉ khai báo nó ở bước 4 (Environment Variables trên Vercel).

> Nếu sau này bạn muốn nâng cấp lên chất lượng cao hơn (Claude), chỉ cần đổi lại `api/tarot-reading.js` để gọi Anthropic API và nạp credit — kiến trúc không đổi.

---

## Bước 2 — Cài công cụ cần thiết

Bạn cần Node.js (bản ≥ 18) và Vercel CLI.

```bash
# Kiểm tra đã có Node chưa
node -v

# Nếu chưa có, tải tại https://nodejs.org (bản LTS)

# Cài Vercel CLI toàn cục
npm install -g vercel
```

---

## Bước 3 — Test local trước khi deploy (khuyến khích)

```bash
cd tarot-app

# Đăng nhập Vercel (mở trình duyệt để xác thực)
vercel login

# Tạo file .env.local từ mẫu
cp .env.example .env.local
```

Mở `.env.local`, dán API key thật vào:
```
GEMINI_API_KEY=AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Chạy thử local:
```bash
vercel dev
```

Lần đầu chạy nó sẽ hỏi vài câu (link project, chọn scope...), cứ chọn mặc định / theo tài khoản của bạn. Sau khi chạy xong, mở trình duyệt tại địa chỉ nó in ra (thường là `http://localhost:3000`), thử bốc bài xem AI có trả luận giải không.

Nếu lỗi CORS/404 ở bước gọi `/api/tarot-reading`: kiểm tra lại file nằm đúng đường dẫn `api/tarot-reading.js` (không phải `/api/api/...`).

---

## Bước 4 — Deploy lên Vercel (production)

```bash
vercel --prod
```

CLI sẽ hỏi:
- **Set up and deploy?** → Yes
- **Which scope?** → chọn tài khoản của bạn
- **Link to existing project?** → No (nếu đây là lần đầu)
- **Project name?** → đặt tên tuỳ ý, ví dụ `tarot-ar-oracle`
- **Directory?** → Enter (mặc định thư mục hiện tại)
- **Override settings?** → No

Sau khi deploy xong, nó sẽ in ra 1 URL dạng `https://tarot-ar-oracle.vercel.app` — nhưng **CHƯA chạy được AI** vì biến môi trường chưa có trên production.

### Khai báo API key trên Vercel (bắt buộc)

**Cách 1 — qua Dashboard (dễ nhất):**
1. Vào https://vercel.com/dashboard, chọn project vừa tạo.
2. Vào tab **Settings** → **Environment Variables**.
3. Thêm:
   - Key: `GEMINI_API_KEY`
   - Value: key thật của bạn (dạng `AIzaSy...`)
   - Environment: chọn cả `Production`, `Preview`, `Development`
4. Bấm **Save**.

**Cách 2 — qua CLI:**
```bash
vercel env add GEMINI_API_KEY production
# dán key khi được hỏi
```

Sau khi thêm biến môi trường, **phải deploy lại** để nó có hiệu lực:
```bash
vercel --prod
```

---

## Bước 5 — Kiểm tra production

Mở URL production (`https://<project>.vercel.app`) trên điện thoại hoặc máy tính có webcam:
1. Chọn hình thức trải bài.
2. Với "Ba lá" → chọn chủ đề. Với "Một lá" → nhập câu hỏi.
3. Cho phép trình duyệt truy cập camera (cần cho tính năng AR nhận diện tay).
4. Bốc đủ số lá → chờ vài giây → modal hiện luận giải AI.

Nếu thấy dòng "Không thể kết nối AI luận giải lúc này" → xem log lỗi:
```bash
vercel logs <tên-deployment-url>
```
hoặc vào Dashboard → project → tab **Logs** để xem lỗi cụ thể (thường là do thiếu/sai `GEMINI_API_KEY`, hoặc đã vượt giới hạn free tier trong phút/ngày — thử lại sau).

---

## Bước 6 (tuỳ chọn) — Gắn domain riêng

Nếu bạn có domain riêng (VD: `boitarot.com`):
1. Dashboard → project → **Settings** → **Domains**.
2. Nhập domain, làm theo hướng dẫn trỏ DNS (thường là thêm bản ghi CNAME hoặc A record tại nơi bạn mua domain).
3. Vercel tự cấp SSL (https) miễn phí sau vài phút.

---

## Ghi chú thêm

- **Chi phí**: hoàn toàn $0 với Gemini free tier, miễn là traffic không vượt giới hạn request/phút hoặc request/ngày. Nếu web của bạn được nhiều người dùng cùng lúc, có thể gặp lỗi 429 (rate limit) — code đã tự fallback về nghĩa lá bài tĩnh trong trường hợp đó nên trải nghiệm không bị gián đoạn hoàn toàn.
- **Bảo mật**: `api/tarot-reading.js` chạy hoàn toàn phía server, key không bao giờ lộ ra trình duyệt — bạn có thể mở DevTools kiểm tra tab Network, sẽ chỉ thấy request tới `/api/tarot-reading` chứ không thấy key.
- **Custom giọng văn AI**: muốn AI luận giải theo phong cách khác (huyền bí hơn, ngắn gọn hơn, thêm yếu tố Tử Vi/Bát Tự...) thì sửa biến `SYSTEM_PROMPT` trong `api/tarot-reading.js`, rồi `vercel --prod` lại.
- **Đổi model**: nếu `gemini-3.6-flash` bị giới hạn quá chặt, đổi dòng `const MODEL = "gemini-3.6-flash";` thành `"gemini-3.1-flash-lite"` để có quota cao hơn. Xem giới hạn hiện tại tại https://ai.google.dev/gemini-api/docs/rate-limits.
- **Nếu sau này muốn nâng cấp chất lượng**: có thể đổi sang gọi Claude API (Anthropic) khi sẵn sàng trả phí — cấu trúc code (validate input, system prompt, JSON schema) gần như giữ nguyên, chỉ đổi phần gọi API và cách đọc response.
