/* ==========================================================================
   LiteRT Academy - Lesson Data & Interactive Core
   ========================================================================== */

const lessons = {
  // ==========================================================================
  // MODULE 1: NỀN TẢNG EDGE AI & LITERT
  // ==========================================================================
  '1.1': {
    title: 'Edge AI & Mobile AI là gì? Tại sao nên chọn On-Device?',
    meta: { duration: '10 phút', difficulty: 'Cơ bản', category: 'Nền tảng' },
    html: `
      <p>Chào mừng bạn đến với thế giới của <strong>Edge AI (Trí tuệ nhân tạo biên)</strong>! Trước khi đi sâu vào kỹ thuật, hãy cùng làm rõ khái niệm cơ bản nhưng vô cùng quan trọng này.</p>
      
      <h2>1. Edge AI & Mobile AI là gì?</h2>
      <p>Trong kỷ nguyên sơ khởi của AI, hầu hết các mô hình ngôn ngữ lớn (như GPT-4) hay mô hình xử lý hình ảnh nặng đều chạy trên <strong>Cloud (Đám mây)</strong>. Khi bạn gửi một bức ảnh hoặc câu hỏi, dữ liệu sẽ được gửi qua Internet tới máy chủ mạnh mẽ, máy chủ xử lý rồi gửi kết quả trả về điện thoại của bạn.</p>
      
      <p><strong>Edge AI (hay On-Device AI)</strong> đảo ngược quy trình này. Thay vì gửi dữ liệu lên mây, chúng ta mang mô hình AI về chạy <strong>trực tiếp ngay trên thiết bị đầu cuối (Edge device)</strong> của người dùng như: Điện thoại di động (Android/iOS), đồng hồ thông minh, máy ảnh thông minh, kính VR hoặc các bo mạch nhúng (Raspberry Pi).</p>

      <h2>2. Tại sao On-Device AI lại là xu hướng tất yếu?</h2>
      <p>Mặc dù máy chủ đám mây có sức mạnh tính toán khổng lồ, nhưng nó lại gặp phải 4 rào cản chí mạng sau đây:</p>
      
      <div class="callout callout-important">
        <i data-lucide="zap" class="callout-icon"></i>
        <div class="callout-content">
          <span class="callout-title">4 Ưu thế vượt trội của On-Device AI:</span>
          <ul>
            <li><strong>Độ trễ cực thấp (Low Latency):</strong> Không mất thời gian truyền dữ liệu qua Internet (mất từ 100ms - 2s). Mô hình chạy nội bộ chỉ mất từ 5ms - 30ms, đáp ứng hoàn hảo cho camera thời gian thực, game, hoặc nhận diện cử chỉ.</li>
            <li><strong>Bảo mật & Quyền riêng tư (Privacy):</strong> Dữ liệu nhạy cảm của người dùng (giọng nói, hình ảnh khuôn mặt, dữ liệu y tế) được xử lý ngay tại máy và không bao giờ rời khỏi thiết bị. Điều này giúp ứng dụng dễ dàng đạt chuẩn bảo mật như GDPR hoặc HIPAA.</li>
            <li><strong>Hoạt động ngoại tuyến (Offline Capability):</strong> Ứng dụng AI của bạn vẫn hoạt động mượt mà ngay cả khi người dùng ở trong tầng hầm, trên máy bay, ngoài đảo hoang hoặc ở khu vực không có sóng mạng.</li>
            <li><strong>Tiết kiệm chi phí vận hành (Zero Server Cost):</strong> Chạy mô hình trên hàng triệu thiết bị của người dùng đồng nghĩa với việc bạn đang tận dụng CPU/GPU/NPU miễn phí của họ. Bạn sẽ không tốn hàng nghìn USD hàng tháng cho hóa đơn API của máy chủ đám mây!</li>
          </ul>
        </div>
      </div>

      <h2>3. Thách thức lớn khi deploy AI lên di động</h2>
      <p>Mặc dù rất hấp dẫn, việc đưa AI lên thiết bị di động không hề dễ dàng do giới hạn phần cứng nghiêm ngặt:</p>
      <ul>
        <li><strong>Dung lượng RAM eo hẹp:</strong> Một ứng dụng Android thông thường chỉ được cấp phát từ vài chục đến vài trăm MB RAM. Nếu mô hình AI của bạn nặng 1GB, hệ điều hành Android sẽ tắt ngay ứng dụng (Out of Memory - OOM).</li>
        <li><strong>Dung lượng lưu trữ giới hạn:</strong> Người dùng sẽ không muốn tải một ứng dụng di động nặng tới 500MB chỉ để quét mã vạch hay nhận diện khuôn mặt.</li>
        <li><strong>Năng lượng pin:</strong> Chạy các ma trận số thực dấu phẩy động 32-bit liên tục sẽ làm nóng máy cực nhanh và rút pin điện thoại chỉ trong vài giờ.</li>
      </ul>
      <p>Để giải quyết các thách thức này, chúng ta cần một framework chuyên dụng cực nhẹ và mạnh mẽ: <strong>TFLite / LiteRT</strong>.</p>
    `
  },
  '1.2': {
    title: 'Từ TensorFlow Lite sang LiteRT: Bước chuyển mình lớn của Google',
    meta: { duration: '8 phút', difficulty: 'Cơ bản', category: 'Lịch sử & Xu hướng' },
    html: `
      <p>Nếu bạn đã từng nghe về <strong>TensorFlow Lite (TFLite)</strong>, bạn có thể tự hỏi: <strong>LiteRT</strong> từ đâu ra? Đây có phải là một framework hoàn toàn mới?</p>
      
      <h2>1. LiteRT là gì?</h2>
      <p>Vào giữa năm 2024, Google chính thức giới thiệu **LiteRT** (viết tắt của **Lite Runtime**). Thực chất, LiteRT là **bản nâng cấp và đổi tên thương hiệu chính thức** của TensorFlow Lite.</p>
      
      <p>Nó kế thừa toàn bộ mã nguồn cốt lõi mạnh mẽ của TFLite nhưng mở rộng tầm nhìn của mình để trở thành bộ runtime tiêu chuẩn của Google cho AI trên thiết bị biên (On-device AI).</p>

      <h2>2. Tại sao Google lại đổi tên thành LiteRT?</h2>
      <p>Có 3 nguyên nhân cốt lõi đằng sau sự thay đổi mang tính chiến lược này:</p>
      
      <div class="callout callout-tip">
        <i data-lucide="help-circle" class="callout-icon"></i>
        <div class="callout-content">
          <span class="callout-title">Tại sao lại là LiteRT?</span>
          <p>1. <strong>Độc lập với Framework nguồn:</strong> Trước đây, TFLite gắn liền với TensorFlow. Hiện nay, các kỹ sư AI sử dụng rất nhiều framework khác nhau như PyTorch, JAX hay Keras. LiteRT ra đời nhằm hỗ trợ chuyển đổi trực tiếp từ cả Keras, JAX và đặc biệt là **PyTorch** thông qua dự án <code>ai_edge_torch</code> của Google.</p>
          <p>2. <strong>Hỗ trợ kỷ nguyên Generative AI (LLMs):</strong> Điện thoại ngày nay đủ mạnh để chạy các mô hình ngôn ngữ lớn (LLM) thu nhỏ. LiteRT được tối ưu hóa sâu để chạy các mô hình GenAI như Gemma 2B, Llama 3-8B ngay trên thiết bị di động.</p>
          <p>3. <strong>Chuẩn hóa API:</strong> LiteRT cung cấp một bộ API tinh giản hơn, tập trung vào hiệu suất cao, giảm bớt sự cồng kềnh thừa kế từ hệ sinh thái TensorFlow cũ.</p>
        </div>
      </div>

      <h2>3. Khả năng tương thích ngược</h2>
      <p>Một tin cực vui cho các nhà phát triển là **LiteRT hoàn toàn tương thích ngược với TensorFlow Lite**. Định dạng file mô hình vẫn giữ nguyên là đuôi <code>.tflite</code>. Bạn vẫn có thể sử dụng các tool chuyển đổi cũ và các mô hình TFLite có sẵn trên mạng mà không gặp bất kỳ lỗi nào.</p>
    `
  },
  '1.3': {
    title: 'Kiến trúc bên trong LiteRT: Cách hoạt động của hệ thống',
    meta: { duration: '12 phút', difficulty: 'Trung bình', category: 'Kiến trúc' },
    html: `
      <p>Để trở thành một chuyên gia deploy AI trên Mobile, bạn cần nắm vững kiến trúc bên trong của LiteRT. Hệ thống này được chia làm hai khối độc lập chính:</p>
      
      <div class="math-block">
        Model (Python/Keras/PyTorch) ➔ <strong>LiteRT Converter</strong> ➔ File .tflite ➔ <strong>LiteRT Interpreter</strong> (Mobile Device)
      </div>

      <h2>1. Bộ chuyển đổi (LiteRT Converter) - Thực hiện Offline trên PC</h2>
      <p>Bộ chuyển đổi hoạt động trong môi trường phát triển (Python trên PC/Colab của bạn). Nhiệm vụ của nó là nhận một mô hình đã train sẵn (từ TensorFlow, Keras, JAX, hoặc PyTorch) và xuất ra file định dạng <code>.tflite</code>.</p>
      <p>Trong quá trình chuyển đổi, Converter thực hiện tối ưu hóa cấu trúc đồ thị (Graph Optimizations):</p>
      <ul>
        <li><strong>Fusing Operators (Hợp nhất toán tử):</strong> Gộp nhiều lớp toán tử đơn lẻ (ví dụ: Tích chập Conv2D + Batch Normalization + Activation ReLU) thành một toán tử duy nhất để giảm dung lượng bộ nhớ trung gian và tăng tốc xử lý.</li>
        <li><strong>Constant Folding (Gấp hằng số):</strong> Tính toán trước các biểu thức toán học chứa hằng số ngay lúc chuyển đổi để không phải tính lại khi chạy trên điện thoại.</li>
        <li><strong>Quantization (Lượng tử hóa):</strong> Giảm kích thước mô hình (sẽ học chi tiết ở Module 2).</li>
      </ul>

      <h2>2. Định dạng File FlatBuffers (.tflite)</h2>
      <p>File kết quả đầu ra có đuôi là <code>.tflite</code> được xây dựng trên công nghệ **FlatBuffers** của Google thay vì Protocol Buffers (định dạng <code>.pb</code> truyền thống).</p>
      
      <div class="callout callout-important">
        <i data-lucide="database" class="callout-icon"></i>
        <div class="callout-content">
          <span class="callout-title">Sức mạnh của FlatBuffers:</span>
          <p>FlatBuffers cho phép LiteRT load mô hình trực tiếp từ ổ đĩa vào RAM của điện thoại dưới dạng nhị phân thô (Raw binary segment) và chạy tính toán trực tiếp trên đó mà **không cần bước giải tuần tự (Zero-Deserialization)**. Điều này giúp ứng dụng khởi động ngay lập tức và tiết kiệm tối đa RAM.</p>
        </div>
      </div>

      <h2>3. Bộ thông dịch (LiteRT Interpreter) - Chạy Real-time trên Mobile</h2>
      <p>Bộ thông dịch là nhân tố cốt lõi chạy trực tiếp trên ứng dụng di động Android/iOS của bạn. Nó đảm nhận các vai trò:</p>
      <ul>
        <li><strong>Load Model:</strong> Đọc file <code>.tflite</code> từ bộ nhớ.</li>
        <li><strong>Cấp phát Tensor (Tensor Allocation):</strong> Tính toán và chuẩn bị sẵn bộ nhớ đệm cần thiết cho các lớp đầu vào, trung gian và đầu ra.</li>
        <li><strong>Thực thi hạt nhân (Kernel Execution):</strong> Gọi các hàm toán học tối ưu hóa cao được viết bằng C++ (hỗ trợ tập lệnh NEON SIMD của ARM CPU) để tính toán đầu ra từ đầu vào của người dùng.</li>
      </ul>
    `
  },
  '1.4': {
    title: 'Phần cứng di động và Delegates tăng tốc hiệu năng',
    meta: { duration: '12 phút', difficulty: 'Trung bình', category: 'Phần cứng' },
    html: `
      <p>Nếu chỉ chạy bằng CPU thông thường, việc tính toán hàng triệu phép nhân ma trận của mô hình AI sẽ làm quá tải điện thoại. May mắn thay, chip xử lý di động ngày nay rất mạnh mẽ. LiteRT tận dụng điều này thông qua cơ chế **Delegates**.</p>

      <h2>1. Cơ chế Delegates hoạt động thế nào?</h2>
      <p>Mặc định, LiteRT Interpreter sẽ chạy mô hình trên CPU di động. Tuy nhiên, nếu bạn bật tính năng **Delegate**, Interpreter sẽ trích xuất một phần hoặc toàn bộ đồ thị tính toán của mô hình AI và bàn giao (delegate) cho một bộ xử lý chuyên dụng khác trên điện thoại để tính toán nhanh hơn.</p>

      <div class="math-block">
        Interpreter ➔ Gặp lớp tích chập ➔ [Bật Delegate] ➔ Chuyển sang GPU/NPU tính toán ➔ Trả kết quả về CPU
      </div>

      <h2>2. 4 Loại phần cứng tăng tốc chính trên Mobile</h2>
      
      <h3>A. CPU (Bộ xử lý trung tâm - Mặc định)</h3>
      <ul>
        <li><strong>Đặc điểm:</strong> Mọi điện thoại đều có. Rất linh hoạt, hỗ trợ 100% mọi toán tử AI.</li>
        <li><strong>Tối ưu hóa:</strong> LiteRT sử dụng đa luồng (Multi-threading) và tập lệnh ARM NEON để tối ưu hóa tính toán song song ở mức phần cứng CPU.</li>
      </ul>

      <h3>B. GPU Delegate (Bộ xử lý đồ họa)</h3>
      <ul>
        <li><strong>Đặc điểm:</strong> Thiết kế cho xử lý đồ họa 3D nên có hàng nghìn lõi tính toán song song cực mạnh. Rất thích hợp cho các mô hình xử lý ảnh/video (CNN).</li>
        <li><strong>Công nghệ:</strong> Dưới Android, GPU Delegate sử dụng OpenGL ES hoặc Vulkan. Dưới iOS, nó sử dụng Metal.</li>
      </ul>

      <h3>C. NNAPI / NPU Delegate (Neural Processing Unit)</h3>
      <ul>
        <li><strong>Đặc điểm:</strong> Chip chuyên dụng được thiết kế riêng cho các tác vụ học máy (AI chip). Cực kỳ tiết kiệm pin và siêu nhanh.</li>
        <li><strong>Công nghệ:</strong> Android cung cấp **Android Neural Networks API (NNAPI)**. LiteRT nói chuyện với NNAPI, NNAPI sẽ tự giao tiếp với chip NPU của các hãng phần cứng (như Tensor chip của Google Pixel, Bionic của Apple, hay APU của MediaTek/Qualcomm).</li>
      </ul>

      <h3>D. Hexagon DSP Delegate</h3>
      <ul>
        <li><strong>Đặc điểm:</strong> Bộ xử lý tín hiệu số (DSP) có trên các thiết bị chạy chip Snapdragon của Qualcomm. Rất tối ưu khi chạy các mô hình đã được lượng tử hóa sang số nguyên 8-bit (int8).</li>
      </ul>

      <div class="callout callout-warning">
        <i data-lucide="alert-triangle" class="callout-icon"></i>
        <div class="callout-content">
          <span class="callout-title">Lưu ý quan trọng khi chọn Delegate:</span>
          <p>Không phải mô hình nào chạy trên GPU cũng nhanh hơn CPU. Nếu mô hình quá nhỏ, thời gian copy dữ liệu từ RAM CPU sang bộ nhớ GPU còn lâu hơn thời gian CPU tự tính toán. Quy tắc chung: <strong>Chỉ dùng GPU/NPU cho các mô hình trung bình - nặng (như Object Detection, Segmentation)</strong>.</p>
        </div>
      </div>
    `
  },

  // ==========================================================================
  // MODULE 2: TỐI ƯU HÓA & VÒNG ĐỜI
  // ==========================================================================
  '2.1': {
    title: 'Quy trình chuyển đổi Model sang LiteRT',
    meta: { duration: '12 phút', difficulty: 'Trung bình', category: 'Quy trình' },
    html: `
      <p>Bước đầu tiên để đưa mô hình AI lên điện thoại là chuyển đổi file mô hình gốc (như <code>.h5</code> của Keras, <code>SavedModel</code> của TensorFlow, hoặc <code>.onnx</code> của PyTorch) sang định dạng <code>.tflite</code>.</p>
      
      <h2>1. Quy trình chuyển đổi từ TensorFlow/Keras (Python)</h2>
      <p>Google cung cấp API cực kỳ đơn giản trong Python thông qua lớp <code>tf.lite.TFLiteConverter</code>.</p>

      <div class="code-container">
        <div class="code-header">
          <span>Python (Keras Conversion)</span>
          <button class="btn-copy" onclick="copyCode(this)"><i data-lucide="copy" class="btn-copy-icon"></i>Copy</button>
        </div>
        <div class="code-body active">
          <pre><code><span class="code-keyword">import</span> tensorflow <span class="code-keyword">as</span> tf

<span class="code-comment"># 1. Load model Keras đã huấn luyện từ trước</span>
model = tf.keras.models.load_model(<span class="code-string">"my_model.h5"</span>)

<span class="code-comment"># 2. Khởi tạo bộ chuyển đổi từ model Keras</span>
converter = tf.lite.TFLiteConverter.from_keras_model(model)

<span class="code-comment"># 3. Thực hiện chuyển đổi sang dạng TFLite phẳng</span>
tflite_model = converter.convert()

<span class="code-comment"># 4. Ghi file ra ổ cứng</span>
<span class="code-keyword">with</span> open(<span class="code-string">"optimized_model.tflite"</span>, <span class="code-string">"wb"</span>) <span class="code-keyword">as</span> f:
    f.write(tflite_model)
print(<span class="code-string">"Chuyển đổi thành công!"</span>)</code></pre>
        </div>
      </div>

      <h2>2. Quy trình chuyển đổi từ PyTorch</h2>
      <p>Kể từ năm 2024, Google phát triển thư viện **ai_edge_torch** cho phép chuyển đổi trực tiếp mô hình PyTorch (dạng <code>nn.Module</code>) sang <code>.tflite</code> mà không cần thông qua ONNX:</p>

      <div class="code-container">
        <div class="code-header">
          <span>Python (ai_edge_torch PyTorch Conversion)</span>
          <button class="btn-copy" onclick="copyCode(this)"><i data-lucide="copy" class="btn-copy-icon"></i>Copy</button>
        </div>
        <div class="code-body active">
          <pre><code><span class="code-keyword">import</span> torch
<span class="code-keyword">import</span> torchvision
<span class="code-keyword">import</span> ai_edge_torch

<span class="code-comment"># 1. Load mô hình PyTorch (Ví dụ: ResNet18)</span>
model = torchvision.models.resnet18(pretrained=<span class="code-keyword">True</span>)
model.eval()

<span class="code-comment"># 2. Tạo một input mẫu (Dữ liệu dummy khớp shape đầu vào)</span>
sample_input = (torch.randn(1, 3, 224, 224),)

<span class="code-comment"># 3. Sử dụng ai_edge_torch để convert trực tiếp</span>
edge_model = ai_edge_torch.convert(model, sample_input)

<span class="code-comment"># 4. Lưu lại dưới định dạng .tflite</span>
edge_model.export(<span class="code-string">"resnet18.tflite"</span>)</code></pre>
        </div>
      </div>

      <div class="callout callout-tip">
        <i data-lucide="check-circle" class="callout-icon"></i>
        <div class="callout-content">
          <span class="callout-title">Kiểm tra thông tin mô hình:</span>
          <p>Sau khi convert, hãy sử dụng công cụ online miễn phí tuyệt vời là <a href="https://netron.app" target="_blank" style="color:var(--accent-primary); font-weight:600;">Netron.app</a> để kéo thả file <code>.tflite</code> vào. Bạn sẽ thấy trực quan toàn bộ kiến trúc đồ thị, tên các đầu vào/đầu ra, kích thước tensor và kiểu dữ liệu (Float32 hay Int8).</p>
        </div>
      </div>
    `
  },
  '2.2': {
    title: 'Tại sao cần Quantization (Lượng tử hóa)?',
    meta: { duration: '10 phút', difficulty: 'Trung bình', category: 'Lý thuyết Tối ưu hóa' },
    html: `
      <p>Huấn luyện một mô hình AI giống như xây dựng một ngôi nhà lớn. Nhưng khi đưa ngôi nhà đó lên chiếc thuyền di động, chúng ta phải tối giản nó. **Quantization (Lượng tử hóa)** chính là công cụ tối giản tối thượng.</p>

      <h2>1. Bản chất của số thực Float32 trong AI</h2>
      <p>Khi máy tính train mô hình AI, mọi trọng số (weights) và giá trị kích hoạt (activations) đều được lưu trữ dưới dạng **Float32 (Số thực dấu phẩy động 32-bit)**. Mỗi số thực này chiếm **4 Bytes** bộ nhớ.</p>
      <ul>
        <li>Nếu một mô hình chứa **100 triệu tham số (100M parameters)**, kích thước file trên đĩa cứng sẽ là: $100,000,000 \times 4 \text{ Bytes} = 400 \text{ MB}$.</li>
        <li>Kích thước này là quá nặng cho một ứng dụng di động tải về và chiếm quá nhiều RAM khi hoạt động.</li>
      </ul>

      <h2>2. Lượng tử hóa (Quantization) là gì?</h2>
      <p>Quantization là quá trình ánh xạ (ép) các số thực **Float32** (chạy từ vô hạn giá trị thực cực nhỏ) về các số nguyên nhỏ hơn, điển hình là **Int8 (Số nguyên 8-bit)** hoặc **Float16**.</p>
      
      <div class="math-block">
        Mỗi số Int8 chỉ chiếm <strong>1 Byte</strong> (tiết kiệm 75% dung lượng so với Float32!)
      </div>

      <h2>3. 3 Lý do cốt lõi bạn phải dùng Quantization trên Mobile</h2>
      
      <div class="callout callout-important">
        <i data-lucide="cpu" class="callout-icon"></i>
        <div class="callout-content">
          <span class="callout-title">Tại sao Quantization giúp tăng tốc độ thần kỳ?</span>
          <p>1. <strong>Giảm dung lượng file lưu trữ (Kích thước App):</strong> Mô hình 100M params ở dạng Int8 sẽ giảm từ 400MB xuống chỉ còn **100MB**. Người dùng sẽ dễ dàng tải app hơn.</p>
          <p>2. <strong>Giảm băng thông bộ nhớ RAM (Memory Bandwidth):</strong> Việc đọc 1 byte từ RAM vào CPU nhanh hơn gấp 4 lần việc đọc 4 byte. Đây là nút thắt cổ chai lớn nhất gây chậm hiệu năng trên điện thoại.</p>
          <p>3. <strong>Tính toán siêu tốc trên phần cứng:</strong> Hầu hết chip CPU di động (ARM NEON) và chip AI NPU đều được trang bị tập lệnh tính toán số nguyên Int8 song song cực nhanh. Việc nhân 2 số nguyên Int8 tốn ít bóng bán dẫn và năng lượng hơn rất nhiều so với nhân 2 số thực Float32, giúp điện thoại **không bị nóng máy và tiết kiệm pin** tối đa.</p>
        </div>
      </div>
    `
  },
  '2.3': {
    title: 'Các phương pháp Quantization trong LiteRT',
    meta: { duration: '15 phút', difficulty: 'Nâng cao', category: 'Kỹ thuật Tối ưu hóa' },
    html: `
      <p>LiteRT cung cấp nhiều chế độ Quantization khác nhau tùy thuộc vào nhu cầu của ứng dụng. Chúng được chia làm 2 nhánh lớn: **Post-Training Quantization (PTQ - Lượng tử hóa sau huấn luyện)** và **Quantization-Aware Training (QAT - Lượng tử hóa trong lúc huấn luyện)**.</p>

      <h2>1. Post-Training Quantization (PTQ) - Tiện lợi và Phổ biến</h2>
      <p>PTQ là phương pháp cực kỳ được ưa chuộng vì nó thực hiện trực tiếp khi convert mô hình, **không yêu cầu phải huấn luyện lại (re-train)** mô hình vốn rất tốn kém tài nguyên. Gồm 3 loại chính:</p>

      <h3>A. Dynamic Range Quantization (Lượng tử hóa dải động)</h3>
      <ul>
        <li><strong>Cơ chế:</strong> Khi convert, các trọng số (weights) được ép từ Float32 về Int8. Tuy nhiên, các giá trị kích hoạt trung gian (activations) vẫn giữ ở dạng Float32. Trong lúc chạy (inference), bộ Interpreter sẽ lượng tử hóa động các kích hoạt sang Int8, thực hiện phép nhân ma trận Int8, rồi lại giải lượng tử kết quả về Float32.</li>
        <li><strong>Ưu điểm:</strong> Rất dễ dùng, không cần dữ liệu mẫu. Giảm kích thước file đi ~4 lần. Tốc độ tăng khoảng 2x-3x.</li>
        <li><strong>Độ chính xác:</strong> Cực kỳ tốt, hầu như không bị suy giảm độ chính xác so với gốc.</li>
      </ul>

      <h3>B. Float16 Quantization (Lượng tử hóa sang Float16)</h3>
      <ul>
        <li><strong>Cơ chế:</strong> Trọng số được ép về dạng số thực 16-bit (Float16) thay vì Int8.</li>
        <li><strong>Ưu điểm:</strong> Giảm 50% kích thước file (từ 400MB xuống 200MB). Rất hoàn hảo khi bạn định deploy mô hình chạy trên **GPU di động** (vì GPU di động tính toán phép thực 16-bit cực nhanh).</li>
        <li><strong>Độ chính xác:</strong> Giữ nguyên 100% độ chính xác của mô hình Float32 gốc.</li>
      </ul>

      <h3>C. Full Integer Quantization (Lượng tử hóa số nguyên toàn phần)</h3>
      <ul>
        <li><strong>Cơ chế:</strong> Cả trọng số và giá trị kích hoạt đầu vào/đầu ra đều được ép hoàn toàn về Int8. Để làm được điều này, chúng ta cần cung cấp một bộ dữ liệu nhỏ mẫu đại diện (**Representative Dataset** - khoảng 100-500 ảnh/mẫu không cần nhãn) để Converter chạy thử mô hình, đo đạc dải phân phối của các giá trị kích hoạt và xác định tham số lượng tử tối ưu.</li>
        <li><strong>Ưu điểm:</strong> Tốc độ nhanh nhất, tiết kiệm pin nhất. **Bắt buộc** nếu bạn muốn chạy mô hình trên chip AI **NPU** hoặc **DSP**. Kích thước file giảm 4 lần.</li>
      </ul>

      <h2>2. Quantization-Aware Training (QAT) - Đỉnh cao của độ chính xác</h2>
      <p>Với các mô hình siêu nhạy cảm hoặc quá nhỏ (như MobileNet v3, YOLO), việc ép số sau khi train (PTQ) có thể làm giảm mạnh độ chính xác. Lúc này ta dùng **QAT**.</p>
      <ul>
        <li><strong>Cách hoạt động:</strong> Trong quá trình train bằng Python, chúng ta chèn các toán tử "giả lượng tử hóa" (Fake Quantization) vào đồ thị. Mô hình sẽ học cách thích nghi với sai số làm tròn số nguyên ngay khi đang học.</li>
        <li><strong>Kết quả:</strong> Khi convert sang file <code>.tflite</code> Int8, độ chính xác đạt mức tối đa gần như tương đương với mô hình Float32 gốc. Tuy nhiên, nhược điểm là triển khai phức tạp và cần huấn luyện lại từ đầu.</li>
      </ul>

      <div class="callout callout-tip">
        <i data-lucide="help-circle" class="callout-icon"></i>
        <div class="callout-content">
          <span class="callout-title">Lời khuyên thực chiến:</span>
          <p>Khi bắt đầu tối ưu hóa dự án, hãy luôn thử **Dynamic Range Quantization** trước tiên vì nó cực dễ và nhanh. Nếu mô hình chạy chậm trên Android CPU, hãy thử **Full Integer Quantization** để kích hoạt tăng tốc NPU. Nếu mô hình bị suy giảm độ chính xác nghiêm trọng, lúc đó mới nghĩ đến việc dùng **QAT**.</p>
        </div>
      </div>
    `
  },
  '2.4': {
    title: 'Toán học đằng sau Quantization: Công thức & Giải thuật',
    meta: { duration: '15 phút', difficulty: 'Nâng cao', category: 'Toán học AI' },
    html: `
      <p>Làm thế nào máy tính có thể biểu diễn một số thực phức tạp như $3.14159$ thành số nguyên 8-bit chạy từ $-128$ đến $127$? Hãy cùng khám phá công thức toán học đằng sau giải thuật này.</p>
      
      <h2>1. Công thức Lượng tử hóa Tuyến tính (Linear Quantization)</h2>
      <p>LiteRT sử dụng giải thuật lượng tử hóa tuyến tính đối xứng hoặc bất đối xứng, ánh xạ giá trị thực $r$ (real) sang giá trị số nguyên $q$ (quantized) thông qua hai tham số: **Scale ($S$)** và **Zero-point ($Z$)**.</p>
      
      <div class="math-block">
        $$q = \text{round}\left(\frac{r}{S}\right) + Z$$
      </div>

      <p>Trong đó:</p>
      <ul>
        <li><strong>$r$ (Real value):</strong> Giá trị số thực Float32 ban đầu.</li>
        <li><strong>$q$ (Quantized value):</strong> Giá trị số nguyên Int8 kết quả. $q$ bắt buộc phải nằm trong dải giới hạn của kiểu dữ liệu (với Int8 là $[-128, 127]$). Nếu vượt quá, giá trị sẽ bị cắt (**Clip**).</li>
        <li><strong>$S$ (Scale - Tỷ lệ):</strong> Một số thực dương Float32 thể hiện khoảng cách giữa các vạch chia số nguyên.</li>
        <li><strong>$Z$ (Zero-point - Điểm không):</strong> Một số nguyên Int8. Nó đại diện cho giá trị số thực $r = 0$ sẽ được ánh xạ chính xác về số nguyên nào trong miền lượng tử. Điều này vô cùng quan trọng vì trong mạng nơ-ron, giá trị $0$ (từ lớp ReLU, hay Padding biên) xuất hiện cực kỳ nhiều.</li>
      </ul>

      <h2>2. Công thức khôi phục số thực (De-quantization)</h2>
      <p>Để chuyển đổi ngược từ số nguyên lượng tử $q$ về số thực xấp xỉ ban đầu $r_{approx}$, ta dùng công thức:</p>
      <div class="math-block">
        $$r_{approx} = S \times (q - Z)$$
      </div>

      <h2>3. Ví dụ tính toán bằng tay từng bước</h2>
      <p>Giả sử chúng ta đo được dải giá trị thực của một lớp trọng số chạy từ $[r_{min}, r_{max}] = [-10.0, 10.0]$.</p>
      <p>Chúng ta muốn ánh xạ dải này vào miền số nguyên Int8 chạy từ $[q_{min}, q_{max}] = [-128, 127]$.</p>
      
      <h3>Bước A: Tính toán Scale ($S$)</h3>
      <p>$$S = \frac{r_{max} - r_{min}}{q_{max} - q_{min}} = \frac{10.0 - (-10.0)}{127 - (-128)} = \frac{20.0}{255} \approx 0.07843$$</p>

      <h3>Bước B: Tính toán Zero-point ($Z$)</h3>
      <p>Vì dải đối xứng qua điểm 0 nên điểm thực $r = 0.0$ sẽ tương đương số nguyên $q = 0$. Vậy $Z = 0$.</p>

      <h3>Bước C: Lượng tử hóa một giá trị cụ thể $r = 2.5$</h3>
      <p>$$q = \text{round}\left(\frac{2.5}{0.07843}\right) + 0 = \text{round}(31.87) = 32$$</p>
      <p>Vậy số thực **$2.5$** đã được lưu trữ cực gọn gàng dưới dạng số nguyên **$32$** trong file <code>.tflite</code>.</p>

      <h3>Bước D: Giải lượng tử để tính toán (De-quantize)</h3>
      <p>$$r_{approx} = 0.07843 \times (32 - 0) = 2.50976$$</p>
      <p><strong>Sai số làm tròn (Quantization Error):</strong> $2.50976 - 2.5 = 0.00976$ (~$0.39\%$). Sai số cực nhỏ này hoàn toàn có thể chấp nhận được để đổi lấy mức tăng tốc hiệu năng 4 lần!</p>

      <div class="callout callout-important">
        <i data-lucide="sliders" class="callout-icon"></i>
        <div class="callout-content">
          <span class="callout-title">Thử nghiệm trực quan:</span>
          <p>Hãy nhìn sang bảng điều khiển bên phải! Tôi đã xây dựng riêng cho bạn một **Bộ giả lập Quantization Simulator**. Bạn có thể kéo slider giá trị thực, thay đổi Scale/Zero-point và xem từng bước tính toán chi tiết hiển thị tức thì.</p>
        </div>
      </div>
    `
  },

  // ==========================================================================
  // MODULE 3: TRIỂN KHAI TRÊN ANDROID
  // ==========================================================================
  '3.1': {
    title: 'Thiết lập môi trường Android Studio & Cấu hình Gradle',
    meta: { duration: '8 phút', difficulty: 'Cơ bản', category: 'Android Setup' },
    html: `
      <p>Chào mừng bạn đến với phần thú vị nhất: Viết code Android! Trước khi viết code Kotlin, bạn cần khai báo các thư viện LiteRT vào dự án thông qua Gradle.</p>

      <h2>1. Thêm dependencies vào file build.gradle</h2>
      <p>Mở file <code>app/build.gradle.kts</code> (hoặc <code>build.gradle</code> nếu dùng Groovy) và thêm thư viện LiteRT cơ bản:</p>

      <div class="code-container">
        <div class="code-header">
          <span>build.gradle.kts (Kotlin DSL)</span>
          <button class="btn-copy" onclick="copyCode(this)"><i data-lucide="copy" class="btn-copy-icon"></i>Copy</button>
        </div>
        <div class="code-body active">
          <pre><code>dependencies {
    <span class="code-comment">// Thư viện lõi LiteRT (TensorFlow Lite cũ)</span>
    implementation(<span class="code-string">"org.tensorflow:tensorflow-lite:2.16.1"</span>)
    
    <span class="code-comment">// Thư viện hỗ trợ xử lý ảnh và tensor tiện ích</span>
    implementation(<span class="code-string">"org.tensorflow:tensorflow-lite-support:0.4.4"</span>)
    
    <span class="code-comment">// Thư viện hỗ trợ tăng tốc phần cứng GPU (Tùy chọn)</span>
    implementation(<span class="code-string">"org.tensorflow:tensorflow-lite-gpu:2.16.1"</span>)
}</code></pre>
        </div>
      </div>

      <h2>2. Ngăn Gradle nén nén file mô hình .tflite (Cực kỳ quan trọng!)</h2>
      <p>Mặc định, khi build file cài đặt ứng dụng Android (APK), hệ thống build Gradle sẽ tự động nén tất cả các file trong thư mục <code>assets</code> để giảm dung lượng tải. </p>
      <p>Tuy nhiên, **nếu file .tflite bị nén, hệ điều hành Android sẽ không thể thực hiện cơ chế ánh xạ bộ nhớ trực tiếp (Memory Map - mmap)**. Lúc đó ứng dụng buộc phải giải nén toàn bộ mô hình vào RAM, làm tăng thời gian mở ứng dụng và tốn cực nhiều RAM.</p>
      
      <p>Để ngăn điều này, bạn **bắt buộc** phải thêm cấu hình sau vào trong block <code>android { ... }</code> của file <code>build.gradle.kts</code>:</p>

      <div class="code-container">
        <div class="code-header">
          <span>build.gradle.kts (Android Block)</span>
          <button class="btn-copy" onclick="copyCode(this)"><i data-lucide="copy" class="btn-copy-icon"></i>Copy</button>
        </div>
        <div class="code-body active">
          <pre><code>android {
    ...
    aaptOptions {
        <span class="code-comment">// Chỉ định Gradle KHÔNG được nén các file có đuôi .tflite trong assets</span>
        noCompress(<span class="code-string">"tflite"</span>)
    }
}</code></pre>
        </div>
      </div>

      <h2>3. Đặt file mô hình vào thư mục Assets</h2>
      <p>Sau khi thiết lập gradle xong:</p>
      <ol>
        <li>Tạo một thư mục tên là <code>assets</code> nằm trong thư mục nguồn: <code>app/src/main/assets/</code>.</li>
        <li>Sao chép file mô hình <code>optimized_model.tflite</code> đã tối ưu của bạn vào thư mục này.</li>
      </ol>
    `
  },
  '3.2': {
    title: 'Load Model an toàn bằng MappedByteBuffer cho hiệu suất tối đa',
    meta: { duration: '12 phút', difficulty: 'Trung bình', category: 'Android Dev' },
    html: `
      <p>Tại sao các nhà phát triển chuyên nghiệp không bao giờ đọc trực tiếp file mô hình từ luồng đầu vào thông thường? Hãy tìm hiểu cách load mô hình đạt chuẩn Zero-Copy bằng <code>MappedByteBuffer</code>.</p>

      <h2>1. MappedByteBuffer là gì?</h2>
      <p><code>MappedByteBuffer</code> là một tính năng cao cấp của Java/Kotlin NIO (New I/O). Nó ánh xạ trực tiếp vùng nhớ vật lý chứa file <code>.tflite</code> trên bộ nhớ flash của điện thoại vào không gian địa chỉ ảo của ứng dụng.</p>
      <ul>
        <li><strong>Zero-Copy:</strong> LiteRT Interpreter có thể đọc trực tiếp các tham số của mô hình từ vùng nhớ ánh xạ này mà không cần copy dữ liệu sang RAM trung gian.</li>
        <li><strong>Giải phóng bộ nhớ lập tức:</strong> Khi hệ điều hành thiếu RAM, nó có thể tự động thu hồi vùng nhớ này mà không gây crash ứng dụng.</li>
      </ul>

      <h2>2. Hàm mẫu load file .tflite chuẩn trong Kotlin</h2>
      <p>Hãy tạo một class helper (ví dụ: <code>ModelLoader.kt</code>) và chép đoạn code tối ưu sau:</p>

      <div class="code-container">
        <div class="code-header">
          <span>Kotlin (ModelLoader.kt)</span>
          <button class="btn-copy" onclick="copyCode(this)"><i data-lucide="copy" class="btn-copy-icon"></i>Copy</button>
        </div>
        <div class="code-body active">
          <pre><code><span class="code-keyword">import</span> android.content.Context
<span class="code-keyword">import</span> android.content.res.AssetFileDescriptor
<span class="code-keyword">import</span> java.io.FileInputStream
<span class="code-keyword">import</span> java.io.IOException
<span class="code-keyword">import</span> java.nio.MappedByteBuffer
<span class="code-keyword">import</span> java.nio.channels.FileChannel

<span class="code-keyword">object</span> <span class="code-class">ModelLoader</span> {

    @Throws(IOException::<span class="code-class">Class</span>)
    <span class="code-keyword">fun</span> <span class="code-function">loadModelFile</span>(context: <span class="code-class">Context</span>, modelName: <span class="code-class">String</span>): <span class="code-class">MappedByteBuffer</span> {
        <span class="code-comment">// 1. Mở mô tả tệp từ thư mục assets</span>
        <span class="code-keyword">val</span> fileDescriptor: <span class="code-class">AssetFileDescriptor</span> = context.assets.openFd(modelName)
        
        <span class="code-comment">// 2. Tạo một luồng đọc tệp nhị phân</span>
        <span class="code-keyword">val</span> inputStream = <span class="code-class">FileInputStream</span>(fileDescriptor.fileDescriptor)
        <span class="code-keyword">val</span> fileChannel: <span class="code-class">FileChannel</span> = inputStream.channel
        
        <span class="code-comment">// 3. Xác định vị trí bắt đầu và độ dài của tệp mô hình</span>
        <span class="code-keyword">val</span> startOffset = fileDescriptor.startOffset
        <span class="code-keyword">val</span> declaredLength = fileDescriptor.declaredLength
        
        <span class="code-comment">// 4. Ánh xạ trực tiếp file vào bộ nhớ dưới dạng READ_ONLY</span>
        <span class="code-keyword">val</span> modelBuffer = fileChannel.map(
            <span class="code-class">FileChannel</span>.<span class="code-class">MapMode</span>.READ_ONLY, 
            startOffset, 
            declaredLength
        )
        
        <span class="code-comment">// 5. Đóng descriptor để tránh rò rỉ tài nguyên hệ thống</span>
        fileDescriptor.close()
        
        <span class="code-keyword">return</span> modelBuffer
    }
}</code></pre>
        </div>
      </div>

      <div class="callout callout-important">
        <i data-lucide="shield-alert" class="callout-icon"></i>
        <div class="callout-content">
          <span class="callout-title">Xử lý lỗi rò rỉ bộ nhớ (Memory Leak):</span>
          <p>Luôn bọc luồng code khởi tạo mô hình trong khối <code>try-catch</code>. Nếu quá trình load mô hình bị lỗi (ví dụ: file bị hỏng hoặc tên file viết sai chính tả), ứng dụng của bạn sẽ báo lỗi tường tận thay vì crash đột ngột.</p>
        </div>
      </div>
    `
  },
  '3.3': {
    title: 'Tiền xử lý hình ảnh thời gian thực với CameraX và Direct ByteBuffers',
    meta: { duration: '15 phút', difficulty: 'Nâng cao', category: 'Android Dev' },
    html: `
      <p>Một trong những lỗi phổ biến nhất khiến mô hình AI dự đoán sai bét trên điện thoại là **sai lệch trong bước tiền xử lý ảnh (Preprocessing)**. Mô hình trên máy tính được huấn luyện với các ảnh chuẩn hóa thế nào, thì ảnh chụp từ camera điện thoại phải được tiền xử lý giống hệt như vậy.</p>

      <h2>1. Quy trình Tiền xử lý hình ảnh chuẩn</h2>
      <p>Ảnh chụp từ Camera điện thoại là một tấm hình lớn đầy màu sắc. Mô hình của bạn (ví dụ MobileNet) chỉ nhận ảnh kích thước chuẩn $224 \times 224$ pixel. Do đó ta cần:</p>
      
      <div class="math-block">
        Camera Stream ➔ Xoay (Rotation) ➔ Cắt ảnh vuông (Crop) ➔ Giảm size (Scale) ➔ Chuẩn hóa (Normalize) ➔ Nạp ByteBuffer
      </div>

      <h2>2. Viết hàm tiền xử lý hình ảnh tối ưu bằng Kotlin</h2>
      <p>Sử dụng thư viện <code>tensorflow-lite-support</code> giúp rút gọn 90% dòng code tiền xử lý phức tạp nhờ các lớp <code>ImageProcessor</code> và <code>TensorImage</code>:</p>

      <div class="code-container">
        <div class="code-header">
          <span>Kotlin (ImagePreprocessing.kt)</span>
          <button class="btn-copy" onclick="copyCode(this)"><i data-lucide="copy" class="btn-copy-icon"></i>Copy</button>
        </div>
        <div class="code-body active">
          <pre><code><span class="code-keyword">import</span> android.graphics.Bitmap
<span class="code-keyword">import</span> org.tensorflow.lite.DataType
<span class="code-keyword">import</span> org.tensorflow.lite.support.image.ImageProcessor
<span class="code-keyword">import</span> org.tensorflow.lite.support.image.TensorImage
<span class="code-keyword">import</span> org.tensorflow.lite.support.image.ops.ResizeOp
<span class="code-keyword">import</span> org.tensorflow.lite.support.image.ops.RotatorOp
<span class="code-keyword">import</span> org.tensorflow.lite.support.common.ops.NormalizeOp
<span class="code-keyword">import</span> java.nio.ByteBuffer

<span class="code-keyword">class</span> <span class="code-class">ImagePreprocessor</span>(
    <span class="code-keyword">val</span> targetWidth: <span class="code-class">Int</span> = 224,
    <span class="code-keyword">val</span> targetHeight: <span class="code-class">Int</span> = 224
) {
    <span class="code-comment">// 1. Định nghĩa bộ chuẩn hóa: Ánh xạ pixel [0, 255] về dải thực [-1.0, 1.0] 
    // Công thức: output = (pixel - mean) / std</span>
    <span class="code-keyword">private val</span> normalizeOp = <span class="code-class">NormalizeOp</span>(127.5f, 127.5f)

    <span class="code-keyword">fun</span> <span class="code-function">preprocess</span>(bitmap: <span class="code-class">Bitmap</span>, rotationDegrees: <span class="code-class">Int</span>): <span class="code-class">TensorImage</span> {
        <span class="code-comment">// 2. Khởi tạo đối tượng chứa ảnh có kiểu Float32 (khớp đầu vào mô hình)</span>
        <span class="code-keyword">val</span> tensorImage = <span class="code-class">TensorImage</span>(<span class="code-class">DataType</span>.FLOAT32)
        tensorImage.load(bitmap)

        <span class="code-comment">// 3. Thiết lập chuỗi xử lý ảnh tuần tự cực mạnh</span>
        <span class="code-keyword">val</span> imageProcessor = <span class="code-class">ImageProcessor</span>.<span class="code-class">Builder</span>()
            .add(<span class="code-class">RotatorOp</span>(rotationDegrees / 90)) <span class="code-comment">// Xoay ảnh cho đúng hướng camera</span>
            .add(<span class="code-class">ResizeOp</span>(targetWidth, targetHeight, <span class="code-class">ResizeOp</span>.<span class="code-class">ResizeMethod</span>.BILINEAR)) <span class="code-comment">// Thu nhỏ ảnh về 224x224</span>
            .add(normalizeOp) <span class="code-comment">// Chuẩn hóa số thực</span>
            .build()

        <span class="code-comment">// 4. Thực thi tiền xử lý và trả về TensorImage sẵn sàng chạy</span>
        <span class="code-keyword">return</span> imageProcessor.process(tensorImage)
    }
}</code></pre>
        </div>
      </div>

      <div class="callout callout-important">
        <i data-lucide="zap" class="callout-icon"></i>
        <div class="callout-content">
          <span class="callout-title">Lưu ý về dải chuẩn hóa (Normalization):</span>
          <p>Nếu mô hình của bạn là dạng Lượng tử hóa toàn phần (Full Integer Int8 Model), giá trị đầu vào của mô hình sẽ là kiểu số nguyên 8-bit chứ không phải Float32. Khi đó, ở bước tạo <code>TensorImage</code> bạn phải chọn kiểu <code>DataType.UINT8</code> hoặc <code>DataType.INT8</code> và loại bỏ bước <code>NormalizeOp</code> số thực đi.</p>
        </div>
      </div>
    `
  },
  '3.4': {
    title: 'Chạy Inference (Dự đoán) trong Kotlin',
    meta: { duration: '12 phút', difficulty: 'Trung bình', category: 'Android Dev' },
    html: `
      <p>Sau khi đã load mô hình thành công và tiền xử lý ảnh xong, giờ là thời khắc quyết định: Nạp dữ liệu vào LiteRT Interpreter và kích hoạt mô hình dự đoán!</p>

      <h2>1. Khởi tạo đối tượng Interpreter với Options tùy chọn</h2>
      <p>Bạn nên thiết lập số luồng CPU (threads) để tận dụng đa lõi của chip điện thoại và bật cơ chế tăng tốc GPU nếu có:</p>

      <div class="code-container">
        <div class="code-header">
          <span>Kotlin (Interpreter Initialization)</span>
          <button class="btn-copy" onclick="copyCode(this)"><i data-lucide="copy" class="btn-copy-icon"></i>Copy</button>
        </div>
        <div class="code-body active">
          <pre><code><span class="code-keyword">import</span> org.tensorflow.lite.Interpreter
<span class="code-keyword">import</span> org.tensorflow.lite.gpu.GpuDelegate
<span class="code-keyword">import</span> java.io.File

<span class="code-comment">// 1. Cấu hình các tùy chọn cho bộ thông dịch</span>
<span class="code-keyword">val</span> options = <span class="code-class">Interpreter</span>.<span class="code-class">Options</span>().apply {
    setNumThreads(4) <span class="code-comment">// Cho phép chạy song song trên 4 nhân CPU</span>
    
    <span class="code-comment">// Bật tăng tốc GPU nếu phần cứng thiết bị hỗ trợ</span>
    <span class="code-keyword">try</span> {
        <span class="code-keyword">val</span> gpuDelegate = <span class="code-class">GpuDelegate</span>()
        addDelegate(gpuDelegate)
    } <span class="code-keyword">catch</span> (e: <span class="code-class">Exception</span>) {
        <span class="code-comment">// Thiết bị không hỗ trợ GPU, tự động fallback chạy CPU đa luồng</span>
    }
}

<span class="code-comment">// 2. Khởi tạo Interpreter từ MappedByteBuffer đã load ở bài 3.2</span>
<span class="code-keyword">val</span> interpreter = <span class="code-class">Interpreter</span>(modelBuffer, options)</code></pre>
        </div>
      </div>

      <h2>2. Thực hiện chạy dự đoán (Inference)</h2>
      <p>Chuẩn bị mảng đầu ra thích hợp để nhận kết quả từ Interpreter. Giả sử mô hình phân loại hình ảnh của bạn dự đoán 1001 nhãn (như mô hình MobileNet):</p>

      <div class="code-container">
        <div class="code-header">
          <span>Kotlin (Running Inference)</span>
          <button class="btn-copy" onclick="copyCode(this)"><i data-lucide="copy" class="btn-copy-icon"></i>Copy</button>
        </div>
        <div class="code-body active">
          <pre><code><span class="code-comment">// 1. Lấy dữ liệu ByteBuffer đã được tiền xử lý ở bài 3.3</span>
<span class="code-keyword">val</span> inputBuffer = preprocessedImage.buffer

<span class="code-comment">// 2. Chuẩn bị mảng để nhận xác suất đầu ra (shape là [1][1001])</span>
<span class="code-keyword">val</span> outputArray = <span class="code-class">Array</span>(1) { <span class="code-class">FloatArray</span>(1001) }

<span class="code-comment">// 3. Chạy mô hình! Phép toán đồng bộ sẽ khóa luồng cho tới khi hoàn tất</span>
interpreter.run(inputBuffer, outputArray)

<span class="code-comment">// 4. Đọc kết quả xác suất nhãn đầu tiên</span>
<span class="code-keyword">val</span> probabilities = outputArray[0]
<span class="code-keyword">val</span> maxProbIndex = probabilities.indices.maxByOrNull { probabilities[it] } ?: -1
<span class="code-keyword">val</span> maxConfidence = probabilities[maxProbIndex]

print(<span class="code-string">"Nhãn dự đoán có chỉ số: $maxProbIndex với độ tự tin: \${maxConfidence * 100}%"</span>)</code></pre>
        </div>
      </div>

      <div class="callout callout-warning">
        <i data-lucide="alert-triangle" class="callout-icon"></i>
        <div class="callout-content">
          <span class="callout-title">Tuyệt đối không chạy trên Luồng Giao Diện (UI Thread):</span>
          <p>Mặc dù chạy trên điện thoại rất nhanh (chỉ từ 10 - 45ms), phép toán <code>interpreter.run()</code> vẫn sẽ gây đơ nhẹ giao diện (ANR - Application Not Responding) nếu bạn chạy trực tiếp trên luồng chính (Main Thread). <strong>Hãy luôn bao bọc mã lệnh chạy inference trong một Coroutine (Kotlin Coroutines) trên luồng nền Dispatchers.Default</strong>.</p>
        </div>
      </div>
    `
  },
  '3.5': {
    title: 'Hậu xử lý (Post-processing) và Vẽ đè kết quả lên Canvas Android',
    meta: { duration: '15 phút', difficulty: 'Nâng cao', category: 'Android Dev' },
    html: `
      <p>Sau khi chạy mô hình dự đoán (ví dụ như mô hình nhận diện vật thể Object Detection), kết quả trả về chỉ là những con số nhị phân thô ngu ngốc. Bài học này sẽ hướng dẫn bạn cách chuyển hóa chúng thành khung viền bao quanh vật thể (bounding box) vẽ trực tiếp đè lên màn hình camera.</p>

      <h2>1. Hiểu định dạng đầu ra của mô hình Nhận diện vật thể (Object Detection)</h2>
      <p>Các mô hình nhận diện vật thể tiêu chuẩn (như SSD MobileNet) thường trả về 4 mảng đầu ra song song sau khi inference:</p>
      <ul>
        <li><strong>Bounding Boxes (Khung giới hạn):</strong> Trả về mảng 3 chiều kích thước <code>[1][100][4]</code> chứa tọa độ dạng tỉ lệ <code>[ymin, xmin, ymax, xmax]</code> (giá trị chạy từ <code>0.0</code> đến <code>1.0</code>).</li>
        <li><strong>Class IDs (Chỉ số lớp):</strong> Mảng chứa chỉ số của vật thể (ví dụ: 0 = "con người", 1 = "xe đạp").</li>
        <li><strong>Scores (Điểm tự tin):</strong> Mảng chứa xác suất tự tin của dự đoán (từ <code>0.0</code> đến <code>1.0</code>).</li>
        <li><strong>Number of Detections (Số lượng phát hiện):</strong> Một số thực duy nhất cho biết có bao nhiêu vật thể được phát hiện trong khung hình (ví dụ: tối đa 10 vật thể).</li>
      </ul>

      <h2>2. Xử lý tọa độ tỷ lệ về tọa độ Pixel thực tế trên màn hình</h2>
      <p>Vì tọa độ mô hình trả về là tỉ lệ phần trăm ảo (từ 0 đến 1), bạn phải nhân nó với kích thước chiều cao và chiều rộng thực tế của View hiển thị camera trên điện thoại:</p>
      <div class="math-block">
        $$X_{pixel} = x \times Width_{view}$$
        $$Y_{pixel} = y \times Height_{view}$$
      </div>

      <h2>3. Vẽ đè kết quả lên Custom View bằng Canvas</h2>
      <p>Tạo một lớp Custom View kế thừa từ <code>View</code> trong Android để vẽ đè các bounding box lên trên khung xem trước camera:</p>

      <div class="code-container">
        <div class="code-header">
          <span>Kotlin (OverlayView.kt)</span>
          <button class="btn-copy" onclick="copyCode(this)"><i data-lucide="copy" class="btn-copy-icon"></i>Copy</button>
        </div>
        <div class="code-body active">
          <pre><code><span class="code-keyword">import</span> android.content.Context
<span class="code-keyword">import</span> android.graphics.Canvas
<span class="code-keyword">import</span> android.graphics.Color
<span class="code-keyword">import</span> android.graphics.Paint
<span class="code-keyword">import</span> android.graphics.RectF
<span class="code-keyword">import</span> android.util.AttributeSet
<span class="code-keyword">import</span> android.view.View

<span class="code-keyword">class</span> <span class="code-class">OverlayView</span>(context: <span class="code-class">Context</span>, attrs: <span class="code-class">AttributeSet</span>?) : <span class="code-class">View</span>(context, attrs) {

    <span class="code-comment">// 1. Thiết lập cọ vẽ viền khung phát hiện</span>
    <span class="code-keyword">private val</span> boxPaint = <span class="code-class">Paint</span>().apply {
        color = <span class="code-class">Color</span>.GREEN
        style = <span class="code-class">Paint</span>.<span class="code-class">Style</span>.STROKE
        strokeWidth = 6.0f
    }

    <span class="code-comment">// 2. Thiết lập cọ vẽ chữ nhãn vật thể</span>
    <span class="code-keyword">private val</span> textPaint = <span class="code-class">Paint</span>().apply {
        color = <span class="code-class">Color</span>.WHITE
        textSize = 40.0f
        style = <span class="code-class">Paint</span>.<span class="code-class">Style</span>.FILL
    }

    <span class="code-comment">// Mảng chứa danh sách các vật thể cần vẽ đè lên camera</span>
    <span class="code-keyword">private var</span> results: <span class="code-class">List</span>&lt;<span class="code-class">DetectionResult</span>&gt; = emptyList()

    <span class="code-keyword">fun</span> <span class="code-function">setResults</span>(newResults: <span class="code-class">List</span>&lt;<span class="code-class">DetectionResult</span>&gt;) {
        results = newResults
        invalidate() <span class="code-comment">// Kích hoạt hệ thống yêu cầu vẽ lại màn hình (gọi onDraw)</span>
    }

    <span class="code-keyword">override fun</span> <span class="code-function">onDraw</span>(canvas: <span class="code-class">Canvas</span>) {
        <span class="code-keyword">super</span>.onDraw(canvas)
        
        <span class="code-comment">// 3. Lặp qua tất cả kết quả phát hiện và vẽ lên Canvas</span>
        <span class="code-keyword">for</span> (result <span class="code-keyword">in</span> results) {
            <span class="code-comment">// Chuyển đổi tỉ lệ bounding box thành pixel thực tế khớp màn hình</span>
            <span class="code-keyword">val</span> rect = <span class="code-class">RectF</span>(
                result.xmin * width,
                result.ymin * height,
                result.xmax * width,
                result.ymax * height
            )
            
            <span class="code-comment">// Vẽ hình hộp bao quanh vật thể</span>
            canvas.drawRect(rect, boxPaint)
            
            <span class="code-comment">// Vẽ văn bản nhãn hiệu vật thể và điểm số tự tin</span>
            <span class="code-keyword">val</span> displayText = <span class="code-string">"\${result.label} (\${String.format("%.1f", result.score * 100)}%)"</span>
            canvas.drawText(displayText, rect.left, rect.top - 10f, textPaint)
        }
    }
}

<span class="code-comment">// Khai báo lớp thực thể chứa dữ liệu phát hiện</span>
<span class="code-keyword">data class</span> <span class="code-class">DetectionResult</span>(
    <span class="code-keyword">val</span> ymin: <span class="code-class">Float</span>, <span class="code-keyword">val</span> xmin: <span class="code-class">Float</span>, <span class="code-keyword">val</span> ymax: <span class="code-class">Float</span>, <span class="code-keyword">val</span> xmax: <span class="code-class">Float</span>,
    <span class="code-keyword">val</span> label: <span class="code-class">String</span>,
    <span class="code-keyword">val</span> score: <span class="code-class">Float</span>
)</code></pre>
        </div>
      </div>
    `
  },

  // ==========================================================================
  // MODULE 4: CASE STUDIES THỰC CHIẾN ON-DEVICE
  // ==========================================================================
  '4.1': {
    title: 'Case Study Phân loại ảnh (Image Classification) với MobileNetV2',
    meta: { duration: '12 phút', difficulty: 'Trung bình', category: 'Case Study' },
    html: `
      <p><strong>Image Classification (Phân loại hình ảnh)</strong> là ứng dụng "kinh điển" và phổ biến nhất của AI trên di động. Hãy cùng xem cách triển khai thực tế mô hình phân loại ảnh nổi tiếng **MobileNetV2** (gồm 1001 lớp đối tượng) trên thiết bị di động.</p>
      
      <h2>1. Kiến trúc luồng xử lý và luồng dữ liệu</h2>
      <ul>
        <li><strong>Đầu vào (Input):</strong> Khung hình Camera có kích thước bất kỳ, được tiền xử lý thu nhỏ về chuẩn $224 \times 224$ pixel, 3 kênh màu RGB. Kiểu dữ liệu Float32. Đầu vào có hình dạng (shape) dạng ma trận 4 chiều: <code>[1, 224, 224, 3]</code>.</li>
        <li><strong>Đầu ra (Output):</strong> Một mảng Float32 chứa 1001 phần tử có shape: <code>[1, 1001]</code>. Mỗi phần tử là một xác suất (từ 0.0 đến 1.0) cho thấy bức ảnh khớp với một trong 1001 nhãn (như con mèo, cái ghế, ô tô, v.v.).</li>
      </ul>

      <h2>2. Viết Code Kotlin triển khai trọn vẹn</h2>
      <p>Dưới đây là mã nguồn Kotlin hoàn chỉnh, hiệu năng cao để thực thi phân loại ảnh sử dụng LiteRT Support Library để xử lý nhãn và tiền xử lý:</p>

      <div class="code-container">
        <div class="code-header">
          <span>Kotlin (ClassifierActivity.kt)</span>
          <button class="btn-copy" onclick="copyCode(this)"><i data-lucide="copy" class="btn-copy-icon"></i>Copy</button>
        </div>
        <div class="code-body active">
          <pre><code><span class="code-keyword">import</span> android.content.Context
<span class="code-keyword">import</span> android.graphics.Bitmap
<span class="code-keyword">import</span> org.tensorflow.lite.DataType
<span class="code-keyword">import</span> org.tensorflow.lite.Interpreter
<span class="code-keyword">import</span> org.tensorflow.lite.support.common.FileUtil
<span class="code-keyword">import</span> org.tensorflow.lite.support.image.ImageProcessor
<span class="code-keyword">import</span> org.tensorflow.lite.support.image.TensorImage
<span class="code-keyword">import</span> org.tensorflow.lite.support.image.ops.ResizeOp
<span class="code-keyword">import</span> org.tensorflow.lite.support.label.Category
<span class="code-keyword">import</span> org.tensorflow.lite.support.tensorbuffer.TensorBuffer
<span class="code-keyword">import</span> java.nio.MappedByteBuffer

<span class="code-keyword">class</span> <span class="code-class">MobileNetClassifier</span>(private <span class="code-keyword">val</span> context: <span class="code-class">Context</span>) {

    <span class="code-keyword">private var</span> interpreter: <span class="code-class">Interpreter</span>? = <span class="code-keyword">null</span>
    <span class="code-keyword">private var</span> labels: <span class="code-class">List</span>&lt;<span class="code-class">String</span>&gt; = emptyList()

    <span class="code-keyword">init</span> {
        <span class="code-comment">// 1. Load model MappedByteBuffer từ assets</span>
        <span class="code-keyword">val</span> modelBuffer: <span class="code-class">MappedByteBuffer</span> = <span class="code-class">ModelLoader</span>.loadModelFile(context, <span class="code-string">"mobilenet_v2.tflite"</span>)
        
        <span class="code-comment">// 2. Đọc file nhãn đi kèm nhúng trong assets</span>
        labels = <span class="code-class">FileUtil</span>.loadLabels(context, <span class="code-string">"labels.txt"</span>)
        
        <span class="code-comment">// 3. Cấu hình đa luồng và khởi tạo Interpreter</span>
        <span class="code-keyword">val</span> options = <span class="code-class">Interpreter</span>.<span class="code-class">Options</span>().apply { setNumThreads(4) }
        interpreter = <span class="code-class">Interpreter</span>(modelBuffer, options)
    }

    <span class="code-keyword">fun</span> <span class="code-function">classify</span>(bitmap: <span class="code-class">Bitmap</span>): <span class="code-class">List</span>&lt;<span class="code-class">Category</span>&gt; {
        <span class="code-keyword">val</span> inst = interpreter ?: <span class="code-keyword">return</span> emptyList()

        <span class="code-comment">// 4. Tiền xử lý ảnh Bitmap đầu vào đưa về kích thước 224x224 kiểu Float32</span>
        <span class="code-keyword">val</span> imageProcessor = <span class="code-class">ImageProcessor</span>.<span class="code-class">Builder</span>()
            .add(<span class="code-class">ResizeOp</span>(224, 224, <span class="code-class">ResizeOp</span>.<span class="code-class">ResizeMethod</span>.BILINEAR))
            .build()
        <span class="code-keyword">val</span> tensorImage = <span class="code-class">TensorImage</span>(<span class="code-class">DataType</span>.FLOAT32)
        tensorImage.load(bitmap)
        <span class="code-keyword">val</span> processedImage = imageProcessor.process(tensorImage)

        <span class="code-comment">// 5. Tạo bộ đệm đầu ra chứa xác suất (shape là [1, 1001])</span>
        <span class="code-keyword">val</span> outputBuffer = <span class="code-class">TensorBuffer</span>.createFixedSize(intArrayOf(1, 1001), <span class="code-class">DataType</span>.FLOAT32)

        <span class="code-comment">// 6. Thực thi mô hình</span>
        inst.run(processedImage.buffer, outputBuffer.buffer.rewind())

        <span class="code-comment">// 7. Ánh xạ mảng điểm số đầu ra sang đối tượng Category chứa tên nhãn tường minh</span>
        <span class="code-keyword">val</span> probabilityMap = mutableListOf&lt;<span class="code-class">Category</span>&gt;()
        <span class="code-keyword">val</span> outputArray = outputBuffer.floatArray
        <span class="code-keyword">for</span> (i <span class="code-keyword">in</span> outputArray.indices) {
            <span class="code-keyword">if</span> (i &lt; labels.size) {
                probabilityMap.add(<span class="code-class">Category</span>(labels[i], outputArray[i]))
            }
        }

        <span class="code-comment">// 8. Sắp xếp điểm số từ cao xuống thấp và trả về top 3 dự đoán tự tin nhất</span>
        probabilityMap.sortByDescending { it.score }
        <span class="code-keyword">return</span> probabilityMap.take(3)
    }

    <span class="code-keyword">fun</span> <span class="code-function">close</span>() {
        interpreter?.close()
        interpreter = <span class="code-keyword">null</span>
    }
}</code></pre>
        </div>
      </div>
    `
  },
  '4.2': {
    title: 'Case Study Trích xuất đặc trưng (Embedding Model) cho Local Vector Search',
    meta: { duration: '15 phút', difficulty: 'Nâng cao', category: 'Case Study' },
    html: `
      <p><strong>Embedding Model (Mô hình nhúng đặc trưng)</strong> là nền tảng cốt lõi của các ứng dụng tìm kiếm ngữ nghĩa thời thượng (Semantic Search) và RAG (Retrieval-Augmented Generation). </p>
      
      <p>Thay vì phân loại ảnh hay text thành một lớp cụ thể, Embedding model ánh xạ dữ liệu đầu vào thành một <strong>Vector toán học có số chiều cố định (e.g., 256, 384 hoặc 768 chiều)</strong> mang ý nghĩa ngữ nghĩa. Các dữ liệu có ý nghĩa giống nhau sẽ nằm gần nhau trong không gian Vector này.</p>

      <h2>1. Tại sao cần chạy Embedding Model trực tiếp trên Mobile?</h2>
      <div class="callout callout-important">
        <i data-lucide="shield" class="callout-icon"></i>
        <div class="callout-content">
          <span class="callout-title">Ứng dụng thực tiễn của On-Device Embedding:</span>
          <ul>
            <li><strong>Tìm kiếm ảnh thông minh offline:</strong> Tự quét toàn bộ ảnh trên điện thoại của người dùng, biến mỗi bức ảnh thành một vector biểu diễn, và cho phép tìm kiếm nhanh bằng từ khóa (ví dụ: gõ chữ "con chó" sẽ quét vector và hiển thị các ảnh con chó) mà không cần gửi ảnh lên server.</li>
            <li><strong>Semantic Search trong ghi chú:</strong> Tìm kiếm ngữ nghĩa trong ứng dụng ghi chú cá nhân hoàn toàn bảo mật.</li>
            <li><strong>Local RAG:</strong> Cung cấp ngữ cảnh từ danh bạ, tin nhắn, nhật ký người dùng cho mô hình SLM (LLM thu nhỏ) trả lời mà không lo lộ thông tin.</li>
          </ul>
        </div>
      </div>

      <h2>2. Giải thuật so sánh ngữ nghĩa Vector: Cosine Similarity</h2>
      <p>Để đo độ tương đồng ngữ nghĩa giữa hai thực thể $A$ và $B$ sau khi có vector biểu diễn, chúng ta sử dụng công thức **Cosine Similarity (Độ tương đồng Cosin)**:</p>
      
      <div class="math-block">
        $$\text{Cosine Similarity}(A, B) = \frac{A \cdot B}{\|A\| \times \|B\|} = \frac{\sum_{i=1}^{N} A_i B_i}{\sqrt{\sum_{i=1}^{N} A_i^2} \times \sqrt{\sum_{i=1}^{N} B_i^2}}$$
      </div>
      <p>Giá trị Cosine Similarity chạy từ <code>-1.0</code> đến <code>1.0</code>. Giá trị càng gần <code>1.0</code> chứng tỏ hai thực thể có nội dung ngữ nghĩa càng giống hệt nhau.</p>

      <h2>3. Code Kotlin trích xuất Embedding và Tính toán Cosine Similarity</h2>
      <p>Dưới đây là class mẫu Kotlin chạy mô hình nhúng đặc trưng (đầu ra là vector 384 chiều) và hàm tính độ tương đồng cục bộ siêu tốc:</p>

      <div class="code-container">
        <div class="code-header">
          <span>Kotlin (EmbeddingService.kt)</span>
          <button class="btn-copy" onclick="copyCode(this)"><i data-lucide="copy" class="btn-copy-icon"></i>Copy</button>
        </div>
        <div class="code-body active">
          <pre><code><span class="code-keyword">import</span> android.content.Context
<span class="code-keyword">import</span> org.tensorflow.lite.Interpreter
<span class="code-keyword">import</span> java.nio.FloatBuffer
<span class="code-keyword">import</span> java.nio.MappedByteBuffer
<span class="code-keyword">import</span> kotlin.math.sqrt

<span class="code-keyword">class</span> <span class="code-class">LocalEmbeddingEngine</span>(context: <span class="code-class">Context</span>) {

    <span class="code-keyword">private var</span> interpreter: <span class="code-class">Interpreter</span>? = <span class="code-keyword">null</span>
    <span class="code-keyword">private val</span> embeddingDim = 384 <span class="code-comment">// Số chiều vector đầu ra của mô hình (ví dụ MobileBERT embedding)</span>

    <span class="code-keyword">init</span> {
        <span class="code-keyword">val</span> modelBuffer: <span class="code-class">MappedByteBuffer</span> = <span class="code-class">ModelLoader</span>.loadModelFile(context, <span class="code-string">"text_embedding_model.tflite"</span>)
        <span class="code-keyword">val</span> options = <span class="code-class">Interpreter</span>.<span class="code-class">Options</span>().apply { setNumThreads(4) }
        interpreter = <span class="code-class">Interpreter</span>(modelBuffer, options)
    }

    <span class="code-comment">/**
     * Nhận mảng token của văn bản (đã qua tiền xử lý Tokenization) 
     * và trả về Vector biểu diễn 384 chiều
     */</span>
    <span class="code-keyword">fun</span> <span class="code-function">getEmbedding</span>(inputIds: <span class="code-class">IntArray</span>): <span class="code-class">FloatArray</span> {
        <span class="code-keyword">val</span> inst = interpreter ?: <span class="code-keyword">return</span> <span class="code-class">FloatArray</span>(embeddingDim)

        <span class="code-comment">// Tạo đầu vào shape: [1, max_sequence_length]</span>
        <span class="code-keyword">val</span> inputVal = <span class="code-class">Array</span>(1) { inputIds }
        
        <span class="code-comment">// Tạo đầu ra để nhận vector [1, 384]</span>
        <span class="code-keyword">val</span> outputMap = HashMap&lt;<span class="code-class">Int</span>, Any&gt;()
        <span class="code-keyword">val</span> outputArray = <span class="code-class">Array</span>(1) { <span class="code-class">FloatArray</span>(embeddingDim) }
        outputMap[0] = outputArray

        <span class="code-comment">// Thực thi inference</span>
        inst.runForMultipleInputsOutputs(arrayOf(inputVal), outputMap)

        <span class="code-keyword">return</span> outputArray[0]
    }

    <span class="code-comment">/**
     * Thuật toán tính độ tương đồng Cosin cục bộ giữa 2 Vector
     */</span>
    <span class="code-keyword">fun</span> <span class="code-function">cosineSimilarity</span>(vectorA: <span class="code-class">FloatArray</span>, vectorB: <span class="code-class">FloatArray</span>): <span class="code-class">Float</span> {
        <span class="code-keyword">var</span> dotProduct = 0.0f
        <span class="code-keyword">var</span> normA = 0.0f
        <span class="code-keyword">var</span> normB = 0.0f
        
        <span class="code-keyword">for</span> (i <span class="code-keyword">in</span> vectorA.indices) {
            dotProduct += vectorA[i] * vectorB[i]
            normA += vectorA[i] * vectorA[i]
            normB += vectorB[i] * vectorB[i]
        }
        
        <span class="code-keyword">val</span> denominator = sqrt(normA) * sqrt(normB)
        <span class="code-keyword">return if</span> (denominator == 0.0f) 0.0f <span class="code-keyword">else</span> (dotProduct / denominator)
    }
}</code></pre>
        </div>
      </div>
    `
  },
  '4.3': {
    title: 'Case Study Chạy Mô hình Ngôn ngữ nhỏ (SLM - Gemma/Llama) với MediaPipe LLM Inference API',
    meta: { duration: '15 phút', difficulty: 'Nâng cao', category: 'Case Study' },
    html: `
      <p>Kỷ nguyên Generative AI đang bùng nổ, và giờ đây bạn hoàn toàn có thể chạy các <strong>Small Language Models (SLM)</strong> như **Gemma 2B, Llama 3.2 1B/3B, hay Phi-3** trực tiếp ngay trên chính chiếc điện thoại Android/iOS của mình một cách hoàn toàn offline!</p>

      <h2>1. MediaPipe LLM Inference API là gì?</h2>
      <p>Để chạy các mô hình GenAI tự hồi quy (Auto-regressive) siêu phức tạp chứa hàng tỷ tham số, việc sử dụng Interpreter thô của TFLite là rất khó khăn. </p>
      
      <p>Google đã phát triển bộ công cụ **MediaPipe LLM Inference API** chạy đè lên nhân của LiteRT. Nó được thiết kế tối ưu riêng để chạy các mô hình ngôn ngữ lớn thu nhỏ thông qua việc tích hợp sâu cơ chế **KV Caching** (lưu trữ khóa/giá trị lịch sử hội thoại) và **quantization INT4/INT8** tối ưu phần cứng của GPU di động.</p>

      <h2>2. Chuẩn bị file mô hình SLM lượng tử hóa</h2>
      <p>Để chạy được offline, mô hình bắt buộc phải được lượng tử hóa sâu về dạng số nguyên 4-bit (INT4) để giảm kích thước (ví dụ: Gemma 2B INT4 có kích thước file <code>.bin</code> khoảng **1.3 GB**, vừa vặn với RAM của điện thoại di động).</p>

      <h2>3. Code Kotlin tích hợp trọn vẹn mô hình SLM</h2>
      <p>Thêm dependency vào Gradle:</p>
      <pre style="background:#090d16; padding:0.75rem; border-radius:8px; font-family:var(--font-code); font-size:0.85rem; margin:0.5rem 0;">implementation("com.google.mediapipe:tasks-genai:0.10.14")</pre>

      <p>Dưới đây là mã nguồn Kotlin chuẩn để tải mô hình và sinh văn bản dòng chảy thời gian thực (streaming text generation):</p>

      <div class="code-container">
        <div class="code-header">
          <span>Kotlin (LlmInferenceService.kt)</span>
          <button class="btn-copy" onclick="copyCode(this)"><i data-lucide="copy" class="btn-copy-icon"></i>Copy</button>
        </div>
        <div class="code-body active">
          <pre><code><span class="code-keyword">import</span> android.content.Context
<span class="code-keyword">import</span> com.google.mediapipe.tasks.genai.llminference.LlmInference
<span class="code-keyword">import</span> java.io.File

<span class="code-keyword">class</span> <span class="code-class">OnDeviceLLMManager</span>(private <span class="code-keyword">val</span> context: <span class="code-class">Context</span>) {

    <span class="code-keyword">private var</span> llmInference: <span class="code-class">LlmInference</span>? = <span class="code-keyword">null</span>
    
    <span class="code-keyword">fun</span> <span class="code-function">initializeModel</span>(modelPath: <span class="code-class">String</span>) {
        <span class="code-comment">// 1. Khởi tạo tùy chọn cấu hình cho mô hình lớn</span>
        <span class="code-keyword">val</span> options = <span class="code-class">LlmInference</span>.<span class="code-class">LlmInferenceOptions</span>.builder()
            .setModelFilePath(modelPath) <span class="code-comment">// Đường dẫn tới file gemma-2b-it-cpu-int4.bin</span>
            .setMaxTokens(512) <span class="code-comment">// Chiều dài tối đa của câu trả lời</span>
            .setTemperature(0.7f) <span class="code-comment">// Độ sáng tạo của câu trả lời</span>
            .setRandomSeed(42)
            .build()
            
        <span class="code-comment">// 2. Khởi dựng LlmInference</span>
        llmInference = <span class="code-class">LlmInference</span>.createFromOptions(context, options)
    }

    <span class="code-comment">/**
     * Thực thi hội thoại và trả về kết quả dòng chảy thời gian thực (Streaming output)
     */</span>
    <span class="code-keyword">fun</span> <span class="code-function">chatStream</span>(prompt: <span class="code-class">String</span>, onTokenReceived: (text: <span class="code-class">String</span>, isCompleted: <span class="code-class">Boolean</span>) -&gt; <span class="code-class">Unit</span>) {
        <span class="code-keyword">val</span> engine = llmInference
        <span class="code-keyword">if</span> (engine == <span class="code-keyword">null</span>) {
            onTokenReceived(<span class="code-string">"Lỗi: Mô hình chưa được khởi tạo!"</span>, <span class="code-keyword">true</span>)
            <span class="code-keyword">return</span>
        }

        <span class="code-comment">// Bọc prompt theo định dạng template hội thoại mong muốn</span>
        <span class="code-keyword">val</span> formattedPrompt = <span class="code-string">"&lt;start_of_turn&gt;user\\n\$prompt&lt;end_of_turn&gt;\\n&lt;start_of_turn&gt;model\\n"</span>

        <span class="code-comment">// 3. Kích hoạt sinh văn bản dạng async không đồng bộ để không khóa giao diện</span>
        engine.generateAsync(formattedPrompt) { partialResult, isDone -&gt;
            onTokenReceived(partialResult, isDone)
        }
    }

    <span class="code-keyword">fun</span> <span class="code-function">close</span>() {
        llmInference?.close()
        llmInference = <span class="code-keyword">null</span>
    }
}</code></pre>
        </div>
      </div>
    `
  },

  // ==========================================================================
  // MODULE 5: THỰC HÀNH JUPYTER NOTEBOOKS
  // ==========================================================================
  '5.1': {
    title: 'Notebook 1: Thực hành chuyển đổi & Tối ưu hóa mô hình với Python',
    meta: { duration: 'Giáo trình thực hành', difficulty: 'Trung bình', category: 'Notebook' },
    html: `
      <p>Để giúp bạn thực hành trực quan và trực tiếp trên PC của mình, tôi đã tạo ra một file Jupyter Notebook hoàn chỉnh có tên là <code>01_model_conversion_and_quantization.ipynb</code> nằm trong thư mục <code>notebooks/</code> của dự án.</p>
      
      <h2>1. Hướng dẫn sử dụng file thực hành</h2>
      <p>File notebook này chứa toàn bộ code Python đầy đủ, giải thích chi tiết và các ô lệnh chạy được ngay giúp bạn:</p>
      <ul>
        <li>Tải một mô hình mạng nơ-ron tích chập (CNN MobileNetV2) đã train sẵn từ thư viện Keras.</li>
        <li>Sử dụng API <code>tf.lite.TFLiteConverter</code> để chuyển đổi mô hình sang định dạng <code>.tflite</code> cơ bản dạng Float32.</li>
        <li>Thực hành cấu hình **Dynamic Range Quantization** để ép mô hình giảm 4 lần dung lượng chỉ với 3 dòng code.</li>
        <li>Thực hành cấu hình **Float16 Quantization** tối ưu sâu cho GPU di động.</li>
        <li>Thực hành **Full Integer Quantization** thông qua việc xây dựng một bộ dữ liệu mẫu (Representative Dataset) hiệu chuẩn dải phân phối.</li>
        <li>**Chạy đo đạc, so sánh kích thước file** (dung lượng KB/MB) và thời gian load mô hình trên đĩa của các phương pháp tối ưu hóa trên.</li>
      </ul>

      <h2>2. Cách chạy Notebook cục bộ</h2>
      <ol>
        <li>Mở terminal trên máy tính của bạn.</li>
        <li>Cài đặt các gói thư viện cần thiết:
          <pre style="background:#090d16; padding:0.75rem; border-radius:8px; font-family:var(--font-code); font-size:0.85rem; margin:0.5rem 0;">pip install tensorflow jupyter matplotlib</pre>
        </li>
        <li>Di chuyển vào thư mục dự án và mở Jupyter Notebook:
          <pre style="background:#090d16; padding:0.75rem; border-radius:8px; font-family:var(--font-code); font-size:0.85rem; margin:0.5rem 0;">cd /Users/admin/TuanDung/repos/tflite-litert-edu/notebooks
jupyter notebook</pre>
        </li>
        <li>Nhấp chuột vào file <code>01_model_conversion_and_quantization.ipynb</code> và bắt đầu chạy thực tế từng dòng code!</li>
      </ol>

      <div class="callout callout-important">
        <i data-lucide="file-text" class="callout-icon"></i>
        <div class="callout-content">
          <span class="callout-title">Đường dẫn file Notebook trong dự án của bạn:</span>
          <p>File thực hành số 1 đã được tạo và lưu trữ đầy đủ tại: <a href="file:///Users/admin/TuanDung/repos/tflite-litert-edu/notebooks/01_model_conversion_and_quantization.ipynb" style="color:var(--accent-primary); font-weight:600;">notebooks/01_model_conversion_and_quantization.ipynb</a></p>
        </div>
      </div>
    `
  },
  '5.2': {
    title: 'Notebook 2: Đóng gói Metadata & Chạy kiểm thử mô hình bằng Python',
    meta: { duration: 'Giáo trình thực hành', difficulty: 'Nâng cao', category: 'Notebook' },
    html: `
      <p>Sau khi có được file mô hình <code>.tflite</code> đã tối ưu, làm thế nào để ứng dụng di động Android hiểu được mô hình này nhận đầu vào dải màu gì? Thứ tự nhãn kết quả phân loại ở đâu? Chúng ta cần nhúng **Metadata** trực tiếp vào mô hình.</p>
      
      <h2>1. Nội dung bài thực hành Notebook số 2</h2>
      <p>File thực hành <code>02_model_metadata_and_python_inference.ipynb</code> trong thư mục <code>notebooks/</code> sẽ hướng dẫn bạn các kỹ thuật nâng cao bao gồm:</p>
      <ul>
        <li><strong>Đóng gói Metadata cấu trúc:</strong> Sử dụng thư viện <code>tflite-support</code> để nhúng các metadata kỹ thuật như: Tên tác giả, mô tả mô hình, tham số tiền xử lý mong muốn (Mean/Std), và quan trọng nhất là nhúng trực tiếp file nhãn văn bản (ví dụ: <code>labels.txt</code> chứa tên các con vật, đồ vật) vào bên trong file nhãn của mô hình nhị phân.</li>
        <li><strong>Chạy thử mô hình bằng Python Interpreter:</strong> Viết code sử dụng thư viện siêu gọn nhẹ <code>tflite_runtime</code> để load mô hình <code>.tflite</code> đã convert, nạp ảnh thực tế, tiền xử lý và chạy dự đoán ngay trên máy tính của bạn trước khi đưa mô hình vào Android Studio. Điều này giúp cô lập và kiểm chứng chắc chắn mô hình hoạt động chính xác 100%.</li>
      </ul>

      <h2>2. Cách chạy Notebook</h2>
      <p>Bạn thực hiện mở Jupyter giống như bài 4.1 và click vào file notebook số 2 để thực hành:</p>
      <pre style="background:#090d16; padding:0.75rem; border-radius:8px; font-family:var(--font-code); font-size:0.85rem; margin:1rem 0;"># Di chuyển và mở notebook thứ hai
cd /Users/admin/TuanDung/repos/tflite-litert-edu/notebooks
jupyter notebook</pre>

      <div class="callout callout-important">
        <i data-lucide="file-text" class="callout-icon"></i>
        <div class="callout-content">
          <span class="callout-title">Đường dẫn file Notebook thứ 2 trong dự án:</span>
          <p>File thực hành số 2 đã được lưu trữ sẵn sàng tại: <a href="file:///Users/admin/TuanDung/repos/tflite-litert-edu/notebooks/02_model_metadata_and_python_inference.ipynb" style="color:var(--accent-primary); font-weight:600;">notebooks/02_model_metadata_and_python_inference.ipynb</a></p>
        </div>
      </div>
    `
  }
};

