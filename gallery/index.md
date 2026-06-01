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
    <article class="gallery-card gallery-card-action" data-category="science" data-asco-modal-card>
      <img src="{{ '/gallery/ascoposters/ascoa.jpeg' | relative_url }}" alt="ASCO 2026 poster preview from Hasanov Lab" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Science</span>
        <h2>ASCO 2026 Posters</h2>
        <p>A collection of Hasanov Lab poster presentations from the Annual ASCO 2026 meeting.</p>
        <button class="gallery-poster-button" id="open-asco-posters" type="button" data-asco-modal-open>View posters</button>
      </div>
    </article>
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
</div>

<div class="gallery-modal asco-poster-modal" id="asco-posters-modal" data-asco-modal hidden aria-hidden="true">
  <button class="gallery-modal-backdrop asco-poster-modal-backdrop" type="button" aria-label="Close ASCO poster viewer" data-asco-modal-close></button>
  <div class="gallery-modal-panel asco-poster-modal-panel" role="dialog" aria-modal="true" aria-labelledby="asco-poster-modal-title">
    <button class="gallery-modal-close asco-poster-modal-close" type="button" aria-label="Close ASCO poster viewer" data-asco-modal-close>&times;</button>
    <div class="gallery-modal-header asco-poster-modal-header">
      <span class="gallery-tag">Science</span>
      <h2 id="asco-poster-modal-title">ASCO 2026 Posters</h2>
      <p>A collection of Hasanov Lab poster presentations from the Annual ASCO 2026 meeting.</p>
    </div>
    <div class="asco-poster-modal-viewer">
      <button class="asco-poster-modal-arrow asco-poster-modal-arrow-prev" type="button" aria-label="Show previous ASCO 2026 poster" data-asco-modal-prev>&#8249;</button>
      <figure class="asco-poster-modal-figure">
        <img src="{{ '/gallery/ascoposters/ascoa.jpeg' | relative_url }}" alt="ASCO 2026 poster preview from Hasanov Lab" data-asco-modal-image>
        <figcaption class="asco-poster-modal-counter" data-asco-modal-counter>1 / 6</figcaption>
      </figure>
      <button class="asco-poster-modal-arrow asco-poster-modal-arrow-next" type="button" aria-label="Show next ASCO 2026 poster" data-asco-modal-next>&#8250;</button>
    </div>
  </div>
</div>

