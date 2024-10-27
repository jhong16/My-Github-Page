---
layout: page
title: Ji Hann Hong | Resume
url: /resume
---

# Resume

<style>
  /* Container for the PDF viewer */
  .pdf-container {
    width: 100%;
    padding: 0 10px; /* Small padding for mobile */
    box-sizing: border-box;
  }

  /* PDF viewer iframe styling */
  .pdf-viewer {
    width: 100%;
    height: 80vh; /* 80% of the viewport height */
    border: none;
  }

  /* Additional styling for smaller screens */
  @media (max-width: 768px) {
    .pdf-container {
      padding: 0 5px;
    }
    .pdf-viewer {
      height: 70vh; /* Smaller height on mobile for better scrolling */
    }
  }
      
  #pdf-render {
    width: 100%;
    border: 1px solid #ccc;
    background-color: white;
  }

  /* Dark mode styles */
  @media (prefers-color-scheme: dark) {
    #pdf-render {
      filter: invert(1) hue-rotate(180deg); /* Invert colors for dark mode */
    }

    #pdf-controls {
      color: white;
    }
  }
</style>

<!-- <div class="pdf-container">
  <iframe src="/Ji_hann_Hong_Resume_Redacted_2024.pdf" class="pdf-viewer"></iframe>
</div> -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"></script>

<div id="pdf-controls">
  <button id="prev-page">Previous</button>
  <button id="next-page">Next</button>
  <span>Page: <span id="page-num"></span> / <span id="page-count"></span></span>
</div>
<canvas id="pdf-render"></canvas>

<script>
  const url = '/Ji_hann_Hong_Resume_Redacted_2024.pdf'; // PDF file path
  const canvas = document.getElementById('pdf-render');
  const ctx = canvas.getContext('2d');

  let pdfDoc = null;
  let pageNum = 1;
  let pageIsRendering = false;
  let pageNumPending = null;
  let scale = 1.5; // Initial zoom scale

  // Render the page with a given scale
  function renderPage(num) {
    pageIsRendering = true;

    // Get page
    pdfDoc.getPage(num).then((page) => {
      const viewport = page.getViewport({ scale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderCtx = {
        canvasContext: ctx,
        viewport,
      };

      page.render(renderCtx).promise.then(() => {
        pageIsRendering = false;

        if (pageNumPending !== null) {
          renderPage(pageNumPending);
          pageNumPending = null;
        }
      });

      // Update page counters
      document.getElementById('page-num').textContent = num;
    });
  }

  // Queue page rendering if another render is in progress
  function queueRenderPage(num) {
    if (pageIsRendering) {
      pageNumPending = num;
    } else {
      renderPage(num);
    }
  }

  // Show previous page
  document.getElementById('prev-page').addEventListener('click', () => {
    if (pageNum <= 1) return;
    pageNum--;
    queueRenderPage(pageNum);
  });

  // Show next page
  document.getElementById('next-page').addEventListener('click', () => {
    if (pageNum >= pdfDoc.numPages) return;
    pageNum++;
    queueRenderPage(pageNum);
  });

  // Zoom in and re-render
  document.getElementById('zoom-in').addEventListener('click', () => {
    scale += 0.25;
    renderPage(pageNum); // Re-render with updated scale
  });

  // Zoom out and re-render
  document.getElementById('zoom-out').addEventListener('click', () => {
    scale = Math.max(scale - 0.25, 0.5); // minimum zoom level
    renderPage(pageNum); // Re-render with updated scale
  });

  // Load the PDF
  pdfjsLib.getDocument(url).promise.then((pdfDoc_) => {
    pdfDoc = pdfDoc_;
    document.getElementById('page-count').textContent = pdfDoc.numPages;
    renderPage(pageNum);
  });
</script>