// ==========================================================================
// Application Core Engine Logic
// ==========================================================================

let activeLessonId = '1.1';
const completedLessons = new Set();

document.addEventListener('DOMContentLoaded', () => {
  // Initialized Lucide icons
  lucide.createIcons();

  // Load Initial Lesson
  loadLesson(activeLessonId);

  // Setup sidebar navigation clicks
  const lessonItems = document.querySelectorAll('.lesson-item');
  lessonItems.forEach(item => {
    item.addEventListener('click', () => {
      const lessonId = item.getAttribute('data-lesson');
      loadLesson(lessonId);
      
      // Close sidebar on mobile
      if (window.innerWidth <= 768) {
        document.querySelector('.app-sidebar').style.transform = 'translateX(-100%)';
      }
    });
  });

  // Setup real-time search
  const searchInput = document.getElementById('lesson-search');
  searchInput.addEventListener('input', (e) => {
    filterLessons(e.target.value);
  });

  // Setup Quantization Simulator Interactive Controls
  setupQuantizationSimulator();

  // Setup Android Pipeline Visualizer
  setupPipelineVisualizer();
});

/**
 * Loads and renders the selected lesson into the main article reader.
 * @param {string} lessonId The ID of the lesson to load (e.g. '1.1')
 */
function loadLesson(lessonId) {
  if (!lessons[lessonId]) return;
  activeLessonId = lessonId;
  const lesson = lessons[lessonId];

  // Update navigation items active class
  document.querySelectorAll('.lesson-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-lesson') === lessonId) {
      item.classList.add('active');
    }
  });

  // Highlight completed state on view
  completedLessons.add(lessonId);
  const currentItem = document.querySelector(`.lesson-item[data-lesson="${lessonId}"]`);
  if (currentItem) {
    currentItem.classList.add('completed');
    const statusIcon = currentItem.querySelector('.status-icon');
    if (statusIcon) {
      statusIcon.setAttribute('data-lucide', 'check-circle');
    }
  }

  // Update progress bar
  updateProgressBar();

  // Build Lesson Header & Body
  const lessonViewer = document.getElementById('lesson-viewer');
  
  // Calculate next and previous lesson IDs
  const lessonKeys = Object.keys(lessons);
  const currentIndex = lessonKeys.indexOf(lessonId);
  const prevId = currentIndex > 0 ? lessonKeys[currentIndex - 1] : null;
  const nextId = currentIndex < lessonKeys.length - 1 ? lessonKeys[currentIndex + 1] : null;

  let navFooterHtml = `<div class="lesson-navigation">`;
  if (prevId) {
    navFooterHtml += `
      <button class="btn btn-secondary" onclick="loadLesson('${prevId}')">
        <i data-lucide="arrow-left" class="btn-icon"></i> Bài trước: ${lessons[prevId].title.split(':')[0]}
      </button>
    `;
  } else {
    navFooterHtml += `<div></div>`;
  }

  if (nextId) {
    navFooterHtml += `
      <button class="btn btn-primary" onclick="loadLesson('${nextId}')">
        Bài kế tiếp: ${lessons[nextId].title.split(':')[0]} <i data-lucide="arrow-right" class="btn-icon"></i>
      </button>
    `;
  } else {
    navFooterHtml += `<div></div>`;
  }
  navFooterHtml += `</div>`;

  // Inject Content
  lessonViewer.innerHTML = `
    <div class="lesson-meta-info">
      <span class="badge" style="margin-bottom:1rem;">${lesson.meta.category}</span>
    </div>
    <h1>${lesson.title}</h1>
    <div class="lesson-meta">
      <div class="meta-item">
        <i data-lucide="clock" class="meta-icon"></i>
        <span>Thời lượng học: ${lesson.meta.duration}</span>
      </div>
      <div class="meta-item">
        <i data-lucide="bar-chart-2" class="meta-icon"></i>
        <span>Độ khó: ${lesson.meta.difficulty}</span>
      </div>
      <div class="meta-item">
        <i data-lucide="user" class="meta-icon"></i>
        <span>Giáo trình: DeepMind Partner</span>
      </div>
    </div>

    <div class="lesson-body-text">
      ${lesson.html}
    </div>

    ${navFooterHtml}
  `;

  // Scroll main view to top smoothly
  const mainContainer = document.querySelector('.app-main');
  if (mainContainer) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Re-instantiate icons inside the newly generated content
  lucide.createIcons();
}