<style>
  .gallery-poster-button {
    align-self: flex-start;
    margin-top: auto;
    padding: 10px 16px;
    border: 0;
    border-radius: 999px;
    background: var(--gallery-science);
    color: #ffffff;
    font: inherit;
    font-weight: var(--bold);
    line-height: 1;
    cursor: pointer;
    transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
  }

  .gallery-poster-button:hover,
  .gallery-poster-button:focus-visible {
    background: var(--gallery-science-dark);
    box-shadow: 0 10px 24px color-mix(in srgb, var(--gallery-science), transparent 62%);
    transform: translateY(-2px);
  }

  .gallery-poster-button:focus-visible {
    outline: 3px solid var(--gallery-science);
    outline-offset: 3px;
  }

  .asco-poster-modal {
    background: rgba(10, 18, 32, 0.84);
  }

  .asco-poster-modal-backdrop {
    border: 0;
    cursor: default;
  }

  .asco-poster-modal-panel {
    width: min(1180px, 100%);
    max-height: min(92vh, 980px);
    background: #0a1220;
    color: #ffffff;
  }

  .asco-poster-modal-close {
    top: 16px;
    right: 16px;
    background: rgba(255, 255, 255, 0.96);
    color: #0a1220;
    font-size: 2rem;
    font-weight: var(--bold);
  }

  .asco-poster-modal-close:hover,
  .asco-poster-modal-close:focus-visible {
    background: #ffffff;
  }

  .asco-poster-modal-header {
    padding: 24px 86px 16px 28px;
  }

  .asco-poster-modal-header h2,
  .asco-poster-modal-header p {
    color: #ffffff;
  }

  .asco-poster-modal-viewer {
    position: relative;
    display: grid;
    grid-template-columns: 56px minmax(0, 1fr) 56px;
    align-items: center;
    gap: 16px;
    min-height: 0;
    padding: 0 24px 28px;
  }

  .asco-poster-modal-figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 0;
    min-height: 0;
    margin: 0;
  }

  .asco-poster-modal-figure img {
    display: block;
    width: auto;
    max-width: 100%;
    max-height: calc(92vh - 210px);
    object-fit: contain;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.32);
  }

  .asco-poster-modal-counter {
    margin-top: 12px;
    color: rgba(255, 255, 255, 0.86);
    font-size: 0.95rem;
    font-weight: var(--bold);
    letter-spacing: 0.04em;
  }

  .asco-poster-modal-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border: 0;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.94);
    color: #0a1220;
    font: inherit;
    font-size: 2.7rem;
    font-weight: var(--bold);
    line-height: 1;
    cursor: pointer;
    transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
  }

  .asco-poster-modal-arrow:hover,
  .asco-poster-modal-arrow:focus-visible {
    background: #ffffff;
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.28);
    transform: scale(1.06);
  }

  .asco-poster-modal-arrow:focus-visible {
    outline: 3px solid var(--gallery-science);
    outline-offset: 3px;
  }

  @media (max-width: 720px) {
    .asco-poster-modal {
      padding: 12px;
    }

    .asco-poster-modal-panel {
      max-height: 94vh;
    }

    .asco-poster-modal-header {
      padding: 22px 66px 14px 18px;
    }

    .asco-poster-modal-header h2 {
      font-size: 1.3rem;
    }

    .asco-poster-modal-viewer {
      grid-template-columns: 44px minmax(0, 1fr) 44px;
      gap: 8px;
      padding: 0 12px 18px;
    }

    .asco-poster-modal-figure img {
      max-height: calc(94vh - 230px);
      border-radius: 8px;
    }

    .asco-poster-modal-arrow {
      width: 42px;
      height: 42px;
      font-size: 2.2rem;
    }
  }

  @media (max-width: 440px) {
    .asco-poster-modal-viewer {
      grid-template-columns: 1fr 1fr;
    }

    .asco-poster-modal-figure {
      grid-column: 1 / -1;
      grid-row: 1;
    }

    .asco-poster-modal-arrow {
      grid-row: 2;
      justify-self: center;
    }

    .asco-poster-modal-arrow-prev {
      grid-column: 1;
    }

    .asco-poster-modal-arrow-next {
      grid-column: 2;
    }

    .asco-poster-modal-figure img {
      max-height: calc(94vh - 280px);
    }
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector("[data-gallery]");

    if (!gallery) {
      return;
    }

    const filters = gallery.querySelectorAll("[data-filter]");
    const cards = gallery.querySelectorAll("[data-category]");
    const openAscoModalButton = document.getElementById("open-asco-posters");
    const openAscoModalCard = gallery.querySelector("[data-asco-modal-card]");
    const ascoModal = document.getElementById("asco-posters-modal");

    const ascoPosters = [
      {
        src: "{{ '/gallery/ascoposters/ascoa.jpeg' | relative_url }}",
        alt: "ASCO 2026 poster preview from Hasanov Lab"
      },
      {
        src: "{{ '/gallery/ascoposters/asco-antonio.jpeg' | relative_url }}",
        alt: "ASCO 2026 poster by Antonio Faieta from Hasanov Lab"
      },
      {
        src: "{{ '/gallery/ascoposters/asco-betul.jpeg' | relative_url }}",
        alt: "ASCO 2026 poster by Betul from Hasanov Lab"
      },
      {
        src: "{{ '/gallery/ascoposters/asco-peng.jpeg' | relative_url }}",
        alt: "ASCO 2026 poster by Peng Li from Hasanov Lab"
      },
      {
        src: "{{ '/gallery/ascoposters/asco-zuhair.jpeg' | relative_url }}",
        alt: "ASCO 2026 poster by Zuhair Majeed from Hasanov Lab"
      },
      {
        src: "{{ '/gallery/ascoposters/ascozz.jpeg' | relative_url }}",
        alt: "ASCO 2026 poster from Hasanov Lab"
      }
    ];

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

    const setupAscoModal = () => {
      if (!openAscoModalButton || !ascoModal) {
        return;
      }

      const image = ascoModal.querySelector("[data-asco-modal-image]");
      const counter = ascoModal.querySelector("[data-asco-modal-counter]");
      const previousButton = ascoModal.querySelector("[data-asco-modal-prev]");
      const nextButton = ascoModal.querySelector("[data-asco-modal-next]");
      const closeButtons = ascoModal.querySelectorAll("[data-asco-modal-close]");
      let activeIndex = 0;
      let previousFocus = null;

      if (!image || !counter || !previousButton || !nextButton) {
        return;
      }

      const showPoster = (index) => {
        activeIndex = (index + ascoPosters.length) % ascoPosters.length;
        const poster = ascoPosters[activeIndex];
        image.src = poster.src;
        image.alt = poster.alt;
        counter.textContent = `${activeIndex + 1} / ${ascoPosters.length}`;
      };

      const closeModal = () => {
        ascoModal.hidden = true;
        ascoModal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("gallery-modal-is-open");

        if (previousFocus && typeof previousFocus.focus === "function") {
          previousFocus.focus();
        }
      };

      const openModal = () => {
        previousFocus = document.activeElement;
        showPoster(0);
        ascoModal.hidden = false;
        ascoModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("gallery-modal-is-open");
        nextButton.focus();
      };

      openAscoModalButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        openModal();
      });

      if (openAscoModalCard) {
        openAscoModalCard.addEventListener("click", (event) => {
          if (event.target.closest("a, button")) {
            return;
          }

          openModal();
        });
      }

      previousButton.addEventListener("click", () => showPoster(activeIndex - 1));
      nextButton.addEventListener("click", () => showPoster(activeIndex + 1));
      closeButtons.forEach((button) => button.addEventListener("click", closeModal));

      document.addEventListener("keydown", (event) => {
        if (ascoModal.hidden) {
          return;
        }

        if (event.key === "Escape") {
          closeModal();
        }

        if (event.key === "ArrowLeft") {
          showPoster(activeIndex - 1);
        }

        if (event.key === "ArrowRight") {
          showPoster(activeIndex + 1);
        }
      });

      showPoster(0);
    };

    filters.forEach((filter) => {
      filter.addEventListener("click", () => applyFilter(filter.dataset.filter));
    });

    setupAscoModal();
    applyFilter("all");
  });
</script>
