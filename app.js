/* ==========================================================================
   LiteRT Academy - Lesson Index & Core Engine (Modular Single Page App)
   ========================================================================== */

// Compact Metadata Index for Instant In-Memory Searching & Navigation
const lessons = {
  '1.1': {
    title: 'Edge AI & Mobile AI là gì? Tại sao nên chọn On-Device?',
    meta: { duration: '10 phút', difficulty: 'Cơ bản', category: 'Nền tảng' },
    keywords: 'edge ai, mobile ai, on device, on-device, low latency, privacy, offline capability, zero server cost, OOM, Out of Memory, RAM, battery'
  },
  '1.2': {
    title: 'Từ TensorFlow Lite sang LiteRT: Bước chuyển mình lớn của Google',
    meta: { duration: '8 phút', difficulty: 'Cơ bản', category: 'Lịch sử & Xu hướng' },
    keywords: 'tensorflow lite, tflite, litert, google, rebrand, ai edge torch, pytorch, generative ai, gemma, llama, compatible'
  },
  '1.3': {
    title: 'Kiến trúc bên trong LiteRT: Cách hoạt động của hệ thống',
    meta: { duration: '12 phút', difficulty: 'Trung bình', category: 'Kiến trúc' },
    keywords: 'converter, offline converter, graph optimization, flatbuffers, tflite, interpreter, execution kernels, serialization, zero-copy'
  },
  '1.4': {
    title: 'Phần cứng di động và Delegates tăng tốc hiệu năng',
    meta: { duration: '12 phút', difficulty: 'Trung bình', category: 'Phần cứng' },
    keywords: 'hardware acceleration, delegates, cpu multi-threading, arm neon, gpu, opencl, vulkan, metal, nnapi, npu, hexagon dsp'
  },
  '2.1': {
    title: 'Quy trình chuyển đổi Model sang LiteRT',
    meta: { duration: '12 phút', difficulty: 'Trung bình', category: 'Quy trình' },
    keywords: 'python, tfliteconverter, from_keras_model, savedmodel, pytorch, ai_edge_torch, export, netron, visualize'
  },
  '2.2': {
    title: 'Tại sao cần Quantization (Lượng tử hóa)?',
    meta: { duration: '10 phút', difficulty: 'Trung bình', category: 'Lý thuyết Tối ưu hóa' },
    keywords: 'float32, 4 bytes, weights, activations, quantization, int8, 1 byte, memory bandwidth, ram, battery, heating'
  },
  '2.3': {
    title: 'Các phương pháp Quantization trong LiteRT',
    meta: { duration: '15 phút', difficulty: 'Nâng cao', category: 'Kỹ thuật Tối ưu hóa' },
    keywords: 'post training quantization, ptq, dynamic range, float16, gpu, full integer, representative dataset, calibration, quantization aware training, qat'
  },
  '2.4': {
    title: 'Toán học đằng sau Quantization: Công thức & Giải thuật',
    meta: { duration: '15 phút', difficulty: 'Nâng cao', category: 'Toán học AI' },
    keywords: 'linear quantization, real, quantized, scale, zero point, rounding, dequantization, error, mathematical formula'
  },
  '3.1': {
    title: 'Thiết lập môi trường Android Studio & Cấu hình Gradle',
    meta: { duration: '8 phút', difficulty: 'Cơ bản', category: 'Android Setup' },
    keywords: 'android studio, gradle, dependency, tensorflow-lite, tflite-support, noCompress, assets, aaptoptions'
  },
  '3.2': {
    title: 'Load Model an toàn bằng MappedByteBuffer cho hiệu suất tối đa',
    meta: { duration: '12 phút', difficulty: 'Trung bình', category: 'Android Dev' },
    keywords: 'mappedbytebuffer, nio, zero copy, assetfiledescriptor, filechannel, memory map, leak, exception, try-catch'
  },
  '3.3': {
    title: 'Tiền xử lý hình ảnh thời gian thực với CameraX và Direct ByteBuffers',
    meta: { duration: '15 phút', difficulty: 'Nâng cao', category: 'Android Dev' },
    keywords: 'camerax, preprocessing, rotation, crop, scale, bilinear, normalize, tensorimage, bytebuffer, imageprocessor'
  },
  '3.4': {
    title: 'Chạy Inference (Dự đoán) trong Kotlin',
    meta: { duration: '12 phút', difficulty: 'Trung bình', category: 'Android Dev' },
    keywords: 'interpreter options, multi-threading, threads, gpu delegate, inference, run, floatarray, coroutines, thread blocking'
  },
  '3.5': {
    title: 'Hậu xử lý (Post-processing) và Vẽ đè kết quả lên Canvas Android',
    meta: { duration: '15 phút', difficulty: 'Nâng cao', category: 'Android Dev' },
    keywords: 'postprocessing, object detection, bounding box, coordinates mapping, canvas, paint, ondraw, invalidate, overlayview'
  },
  '4.1': {
    title: 'Case Study Phân loại ảnh (Image Classification) với MobileNetV2',
    meta: { duration: '12 phút', difficulty: 'Trung bình', category: 'Case Study' },
    keywords: 'case study, image classification, mobilenetv2, mobilenet, category, probabilities, labels, fileutil'
  },
  '4.2': {
    title: 'Case Study Trích xuất đặc trưng (Embedding Model) cho Local Vector Search',
    meta: { duration: '15 phút', difficulty: 'Nâng cao', category: 'Case Study' },
    keywords: 'case study, text embedding, semantic search, local rag, vector representation, cosine similarity, cosine, similarity formula, math'
  },
  '4.3': {
    title: 'Case Study Chạy Mô hình Ngôn ngữ nhỏ (SLM - Gemma/Llama) với MediaPipe LLM Inference API',
    meta: { duration: '15 phút', difficulty: 'Nâng cao', category: 'Case Study' },
    keywords: 'case study, small language model, slm, llm, gemma, llama, on-device, offline, mediapipe, tasks-genai, llminference, generateasync, streaming'
  },
  '5.1': {
    title: 'Notebook 1: Thực hành chuyển đổi & Tối ưu hóa mô hình với Python',
    meta: { duration: 'Giáo trình thực hành', difficulty: 'Trung bình', category: 'Notebook' },
    keywords: 'notebook, jupyter, keras, mobilenet, python, dynamic range, float16, full integer, representative dataset'
  },
  '5.2': {
    title: 'Notebook 2: Đóng gói Metadata & Chạy kiểm thử mô hình bằng Python',
    meta: { duration: 'Giáo trình thực hành', difficulty: 'Nâng cao', category: 'Notebook' },
    keywords: 'notebook, jupyter, metadata, labels, tflite-support, metadatawriter, python interpreter, invoke, get_tensor'
  },
  '6.1': {
    title: 'Custom Ops: Viết, biên dịch và đăng ký Custom Operator C++ tự thiết kế',
    meta: { duration: '20 phút', difficulty: 'Chuyên gia', category: 'Nghiên cứu & Tối ưu' },
    keywords: 'custom op, custom operator, c++, register, tf.lite.tfliteconverter, mutableopresolver, cmake, android ndk, flatbuffers, prepare, eval'
  },
  '6.2': {
    title: 'Tuning & Fallback: Phân tích phân mảnh đồ thị và triệt tiêu độ trễ CPU-GPU',
    meta: { duration: '18 phút', difficulty: 'Chuyên gia', category: 'Nghiên cứu & Tối ưu' },
    keywords: 'delegate fallback, graph partitioning, profiling, memory copy, host device copy, overhead, op resolver, gpu delegate, npu'
  },
  '6.3': {
    title: 'Advanced Quantization: Sensitivity Profiling, KL Divergence & Bias Correction',
    meta: { duration: '22 phút', difficulty: 'Chuyên gia', category: 'Nghiên cứu & Tối ưu' },
    keywords: 'kl divergence, kullback-leibler, mse, sensitivity analysis, sensitivity peak, outlier aware, mixed precision, bias correction, weight quantization, activations'
  },
  '6.4': {
    title: 'Zero-Copy Execution: AHardwareBuffer & C++ Direct Memory Mappings',
    meta: { duration: '20 phút', difficulty: 'Chuyên gia', category: 'Nghiên cứu & Tối ưu' },
    keywords: 'zero copy, zero-copy, ahardwarebuffer, hardware buffer, gpu texture, native pointer, direct bytebuffer, ndk, opencl, vulkan'
  },
  '6.5': {
    title: 'On-Device Personalization: Huấn luyện mô hình song song ngược (Backprop) cục bộ',
    meta: { duration: '25 phút', difficulty: 'Chuyên gia', category: 'Nghiên cứu & Tối ưu' },
    keywords: 'on-device training, personalization, training subgraph, flatbuffer backward, gradients, weight updates, loss function, optimizer, federated learning, differential privacy'
  }
};