/**
 * Updates the user's progress bar based on visited lessons.
 */
function updateProgressBar() {
  const totalLessons = Object.keys(lessons).length;
  const completedCount = completedLessons.size;
  const percent = Math.round((completedCount / totalLessons) * 100);
  
  const fill = document.getElementById('progress-fill');
  const percentText = document.getElementById('progress-percent');
  
  if (fill && percentText) {
    fill.style.width = `${percent}%`;
    percentText.textContent = `${percent}%`;
  }
}

/**
 * Filters the table of contents list based on input query string.
 * @param {string} query Search input query
 */
function filterLessons(query) {
  const lowercaseQuery = query.toLowerCase().trim();
  const lessonItems = document.querySelectorAll('.lesson-item');
  const modules = document.querySelectorAll('.nav-module');
  let matchCount = 0;

  lessonItems.forEach(item => {
    const lessonId = item.getAttribute('data-lesson');
    const lesson = lessons[lessonId];
    const matchText = `${lesson.title} ${lesson.meta.category} ${lessonId}`.toLowerCase();
    
    if (matchText.includes(lowercaseQuery)) {
      item.classList.remove('hidden');
      matchCount++;
    } else {
      item.classList.add('hidden');
    }
  });

  // Hide or show parent module groups depending on whether children are visible
  modules.forEach(mod => {
    const visibleLessons = mod.querySelectorAll('.lesson-item:not(.hidden)');
    if (visibleLessons.length === 0) {
      mod.classList.add('hidden');
    } else {
      mod.classList.remove('hidden');
    }
  });

  // Show "No Results" page if no matches
  const noResults = document.getElementById('no-search-results');
  const lessonViewer = document.getElementById('lesson-viewer');
  const sidebarWidgets = document.querySelector('.lesson-sidebar');

  if (matchCount === 0) {
    noResults.classList.remove('hidden');
    lessonViewer.classList.add('hidden');
    if (sidebarWidgets) sidebarWidgets.classList.add('hidden');
  } else {
    noResults.classList.add('hidden');
    lessonViewer.classList.remove('hidden');
    if (sidebarWidgets) sidebarWidgets.classList.remove('hidden');
  }
}

