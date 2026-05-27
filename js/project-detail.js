// ========================================
// Project Detail — Three-Column Newspaper
// Left: main images (#)  |  Center: process images + captions  |  Right: text
// ========================================

(function () {
  var hash = window.location.hash.replace('#', '');
  var proj = projectData[hash];

  if (!proj) {
    document.getElementById('projectDetail').innerHTML =
      '<p style="text-align:center;padding:4rem 0;color:var(--color-text-muted)">Project not found. <a href="projects.html" style="border-bottom:1px solid var(--color-border)">Back to Projects</a></p>';
    return;
  }

  var lang = localStorage.getItem('portfolio-lang') || 'zh';
  var desc = proj.desc[lang] || proj.desc.en;
  var category = proj.category[lang] || proj.category.en;
  var mainImages = proj.mainImages || [];
  var processImages = proj.processImages || [];

  var html = '';

  // === LEFT Column — Main Images (#) ===
  html += '<div class="project-col-main">';
  if (mainImages.length > 0) {
    for (var mi = 0; mi < mainImages.length; mi++) {
      html += '<div class="project-col-image">';
      html += '<img src="' + getImagePath(proj.id, mainImages[mi]) + '" alt="' + proj.title + '" loading="lazy">';
      html += '</div>';
    }
  } else if (processImages.length > 0) {
    // Fallback: use first process image as main
    html += '<div class="project-col-image">';
    html += '<img src="' + getImagePath(proj.id, processImages[0]) + '" alt="' + proj.title + '" loading="lazy">';
    html += '</div>';
  }
  html += '</div>';

  // === CENTER Column — Process Images + Captions ===
  html += '<div class="project-col-process">';
  html += '<p class="project-process-heading">Process</p>';

  var processStart = (mainImages.length === 0 && processImages.length > 0) ? 1 : 0;
  for (var pi = processStart; pi < processImages.length; pi++) {
    var filename = processImages[pi];
    var caption = filename
      .replace(/\.(jpg|jpeg|png|gif)$/i, '')
      .replace(/[-_]/g, ' ')
      .replace(/img \d+ /i, '')
      .replace(/\bprocess\b/gi, '')
      .trim();

    html += '<div class="project-process-item">';
    html += '<div class="project-col-image">';
    html += '<img src="' + getImagePath(proj.id, filename) + '" alt="' + caption + '" loading="lazy">';
    html += '</div>';
    if (caption) {
      html += '<p class="project-process-caption">' + caption + '</p>';
    }
    html += '</div>';
  }
  html += '</div>';

  // === RIGHT Column — Text ===
  html += '<div class="project-col-text">';
  html += '<span class="project-detail-number">' + proj.id + ' / 07</span>';
  html += '<h1 class="project-detail-title">' + proj.title + '</h1>';
  html += '<p class="project-detail-category">' + category + '</p>';
  html += '<p class="project-detail-desc">' + desc + '</p>';
  html += '</div>';

  // === Back link ===
  html += '<a href="projects.html" class="project-detail-back">&larr; Back to Projects</a>';

  document.getElementById('projectDetail').innerHTML = html;
  document.title = proj.title + ' — HAIYI YU';

  // === Lightbox ===
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');

  document.getElementById('projectDetail').querySelectorAll('.project-col-image').forEach(function (wrapper) {
    wrapper.addEventListener('click', function () {
      var img = wrapper.querySelector('img');
      if (!img) return;
      lightboxImg.src = img.src;
      lightbox.setAttribute('aria-hidden', 'false');
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
})();
