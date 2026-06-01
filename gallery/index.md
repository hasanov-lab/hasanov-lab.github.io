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
  </div>

  <div class="gallery-grid">
    <button class="gallery-card gallery-card-action" type="button" data-category="science" data-gallery-modal-open="asco-2026-posters" aria-haspopup="dialog">
      <span class="gallery-card-media">
        <img src="{{ '/images/gallery/ascoposters/asco-2026-poster-01.jpg' | relative_url }}" alt="ASCO 2026 poster preview" loading="lazy">
        <span class="gallery-multi-label">View posters</span>
      </span>
      <span class="gallery-card-body">
        <span class="gallery-tag">Science</span>
        <span class="gallery-card-title">ASCO 2026 Posters</span>
        <span class="gallery-card-description">A collection of Hasanov Lab poster presentations from the Annual ASCO 2026 meeting.</span>
      </span>
    </button>
    <article class="gallery-card" data-category="science">
      <img src="{{ '/images/gallery/science-placeholder.svg' | relative_url }}" alt="Science gallery placeholder for Conference Presentation" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Science</span>
        <h2>Conference Presentation</h2>
        <p>Sharing Hasanov Lab research at scientific meetings.</p>
      </div>
    </article>

    <article class="gallery-card" data-category="science">
      <img src="{{ '/images/gallery/science-placeholder.svg' | relative_url }}" alt="Science gallery placeholder for Research Poster" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Science</span>
        <h2>Research Poster</h2>
        <p>Presenting translational oncology and computational cancer research.</p>
      </div>
    </article>

    <article class="gallery-card" data-category="science">
      <img src="{{ '/images/gallery/science-placeholder.svg' | relative_url }}" alt="Science gallery placeholder for Lab Meeting" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Science</span>
        <h2>Lab Meeting</h2>
        <p>Discussing ongoing projects, data analysis, and manuscripts.</p>
      </div>
    </article>

    <article class="gallery-card" data-category="lab-life">
      <img src="{{ '/gallery/gallery-lab-meeting-team-gathering.png.jpeg' | relative_url }}" alt="Lab Meeting & Team Gathering" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Lab Life</span>
        <h2>Lab Meeting &amp; Team Gathering</h2>
        <p>A Hasanov Lab team gathering, bringing together lab members for project discussions, collaboration, and community.</p>
      </div>
    </article>

    <article class="gallery-card" data-category="lab-life">
      <img src="{{ '/images/gallery/lab-life-placeholder.svg' | relative_url }}" alt="Lab Life gallery placeholder for Team Gathering" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Lab Life</span>
        <h2>Team Gathering</h2>
        <p>Celebrating milestones and building community.</p>
      </div>
    </article>

    <article class="gallery-card" data-category="lab-life">
      <img src="{{ '/images/gallery/lab-life-placeholder.svg' | relative_url }}" alt="Lab Life gallery placeholder for Lab Celebration" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Lab Life</span>
        <h2>Lab Celebration</h2>
        <p>Moments from team events and lab activities.</p>
      </div>
    </article>

    <article class="gallery-card" data-category="lab-life">
      <img src="{{ '/images/gallery/lab-life-placeholder.svg' | relative_url }}" alt="Lab Life gallery placeholder for Group Photo" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Lab Life</span>
        <h2>Group Photo</h2>
        <p>Hasanov Lab members and collaborators.</p>
      </div>
    </article>

    <article class="gallery-card" data-category="lab-life">
      <img src="{{ '/gallery/news-zeynep-internal-medicine-match.jpeg' | relative_url }}" alt="Zeynep Matches into Internal Medicine" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Lab Life</span>
        <h2>Zeynep Matches into Internal Medicine</h2>
        <p>Celebrating Zeynep, one of our postdoctoral scholars, on matching into Internal Medicine at UConn / the University of Connecticut.</p>
      </div>
    </article>
  </div>

  <div class="gallery-modal" id="asco-2026-posters" role="dialog" aria-modal="true" aria-labelledby="asco-2026-posters-title" hidden>
    <div class="gallery-modal-backdrop" data-gallery-modal-close></div>
    <div class="gallery-modal-panel" role="document">
      <button class="gallery-modal-close" type="button" data-gallery-modal-close aria-label="Close ASCO 2026 posters gallery">&times;</button>
      <div class="gallery-modal-header">
        <span class="gallery-tag">Science</span>
        <h2 id="asco-2026-posters-title">ASCO 2026 Posters</h2>
        <p>A collection of Hasanov Lab poster presentations from the Annual ASCO 2026 meeting.</p>
      </div>
      <div class="gallery-modal-images">
        <img src="{{ '/images/gallery/ascoposters/asco-2026-poster-01.jpg' | relative_url }}" alt="ASCO 2026 poster 1 from Hasanov Lab" loading="lazy">
        <img src="{{ '/images/gallery/ascoposters/asco-2026-poster-02.jpg' | relative_url }}" alt="ASCO 2026 poster 2 from Hasanov Lab" loading="lazy">
        <img src="{{ '/images/gallery/ascoposters/asco-2026-poster-03.jpg' | relative_url }}" alt="ASCO 2026 poster 3 from Hasanov Lab" loading="lazy">
        <img src="{{ '/images/gallery/ascoposters/asco-2026-poster-04.jpg' | relative_url }}" alt="ASCO 2026 poster 4 from Hasanov Lab" loading="lazy">
      </div>
    </div>
  </div>
</div>

<script>
  (() => {
    const gallery = document.querySelector("[data-gallery]");

    if (!gallery) {
      return;
    }

    const filters = gallery.querySelectorAll("[data-filter]");
    const cards = gallery.querySelectorAll("[data-category]");
    const modalOpeners = gallery.querySelectorAll("[data-gallery-modal-open]");
    const modalClosers = gallery.querySelectorAll("[data-gallery-modal-close]");
    let activeModal = null;
    let previousFocus = null;

    const applyFilter = (selected) => {
      filters.forEach((button) => {
        const isActive = button.dataset.filter === selected;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });

      cards.forEach((card) => {
        const isVisible = selected === "all" || card.dataset.category === selected;
        card.hidden = !isVisible;
      });
    };

    const closeModal = () => {
      if (!activeModal) {
        return;
      }

      activeModal.hidden = true;
      document.body.classList.remove("gallery-modal-is-open");

      if (previousFocus) {
        previousFocus.focus();
      }

      activeModal = null;
      previousFocus = null;
    };

    const openModal = (modalId, opener) => {
      const modal = gallery.querySelector(`#${modalId}`);

      if (!modal) {
        return;
      }

      previousFocus = opener;
      activeModal = modal;
      modal.hidden = false;
      document.body.classList.add("gallery-modal-is-open");

      const closeButton = modal.querySelector("[data-gallery-modal-close]");
      closeButton?.focus();
    };

    filters.forEach((filter) => {
      filter.addEventListener("click", () => applyFilter(filter.dataset.filter));
    });

    modalOpeners.forEach((opener) => {
      opener.addEventListener("click", () => openModal(opener.dataset.galleryModalOpen, opener));
    });

    modalClosers.forEach((closer) => {
      closer.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    });

    applyFilter("all");
  })();
</script>