/**
 * Sets up listeners and calculations for the Quantization Simulator.
 */
function setupQuantizationSimulator() {
  const floatInput = document.getElementById('float-input');
  const scaleInput = document.getElementById('param-scale');
  const zpInput = document.getElementById('param-zp');
  
  const floatValText = document.getElementById('float-val');
  const quantResultText = document.getElementById('quant-result');
  const dequantResultText = document.getElementById('dequant-result');
  const quantErrorText = document.getElementById('quant-error');
  const stepsContainer = document.querySelector('.formula-steps');

  function calculate() {
    const r = parseFloat(floatInput.value);
    const S = parseFloat(scaleInput.value) || 0.01;
    const Z = parseInt(zpInput.value) || 0;

    // Display values
    floatValText.textContent = r.toFixed(2);

    // 1. Quantization: q = round(r/S) + Z
    const rOverS = r / S;
    const roundedVal = Math.round(rOverS);
    let q = roundedVal + Z;

    // Clamp to Int8 boundaries [-128, 127]
    let clamped = false;
    let originalQ = q;
    if (q < -128) {
      q = -128;
      clamped = true;
    } else if (q > 127) {
      q = 127;
      clamped = true;
    }

    // 2. De-quantization: r_approx = S * (q - Z)
    const rApprox = S * (q - Z);
    const error = rApprox - r;
    const errorPercent = r !== 0 ? Math.abs((error / r) * 100) : 0;

    // Render results
    quantResultText.textContent = q + (clamped ? ' (Clamped!)' : '');
    dequantResultText.textContent = rApprox.toFixed(3);
    
    const errorSign = error >= 0 ? '+' : '';
    quantErrorText.textContent = `${errorSign}${error.toFixed(4)} (${errorPercent.toFixed(1)}%)`;
    quantErrorText.style.color = Math.abs(errorPercent) > 10 ? 'var(--accent-danger)' : (Math.abs(errorPercent) > 3 ? 'var(--accent-warning)' : 'var(--accent-success)');

    // Render step-by-step mathematical breakdown
    stepsContainer.innerHTML = `
      <span>1. Chia cho Scale: r / S = ${r.toFixed(2)} / ${S} = ${rOverS.toFixed(4)}</span>
      <span>2. Làm tròn: round(${rOverS.toFixed(3)}) = ${roundedVal}</span>
      <span>3. Cộng Zero-point: ${roundedVal} + (${Z}) = ${originalQ}</span>
      ${clamped ? `<span style="color:var(--accent-danger)">⚠️ Bị cắt (Clamped) về dải Int8 [-128, 127]: q = ${q}</span>` : ''}
      <span>4. Giải lượng tử: S * (q - Z) = ${S} * (${q} - (${Z})) = ${rApprox.toFixed(3)}</span>
    `;
  }

  // Event Listeners
  if (floatInput && scaleInput && zpInput) {
    floatInput.addEventListener('input', calculate);
    scaleInput.addEventListener('input', calculate);
    zpInput.addEventListener('input', calculate);
    calculate(); // Initial run
  }
}