let activeLessonId = '1.1';
const completedLessons = new Set();

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
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

  // Setup sidebar toggle for customization resizability
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('.app-sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }

  // Setup Custom Drag Resizer
  setupSidebarResizer();

  // Setup Quantization Simulator Interactive Controls
  setupQuantizationSimulator();

  // Setup Android Pipeline Visualizer
  setupPipelineVisualizer();
});

/**
 * Asynchronously loads and renders the selected lesson by fetching its HTML file
 * @param {string} lessonId The ID of the lesson to load (e.g. '1.1')
 */
async function loadLesson(lessonId) {
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

  // Get view references
  const lessonViewer = document.getElementById('lesson-viewer');
  
  // Calculate next and previous lesson IDs
  const lessonKeys = Object.keys(lessons);
  const currentIndex = lessonKeys.indexOf(lessonId);
  const prevId = currentIndex > 0 ? lessonKeys[currentIndex - 1] : null;
  const nextId = currentIndex < lessonKeys.length - 1 ? lessonKeys[currentIndex + 1] : null;

  // Build navigation footer
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

  // Render Skeleton loader while fetching
  lessonViewer.innerHTML = `
    <div class="content-skeleton">
      <span class="badge" style="margin-bottom:1rem;">${lesson.meta.category}</span>
      <h2>Đang tải bài giảng...</h2>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
    </div>
  `;

  // Render Jupyter Notebook natively as high-quality UI document if selected
  if (lessonId === '5.1' || lessonId === '5.2') {
    const notebookFile = lessonId === '5.1'
      ? 'notebooks/01_model_conversion_and_quantization.ipynb'
      : 'notebooks/02_model_metadata_and_python_inference.ipynb';
      
    try {
      const response = await fetch(notebookFile);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      const notebook = JSON.parse(text);
      
      let notebookHtml = `
        <div class="notebook-header-card">
          <div class="notebook-title-area">
            <span class="notebook-meta-title">Jupyter Notebook UI Viewer 📓</span>
            <span class="notebook-meta-desc">Tự động kết xuất và trực quan hóa tệp thực hành học phần (.ipynb)</span>
          </div>
          <a href="${notebookFile}" download class="btn btn-primary" style="text-decoration: none;">
            <i data-lucide="download" class="btn-icon"></i> Tải xuống file (.ipynb)
          </a>
        </div>
        <div class="notebook-container">
      `;
      
      let codeCellCount = 1;
      
      notebook.cells.forEach(cell => {
        const sourceText = cell.source.join('');
        if (cell.cell_type === 'markdown') {
          // Use high-fidelity marked.js parser for rendering notebook markdown cells
          const html = window.marked ? window.marked.parse(sourceText) : sourceText;
          notebookHtml += `
            <div class="notebook-cell markdown-cell">
              <div class="cell-num"></div>
              <div class="cell-content">
                ${html}
              </div>
            </div>
          `;
        } else if (cell.cell_type === 'code') {
          // Escape HTML characters to prevent breaking DOM layout
          const escapedCode = sourceText
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
            
          notebookHtml += `
            <div class="notebook-cell code-cell">
              <div class="cell-num">In [${codeCellCount++}]:</div>
              <div class="cell-content">
                <pre><code class="language-python">${escapedCode}</code></pre>
              </div>
            </div>
          `;
        }
      });
      
      notebookHtml += `</div>`;
      
      // Inject completed notebook UI view
      lessonViewer.innerHTML = `
        <div class="lesson-meta-info">
          <span class="badge" style="margin-bottom:1rem;">${lesson.meta.category}</span>
        </div>
        <h1>${lesson.title}</h1>
        <div class="lesson-meta" style="margin-bottom: 1.5rem;">
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
          ${notebookHtml}
        </div>

        ${navFooterHtml}
      `;
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
      lucide.createIcons();
      
      // Trigger Prism syntax highlighting for Python code cells
      if (window.Prism) {
        window.Prism.highlightAll();
      }
      
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
      }
      return;
    } catch (err) {
      console.error('Failed to parse notebook JSON, falling back to html:', err);
    }
  }

  // Fetch the lesson content asynchronously
  try {
    const response = await fetch(`lessons/${lessonId}.html`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const htmlContent = await response.text();

    // Inject Content once fetched successfully
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
        ${htmlContent}
      </div>

      ${navFooterHtml}
    `;

    // Scroll main view to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Re-instantiate icons inside the newly generated content
    lucide.createIcons();

    // Re-instantiate MathJax math formulas in dynamically loaded content
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }

  } catch (err) {
    console.error('Failed to load lesson:', err);
    lessonViewer.innerHTML = `
      <div class="callout callout-warning" style="margin-top:2rem;">
        <i data-lucide="alert-triangle" class="callout-icon"></i>
        <div class="callout-content">
          <span class="callout-title">Lỗi tải bài học ⚠️</span>
          <p>Không thể tải bài học <strong>${lesson.title}</strong> từ file <code>lessons/${lessonId}.html</code>.</p>
          <p style="margin-top:0.5rem; font-size:0.88rem; opacity:0.85;">
            Trình duyệt chặn tải file cục bộ qua giao thức <code>file://</code> do chính sách bảo mật CORS.
            Vui lòng khởi chạy máy chủ HTTP để học (ví dụ: chạy lệnh <code>python3 -m http.server 8000</code> trong thư mục dự án) hoặc truy cập trực tiếp từ <strong>GitHub Pages</strong>.
          </p>
        </div>
      </div>
    `;
    lucide.createIcons();
  }
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
 * Filters the table of contents list based on input query string using local index
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
    // Search matching title, category, lesson id, and local keywords index
    const matchText = `${lesson.title} ${lesson.meta.category} ${lessonId} ${lesson.keywords}`.toLowerCase();
    
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
  // Handle dynamically loaded structure
  const codeBody = codeContainer.querySelector('.code-body.active code') || codeContainer.querySelector('code');
  
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

/**
 * Sets up horizontal dragging and resizability for the sidebar layout using client boundaries
 */
function setupSidebarResizer() {
  const resizer = document.getElementById('sidebar-resizer');
  const sidebar = document.querySelector('.app-sidebar');
  if (!resizer || !sidebar) return;

  let isResizing = false;

  resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    resizer.classList.add('active');
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    let newWidth = e.clientX;
    
    // Constraints: min 200px, max 500px for robust layout structure
    if (newWidth >= 200 && newWidth <= 500) {
      sidebar.style.width = `${newWidth}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    if (isResizing) {
      isResizing = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      resizer.classList.remove('active');
    }
  });

  // Touch Support for mobile and tablet dragging layout customization
  resizer.addEventListener('touchstart', (e) => {
    isResizing = true;
    resizer.classList.add('active');
  });

  document.addEventListener('touchmove', (e) => {
    if (!isResizing) return;
    if (e.touches.length > 0) {
      let newWidth = e.touches[0].clientX;
      if (newWidth >= 200 && newWidth <= 500) {
        sidebar.style.width = `${newWidth}px`;
      }
    }
  });

  document.addEventListener('touchend', () => {
    if (isResizing) {
      isResizing = false;
      resizer.classList.remove('active');
    }
  });
}
