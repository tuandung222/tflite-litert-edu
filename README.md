# LiteRT (TFLite) Mobile AI Academy 📱🤖

Kho lưu trữ giáo trình tự học và thực hành tương tác chuyên sâu về **Edge AI**, **Mobile AI**, lượng tử hóa mô hình và triển khai mô hình học sâu **LiteRT (TensorFlow Lite)** trên thiết bị di động (Android với Kotlin).

Dự án này tích hợp một **Trang web học tập tương tác tĩnh (Static Interactive Dashboard)** có thiết kế cực kỳ hiện đại, trực quan, hỗ trợ thiết bị di động và có thể deploy ngay lập tức lên **GitHub Pages** không cần cấu hình phức tạp.

---

## 🗺️ Bản đồ Giáo trình (Curriculum Outline)

Giáo trình được chia làm 5 Module cốt lõi từ cơ bản đến nâng cao, đi kèm các case study thực chiến và bài thực hành code chạy được ngay:

### 🧭 Module 1: Nền Tảng Edge AI & LiteRT
- **1.1:** Edge AI & Mobile AI là gì? Tại sao nên tính toán On-Device? (Độ trễ, Bảo mật, Offline, Tiết kiệm server).
- **1.2:** Lịch sử từ TensorFlow Lite chuyển mình sang LiteRT (Hệ sinh thái mới của Google).
- **1.3:** Kiến trúc bên trong LiteRT: Cách bộ Converter và Interpreter liên kết hoạt động.
- **1.4:** Phần cứng di động và cơ chế Delegates tăng tốc (CPU multi-threading, GPU, NPU/NNAPI, DSP).

### 🌿 Module 2: Vòng Đời & Tối Ưu Hóa Mô Hình (Optimization)
- **2.1:** Quy trình chuyển đổi mô hình từ Keras/PyTorch (qua `ai_edge_torch`) sang `.tflite`.
- **2.2:** Tại sao cần Quantization? (Giải quyết bài toán thắt nút băng thông RAM và tiết kiệm pin).
- **2.3:** Các phương pháp lượng tử hóa: Dynamic Range, Float16, Full Integer và QAT.
- **2.4:** Toán học lượng tử hóa: Công thức tuyến tính ($q = \text{round}(r/S) + Z$), tham số Scale/Zero-point và sai số làm tròn.

### 🤖 Module 3: Triển Khai Mô Hình Trên Android (Kotlin & C++)
- **3.1:** Thiết lập môi trường Android Studio, dependencies gradle, cấu hình `noCompress` tài nguyên `.tflite`.
- **3.2:** Khởi tạo an toàn và load mô hình hiệu năng cao sử dụng `MappedByteBuffer` (Zero-Copy mmap).
- **3.3:** Tiền xử lý khung hình thời gian thực (CameraX) đưa ảnh YUV về RGB, Rotate, Resize, Normalize, nạp ByteBuffer trực tiếp.
- **3.4:** Chạy Inference không chặn giao diện (Coroutines) song song đa luồng.
- **3.5:** Hậu xử lý kết quả thô, giải mã tọa độ bounding box phát hiện đối tượng và vẽ đè lên Custom Canvas View.

### 🏆 Module 4: Case Studies Thực Chiến Biên
- **4.1: Image Classification:** Nhận diện và phân loại 1001 lớp ảnh thời gian thực với MobileNetV2.
- **4.2: Vector Embedding:** Trích xuất đặc trưng văn bản, tính toán độ tương đồng **Cosine Similarity** cục bộ phục vụ Tìm kiếm ngữ nghĩa offline.
- **4.3: Small Language Models (SLM):** Triển khai chạy các mô hình ngôn ngữ lớn thu nhỏ (như Gemma 2B, Llama 3.2) offline trên điện thoại thông qua **MediaPipe LLM Inference API**.

### 📓 Module 5: Thực Hành Trực Quan (Jupyter Notebooks)
- **5.1: Notebook 1 - Python Quantization:** Hướng dẫn chạy code Python lượng tử hóa mô hình MobileNetV2, so sánh kích thước tệp thực tế giảm từ 14MB xuống 3.5MB.
- **5.2: Notebook 2 - Metadata & Python Interpreter:** Hướng dẫn nhúng file nhãn `.txt` và tham số tiền xử lý vào file `.tflite` nhị phân, kiểm thử độc lập mô hình bằng Python Interpreter trước khi deploy.