/**
 * Sets up visual stages and logic for the Android Pipeline Visualizer.
 */
function setupPipelineVisualizer() {
  const steps = [
    {
      title: 'Bước 1: Camera Stream (YUV_420_888)',
      desc: '<strong>Bước 1: Camera Stream (YUV_420_888).</strong> Nhận khung hình thô từ CameraX dưới dạng YUV. Đây là định dạng màu hiệu quả được các cảm biến máy ảnh sử dụng, cực kỳ nhẹ nhưng cần được xoay sang hướng dọc và cắt thành hình vuông trước khi xử lý.'
    },
    {
      title: 'Bước 2: Preprocessing (ByteBuffer)',
      desc: '<strong>Bước 2: Tiền xử lý (Image Support Library).</strong> Chuyển khung hình YUV thành RGB Bitmap. Xoay Bitmap theo hướng màn hình (thông qua <code>RotatorOp</code>), thu nhỏ về kích thước mô hình nhận (ví dụ: <code>224x224</code>), chuẩn hóa giá trị pixel thực tế sang dải màu <code>[-1.0, 1.0]</code> hoặc <code>[0.0, 1.0]</code>, rồi ghi tuần tự các giá trị kênh R-G-B vào một bộ nhớ đệm luồng trực tiếp <code>ByteBuffer</code>.'
    },
    {
      title: 'Bước 3: LiteRT Interpreter Run',
      desc: '<strong>Bước 3: Chạy mô hình (Inference).</strong> Nạp <code>ByteBuffer</code> đã chuẩn hóa vào vùng nhớ đệm đầu vào của <code>Interpreter</code>. Kích hoạt lệnh đồng bộ <code>interpreter.run()</code>. Bộ thông dịch sẽ kêu gọi các tập lệnh tối ưu phần cứng của GPU hoặc NPU của chip điện thoại để nhân hàng triệu ma trận lớp trong vài mili-giây.'
    },
    {
      title: 'Bước 4: Postprocessing & Canvas Overlay',
      desc: '<strong>Bước 4: Hậu xử lý & Vẽ đè.</strong> Đọc dữ liệu mảng thô từ vùng nhớ đầu ra của mô hình. Trích xuất chỉ số xác suất nhãn lớn nhất (Classification) hoặc tọa độ phần trăm khung phát hiện (Object Detection). Ánh xạ tọa độ tỉ lệ ảo về kích thước pixel vật lý của màn hình và vẽ đè các khung viền vuông (bounding boxes) lên trên màn hình thông qua canvas của <code>OverlayView</code>.'
    }
  ];

  let currentStepIndex = 0;
  const btnNext = document.getElementById('btn-next-step');
  const stepDesc = document.getElementById('step-description');

  if (btnNext && stepDesc) {
    btnNext.addEventListener('click', () => {
      // Toggle to next step
      currentStepIndex = (currentStepIndex + 1) % steps.length;
      
      // Update UI active step class
      const pipelineSteps = document.querySelectorAll('.pipeline-step');
      pipelineSteps.forEach((step, idx) => {
        if (idx === currentStepIndex) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });

      // Update description text
      stepDesc.innerHTML = steps[currentStepIndex].desc;
      
      // Update button text
      if (currentStepIndex === steps.length - 1) {
        btnNext.textContent = 'Quay lại Bước 1';
      } else {
        btnNext.textContent = 'Bước tiếp theo';
      }
    });
  }
}

/**
 * Copy code helper function.
 * @param {HTMLElement} btn The copy button element clicked
 */
function copyCode(btn) {
  const codeContainer = btn.closest('.code-container');
  const codeBody = codeContainer.querySelector('.code-body.active code');
  
  if (codeBody) {
    navigator.clipboard.writeText(codeBody.innerText).then(() => {
      // Success feedback
      const originalText = btn.innerHTML;
      btn.innerHTML = `<i data-lucide="check" class="btn-copy-icon" style="color:var(--accent-success)"></i>Copied!`;
      lucide.createIcons();
      
      setTimeout(() => {
        btn.innerHTML = originalText;
        lucide.createIcons();
      }, 2000);
    });
  }
}
