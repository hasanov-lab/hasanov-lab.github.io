---
title: Gallery
---

<img class="page-logo page-logo-small code-to-clinic-page-logo" src="{{ '/images/code-to-clinic-logo.png' | relative_url }}" alt="Code to Clinic logo">

<h1 class="page-title-clean">GALLERY</h1>

<p class="gallery-intro">Moments from the Hasanov Lab, highlighting our scientific work, collaborations, conferences, and team activities.</p>

{% include section.html %}

<div class="gallery-page" data-gallery>
  <div class="gallery-filters" aria-label="Gallery category filters">
    <button class="gallery-filter is-active" type="button" data-filter="all" aria-pressed="true">All</button>
    <button class="gallery-filter" type="button" data-filter="science" aria-pressed="false">Science</button>
    <button class="gallery-filter" type="button" data-filter="lab-life" aria-pressed="false">Lab Life</button>
    <button class="gallery-filter" type="button" data-filter="celebrations" aria-pressed="false">Celebrations</button>
  </div>

  <div class="gallery-grid">
    <article class="gallery-card gallery-card-action" data-category="science" data-gallery-card="asco-posters" role="button" tabindex="0" aria-label="Open ASCO 2026 Posters gallery" onclick="window.openHasanovGalleryCard && window.openHasanovGalleryCard(this, event)">
      <img src="{{ '/gallery/ascoposters/ascoa.jpeg' | relative_url }}" alt="ASCO 2026 poster preview from Hasanov Lab" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Science</span>
        <h2>ASCO 2026 Posters</h2>
        <p>A collection of Hasanov Lab poster presentations from the Annual ASCO 2026 meeting.</p>
        <span class="gallery-card-button">View posters</span>
      </div>
    </article>

    <article class="gallery-card gallery-card-action" data-category="lab-life" data-gallery-card="lab-meeting" role="button" tabindex="0" aria-label="Open Lab Meeting and Team Gathering gallery" onclick="window.openHasanovGalleryCard && window.openHasanovGalleryCard(this, event)">
      <img src="{{ '/gallery/gallery-lab-meeting-team-gathering.png.jpeg' | relative_url }}" alt="Lab Meeting & Team Gathering" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Lab Life</span>
        <h2>Lab Meeting &amp; Team Gathering</h2>
        <p>A Hasanov Lab team gathering, bringing together lab members for project discussions, collaboration, and community.</p>
        <span class="gallery-card-button">View photos</span>
      </div>
    </article>

    <article class="gallery-card gallery-card-action" data-category="celebrations" data-gallery-card="zeynep-match" role="button" tabindex="0" aria-label="Open Zeynep Matches into Internal Medicine gallery" onclick="window.openHasanovGalleryCard && window.openHasanovGalleryCard(this, event)">
      <img src="{{ '/gallery/news-zeynep-internal-medicine-match.jpeg' | relative_url }}" alt="Zeynep Matches into Internal Medicine" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Celebrations</span>
        <h2>Zeynep Matches into Internal Medicine</h2>
        <p>Celebrating Zeynep, one of our postdoctoral scholars, on matching into Internal Medicine at UConn / the University of Connecticut.</p>
        <span class="gallery-card-button">View photos</span>
      </div>
    </article>
  </div>

  <section class="gallery-video-section" aria-labelledby="lab-videos-title">
    <div class="gallery-video-heading-wrap">
      <h2 class="gallery-section-heading" id="lab-videos-title">Lab Videos</h2>
      <a class="gallery-youtube-link" href="https://www.youtube.com/@HasanovLab" target="_blank" rel="noopener noreferrer">Visit our YouTube channel</a>
    </div>
    <div class="gallery-grid gallery-video-grid">
      <article class="gallery-card gallery-card-action gallery-video-card" data-category="video" data-gallery-video="belzutifan-rcc" role="button" tabindex="0" aria-label="Watch Belzutifan Real-World Outcomes and EHR-Based ML Model in Advanced RCC" onclick="window.openHasanovGalleryVideo && window.openHasanovGalleryVideo(this, event)">
        <div class="gallery-card-media gallery-video-thumbnail">
          <img src="https://img.youtube.com/vi/8OAeRvHbG0Y/hqdefault.jpg" alt="YouTube thumbnail for Belzutifan Real-World Outcomes and EHR-Based ML Model in Advanced RCC" loading="lazy">
          <span class="gallery-video-play" aria-hidden="true"></span>
        </div>
        <div class="gallery-card-body">
          <span class="gallery-tag">Video</span>
          <h2>Belzutifan Real-World Outcomes and EHR-Based ML Model in Advanced RCC</h2>
          <p>By Zuhair Majeed</p>
          <span class="gallery-card-button">Watch video</span>
        </div>
      </article>

      <article class="gallery-card gallery-card-action gallery-video-card" data-category="video" data-gallery-video="antonio-lu-psma-617" role="button" tabindex="0" aria-label="Lu-PSMA-617 Real-World Outcomes and EHR-Based ML Model in Advanced Prostate Cancer" onclick="window.openHasanovGalleryVideo && window.openHasanovGalleryVideo(this, event)">
        <div class="gallery-card-media gallery-video-thumbnail">
          <img src="https://img.youtube.com/vi/Pprk51ziVlc/hqdefault.jpg" alt="Lu-PSMA-617 Real-World Outcomes and EHR-Based ML Model in Advanced Prostate Cancer" loading="lazy">
          <span class="gallery-video-play" aria-hidden="true"></span>
        </div>
        <div class="gallery-card-body">
          <span class="gallery-tag">Video</span>
          <h2>Lu-PSMA-617 Real-World Outcomes and EHR-Based ML Model in Advanced Prostate Cancer</h2>
          <p>By Antonio Faieta</p>
          <span class="gallery-card-button">Watch video</span>
        </div>
      </article>
    </div>
  </section>
