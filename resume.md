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
      
  #pdf-canvas.dark-mode {
    filter: invert(1) hue-rotate(180deg);
  }
</style>

<div class="pdf-container">
  <iframe src="/Ji_hann_Hong_Resume_Redacted_2024.pdf" class="pdf-viewer"></iframe>
</div>

<canvas id="pdf-canvas"></canvas>
<button onclick="toggleDarkMode()">Toggle Dark Mode</button>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"></script>
<script>
    var pdfUrl = '/Ji_hann_Hong_Resume_Redacted_2024.pdf';

    // Load and render PDF with PDF.js
    pdfjsLib.getDocument(pdfUrl).promise.then((pdf) => {
        pdf.getPage(1).then((page) => {
            var scale = 1.5;
            var viewport = page.getViewport({ scale: scale });
            var canvas = document.getElementById('pdf-canvas');
            var context = canvas.getContext('2d');

            canvas.height = viewport.height;
            canvas.width = viewport.width;

            page.render({
                canvasContext: context,
                viewport: viewport
            });
        });
    });

    // Dark Mode Toggle
    function toggleDarkMode() {
        document.getElementById('pdf-canvas').classList.toggle('dark-mode');
    }
</script>
