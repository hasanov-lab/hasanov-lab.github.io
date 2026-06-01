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
    <article class="gallery-card gallery-card-action" data-category="science" data-gallery-card="asco-posters" role="button" tabindex="0" aria-label="Open ASCO 2026 Posters gallery">
      <img src="{{ '/gallery/ascoposters/ascoa.jpeg' | relative_url }}" alt="ASCO 2026 poster preview from Hasanov Lab" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Science</span>
        <h2>ASCO 2026 Posters</h2>
        <p>A collection of Hasanov Lab poster presentations from the Annual ASCO 2026 meeting.</p>
        <span class="gallery-card-button">View posters</span>
      </div>
    </article>

    <article class="gallery-card gallery-card-action" data-category="lab-life" data-gallery-card="lab-meeting" role="button" tabindex="0" aria-label="Open Lab Meeting and Team Gathering gallery">
      <img src="{{ '/gallery/gallery-lab-meeting-team-gathering.png.jpeg' | relative_url }}" alt="Lab Meeting & Team Gathering" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Lab Life</span>
        <h2>Lab Meeting &amp; Team Gathering</h2>
        <p>A Hasanov Lab team gathering, bringing together lab members for project discussions, collaboration, and community.</p>
        <span class="gallery-card-button">View photos</span>
      </div>
    </article>

    <article class="gallery-card gallery-card-action" data-category="celebrations" data-gallery-card="zeynep-match" role="button" tabindex="0" aria-label="Open Zeynep Matches into Internal Medicine gallery">
      <img src="{{ '/gallery/news-zeynep-internal-medicine-match.jpeg' | relative_url }}" alt="Zeynep Matches into Internal Medicine" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Celebrations</span>
        <h2>Zeynep Matches into Internal Medicine</h2>
        <p>Celebrating Zeynep, one of our postdoctoral scholars, on matching into Internal Medicine at UConn / the University of Connecticut.</p>
        <span class="gallery-card-button">View photos</span>
      </div>
    </article>
  </div>
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
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector("[data-gallery]");
    const modal = document.querySelector("[data-gallery-modal]");

    if (!gallery || !modal) {
      return;
    }

    const galleryItems = {
      "asco-posters": {
        category: "Science",
        categorySlug: "science",
        title: "ASCO 2026 Posters",
        description: "A collection of Hasanov Lab poster presentations from the Annual ASCO 2026 meeting.",
        images: [
          {
            src: "{{ '/gallery/ascoposters/ascoa.jpeg' | relative_url }}",
            alt: "ASCO 2026 poster preview from Hasanov Lab",
            caption: "ASCO 2026 Posters"
          },
          {
            src: "{{ '/gallery/ascoposters/asco-antonio.jpeg' | relative_url }}",
            alt: "ASCO 2026 poster by Antonio Faieta from Hasanov Lab",
            caption: "ASCO 2026 poster by Antonio Faieta"
          },
          {
            src: "{{ '/gallery/ascoposters/asco-betul.jpeg' | relative_url }}",
            alt: "ASCO 2026 poster by Betul from Hasanov Lab",
            caption: "ASCO 2026 poster by Betul"
          },
          {
            src: "{{ '/gallery/ascoposters/asco-peng.jpeg' | relative_url }}",
            alt: "ASCO 2026 poster by Peng Li from Hasanov Lab",
            caption: "ASCO 2026 poster by Peng Li"
          },
          {
            src: "{{ '/gallery/ascoposters/asco-zuhair.jpeg' | relative_url }}",
            alt: "ASCO 2026 poster by Zuhair Majeed from Hasanov Lab",
            caption: "ASCO 2026 poster by Zuhair Majeed"
          },
          {
            src: "{{ '/gallery/ascoposters/ascozz.jpeg' | relative_url }}",
            alt: "ASCO 2026 poster from Hasanov Lab",
            caption: "ASCO 2026 Posters"
          }
        ]
      },
      "lab-meeting": {
        category: "Lab Life",
        categorySlug: "lab-life",
        title: "Lab Meeting & Team Gathering",
        description: "A Hasanov Lab team gathering, bringing together lab members for project discussions, collaboration, and community.",
        images: [
          {
            src: "{{ '/gallery/gallery-lab-meeting-team-gathering.png.jpeg' | relative_url }}",
            alt: "Lab Meeting & Team Gathering",
            caption: "Lab Meeting & Team Gathering"
          }
        ]
      },
      "zeynep-match": {
        category: "Celebrations",
        categorySlug: "celebrations",
        title: "Zeynep Matches into Internal Medicine",
        description: "Celebrating Zeynep, one of our postdoctoral scholars, on matching into Internal Medicine at UConn / the University of Connecticut.",
        images: [
          {
            src: "{{ '/gallery/news-zeynep-internal-medicine-match.jpeg' | relative_url }}",
            alt: "Zeynep Matches into Internal Medicine",
            caption: "Zeynep Matches into Internal Medicine"
          }
        ]
      }
    };

    const filters = gallery.querySelectorAll("[data-filter]");
    const cards = gallery.querySelectorAll("[data-category]");
    const modalPanel = modal.querySelector(".gallery-modal-panel");
    const modalCategory = modal.querySelector("[data-gallery-modal-category]");
    const modalTitle = modal.querySelector("[data-gallery-modal-title]");
    const modalDescription = modal.querySelector("[data-gallery-modal-description]");
    const modalImage = modal.querySelector("[data-gallery-image]");
    const modalCaption = modal.querySelector("[data-gallery-caption]");
    const modalCounter = modal.querySelector("[data-gallery-counter]");
    const previousButton = modal.querySelector("[data-gallery-prev]");
    const nextButton = modal.querySelector("[data-gallery-next]");
    const closeButtons = modal.querySelectorAll("[data-gallery-close]");
    const closeButton = modal.querySelector(".gallery-modal-close");
    let activeGallery = null;
    let activeIndex = 0;
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

    const updateCarousel = (index) => {
      if (!activeGallery || !modalImage || !modalCaption || !modalCounter || !previousButton || !nextButton) {
        return;
      }

      activeIndex = (index + activeGallery.images.length) % activeGallery.images.length;
      const image = activeGallery.images[activeIndex];
      modalImage.src = image.src;
      modalImage.alt = image.alt;
      modalCaption.textContent = image.caption || activeGallery.title;
      modalCounter.textContent = `${activeIndex + 1} / ${activeGallery.images.length}`;

      const hasMultipleImages = activeGallery.images.length > 1;
      modal.classList.toggle("is-single-image", !hasMultipleImages);
      modalCounter.hidden = !hasMultipleImages;
      previousButton.hidden = !hasMultipleImages;
      nextButton.hidden = !hasMultipleImages;
      previousButton.disabled = !hasMultipleImages;
      nextButton.disabled = !hasMultipleImages;
    };

    const closeModal = () => {
      modal.hidden = true;
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("gallery-modal-is-open");
      modal.classList.remove("is-single-image");
      activeGallery = null;

      if (previousFocus && typeof previousFocus.focus === "function") {
        previousFocus.focus();
      }
    };

    const openModal = (galleryKey) => {
      const selectedGallery = galleryItems[galleryKey];

      if (!selectedGallery) {
        return;
      }

      previousFocus = document.activeElement;
      activeGallery = selectedGallery;
      modal.dataset.category = selectedGallery.categorySlug;
      modalCategory.textContent = selectedGallery.category;
      modalTitle.textContent = selectedGallery.title;
      modalDescription.textContent = selectedGallery.description;
      updateCarousel(0);
      modal.hidden = false;
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("gallery-modal-is-open");
      if (closeButton) {
        closeButton.focus();
      }
    };

    filters.forEach((filter) => {
      filter.addEventListener("click", () => applyFilter(filter.dataset.filter));
    });

    const openCardGallery = (card, event) => {
      if (!card) {
        return;
      }

      event.preventDefault();
      openModal(card.dataset.galleryCard);
    };

    gallery.addEventListener("click", (event) => {
      const card = event.target.closest("[data-gallery-card]");

      if (!card || !gallery.contains(card)) {
        return;
      }

      openCardGallery(card, event);
    });

    gallery.querySelectorAll("[data-gallery-card]").forEach((card) => {
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          openCardGallery(card, event);
        }
      });
    });

    previousButton.addEventListener("click", (event) => {
      event.preventDefault();
      updateCarousel(activeIndex - 1);
    });
    nextButton.addEventListener("click", (event) => {
      event.preventDefault();
      updateCarousel(activeIndex + 1);
    });
    closeButtons.forEach((button) => button.addEventListener("click", (event) => {
      event.preventDefault();
      closeModal();
    }));

    modal.addEventListener("click", (event) => {
      if (!modalPanel || !modalPanel.contains(event.target)) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (modal.hidden) {
        return;
      }

      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowLeft" && activeGallery?.images.length > 1) {
        updateCarousel(activeIndex - 1);
      }

      if (event.key === "ArrowRight" && activeGallery?.images.length > 1) {
        updateCarousel(activeIndex + 1);
      }
    });

    applyFilter("all");
  });
</script>