---

## ⚡ Các Tính Năng Tương Tác Nổi Bật Trên Dashboard

Trang web học tập đi kèm chứa hai widget tương tác cực kỳ độc đáo bên lề giúp bạn dễ tiếp thu lý thuyết:
1. **Bộ giả lập Quantization Simulator 🔢:** Cho phép bạn tự tay di chuyển slider giá trị thực Float32, tự chỉnh Scale và Zero-point để xem hệ thống thực hiện phép tính làm tròn, cộng bù và giải lượng tử hóa từng bước theo thời gian thực kèm tỉ lệ sai số phần trăm trực quan.
2. **Bộ trực quan hóa Android Inference Pipeline ⚙️:** Hiển thị sơ đồ chuyển dịch 4 bước từ Camera thô sang Bitmap tiền xử lý, chạy qua Interpreter và render đè màn hình Canvas kèm diễn giải kỹ thuật cực kỳ chi tiết cho mỗi bước.

---

## 🚀 Hướng Dẫn Chạy & Deploy Dự Án

### 1. Xem Trang Bài Giảng Tương Tác Cục Bộ
Vì dự án được thiết kế hoàn toàn bằng **Vanilla HTML, CSS, và JS** tinh gọn, bạn không cần cài đặt các framework bundler phức tạp (như Webpack, Vite). 

Để tránh các lỗi bảo mật CORS của trình duyệt khi mở trực tiếp file HTML tĩnh từ máy, bạn nên khởi chạy một server HTTP siêu nhẹ đi kèm Python:
```bash
# 1. Di chuyển vào thư mục dự án
cd /Users/admin/TuanDung/repos/tflite-litert-edu

# 2. Khởi chạy HTTP server cục bộ
python3 -m http.server 8000
```
Mở trình duyệt bất kỳ và truy cập địa chỉ: `http://localhost:8000` để bắt đầu học với giao diện tối (dark theme) kính mờ cực kỳ premium!

### 2. Triển Khai Lên GitHub Pages (Free Hosting)
Dự án được thiết kế sẵn sàng 100% để deploy trực tiếp lên trang tĩnh GitHub Pages.
1. Tạo một repository mới trên tài khoản GitHub của bạn (ví dụ: đặt tên là `tflite-litert-edu`).
2. Thực hiện push mã nguồn cục bộ lên GitHub:
```bash
git add .
git commit -m "feat: init tflite litert academy interactive dashboard and notebooks"
git branch -M main
git remote add origin https://github.com/tuandung222/tflite-litert-edu.git
git push -u origin main
```
3. Trên trang giao diện web GitHub của repository, truy cập mục **Settings** -> **Pages**.
4. Ở phần **Build and deployment**, chọn source là **Deploy from a branch**, chọn branch là **main** (thư mục `/` root), nhấp **Save**.
5. Đợi khoảng 1-2 phút, GitHub sẽ cung cấp cho bạn một đường dẫn URL công khai (dạng `https://tuandung222.github.io/tflite-litert-edu/`) để truy cập và chia sẻ bài học bất kỳ đâu!

### 3. Thực Hành Các Jupyter Notebooks
Để thực thi các file thực hành Python trong thư mục `notebooks/`:
```bash
# 1. Cài đặt các thư viện cần thiết
pip install tensorflow tflite-support jupyter matplotlib

# 2. Khởi chạy Jupyter Notebook
cd notebooks
jupyter notebook
```
Nhấp chọn file `01_model_conversion_and_quantization.ipynb` hoặc `02_model_metadata_and_python_inference.ipynb` để chạy code thực tế.

---

## 🎨 Ngôn Ngữ Thiết Kế Dự Án

- **Typography:** Sử dụng Font chữ `Outfit` cho tiêu đề lớn hiện đại và `Inter` cho nội dung văn bản học thuật để tăng tối đa tính dễ đọc.
- **Color Scheme:** Tông màu tối sâu làm chủ đạo (`#070913`), kết hợp hiệu ứng neon kính mờ (`backdrop-filter`) và điểm nhấn màu tím xanh (`#818cf8`) phối màu xanh ngọc lục bảo (`#10b981`) cho các tiến độ và trạng thái thành công.
- **Icons:** Tích hợp bộ icon nhị phân sắc nét của thư viện **Lucide Icons**.