</div>

<div class="gallery-modal" id="gallery-lightbox" data-gallery-modal hidden aria-hidden="true">
  <button class="gallery-modal-backdrop" type="button" aria-label="Close gallery viewer" data-gallery-close></button>
  <div class="gallery-modal-panel" role="dialog" aria-modal="true" aria-labelledby="gallery-modal-title" aria-describedby="gallery-modal-description">
    <button class="gallery-modal-close" type="button" aria-label="Close gallery viewer" data-gallery-close>&times;</button>
    <div class="gallery-modal-header">
      <span class="gallery-tag" data-gallery-modal-category>Science</span>
      <h2 id="gallery-modal-title" data-gallery-modal-title>Gallery</h2>
      <p id="gallery-modal-description" data-gallery-modal-description></p>
    </div>
    <div class="gallery-carousel">
      <button class="gallery-carousel-arrow gallery-carousel-arrow-prev" type="button" aria-label="Show previous image" data-gallery-prev>&#8249;</button>
      <figure class="gallery-carousel-figure">
        <img src="{{ '/gallery/ascoposters/ascoa.jpeg' | relative_url }}" alt="ASCO 2026 poster preview from Hasanov Lab" data-gallery-image>
        <figcaption>
          <span class="gallery-carousel-caption" data-gallery-caption>ASCO 2026 Posters</span>
          <span class="gallery-carousel-counter" data-gallery-counter>1 / 1</span>
        </figcaption>
      </figure>
      <button class="gallery-carousel-arrow gallery-carousel-arrow-next" type="button" aria-label="Show next image" data-gallery-next>&#8250;</button>
    </div>
    <div class="gallery-video-frame-wrap" data-gallery-video-frame hidden></div>
  </div>
</div>

<div class="gallery-modal gallery-video-modal" id="gallery-video-lightbox" data-gallery-video-modal hidden aria-hidden="true">
  <button class="gallery-modal-backdrop" type="button" aria-label="Close video viewer" data-gallery-video-close></button>
  <div class="gallery-modal-panel gallery-video-modal-panel" role="dialog" aria-modal="true" aria-labelledby="gallery-video-modal-title" aria-describedby="gallery-video-modal-description">
    <button class="gallery-modal-close" type="button" aria-label="Close video viewer" data-gallery-video-close>&times;</button>
    <div class="gallery-modal-header">
      <span class="gallery-tag">Video</span>
      <h2 id="gallery-video-modal-title" data-gallery-video-modal-title>Belzutifan Real-World Outcomes and EHR-Based ML Model in Advanced RCC</h2>
      <p id="gallery-video-modal-description" data-gallery-video-modal-description>By Zuhair Majeed</p>
    </div>
    <div class="gallery-video-frame-wrap" data-gallery-video-frame-wrap></div>
  </div>
</div>
