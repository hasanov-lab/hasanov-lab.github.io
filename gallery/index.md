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
    <article class="gallery-card gallery-carousel-card" data-category="science" data-asco-carousel>
      <div class="gallery-card-media gallery-carousel-media">
        <img src="{{ '/gallery/ascoposters/ascoa.jpeg' | relative_url }}" alt="ASCO 2026 poster preview from Hasanov Lab" loading="lazy" data-asco-carousel-image>
        <button class="gallery-carousel-arrow gallery-carousel-arrow-prev" type="button" aria-label="Show previous ASCO 2026 poster" data-asco-carousel-prev>&#8249;</button>
        <button class="gallery-carousel-arrow gallery-carousel-arrow-next" type="button" aria-label="Show next ASCO 2026 poster" data-asco-carousel-next>&#8250;</button>
        <span class="gallery-multi-label gallery-carousel-label">Swipe / click arrows to view posters</span>
      </div>
      <div class="gallery-carousel-dots" aria-label="ASCO 2026 poster carousel" data-asco-carousel-dots></div>
      <span class="gallery-card-body">
        <span class="gallery-tag">Science</span>
        <span class="gallery-card-title">ASCO 2026 Posters</span>
        <span class="gallery-card-description">A collection of Hasanov Lab poster presentations from the Annual ASCO 2026 meeting.</span>
      </span>
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

<style>
  .gallery-carousel-card {
    cursor: default;
  }

  .gallery-carousel-media {
    overflow: hidden;
    background: var(--overlay);
  }

  .gallery-card .gallery-carousel-media img {
    display: block;
    object-fit: contain;
    background: #f6f8fb;
  }

  .gallery-carousel-arrow {
    position: absolute;
    top: 50%;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border: 0;
    border-radius: 999px;
    background: rgba(8, 75, 156, 0.88);
    color: #ffffff;
    font: inherit;
    font-size: 2rem;
    font-weight: var(--bold);
    line-height: 1;
    cursor: pointer;
    transform: translateY(-50%);
    transition: background var(--transition), transform var(--transition), opacity var(--transition);
  }

  .gallery-carousel-arrow:hover,
  .gallery-carousel-arrow:focus-visible {
    background: var(--gallery-science-dark);
    transform: translateY(-50%) scale(1.06);
  }

  .gallery-carousel-arrow:focus-visible {
    outline: 3px solid #ffffff;
    outline-offset: 2px;
  }

  .gallery-carousel-arrow-prev {
    left: 12px;
  }

  .gallery-carousel-arrow-next {
    right: 12px;
  }

  .gallery-carousel-label {
    pointer-events: none;
  }

  .gallery-carousel-dots {
    display: flex;
    justify-content: center;
    gap: 7px;
    padding: 12px 14px 0;
  }

  .gallery-carousel-dot {
    width: 8px;
    height: 8px;
    padding: 0;
    border: 0;
    border-radius: 999px;
    background: color-mix(in srgb, var(--gallery-science), transparent 72%);
    cursor: pointer;
    transition: background var(--transition), transform var(--transition), width var(--transition);
  }

  .gallery-carousel-dot.is-active {
    width: 22px;
    background: var(--gallery-science);
  }

  .gallery-carousel-dot:focus-visible {
    outline: 3px solid var(--gallery-science);
    outline-offset: 3px;
  }

  @media (max-width: 620px) {
    .gallery-carousel-arrow {
      width: 34px;
      height: 34px;
      font-size: 1.8rem;
    }

    .gallery-carousel-label {
      right: 10px;
      bottom: 10px;
      max-width: calc(100% - 20px);
      font-size: 0.72rem;
    }
  }
</style>

<script>
  (() => {
    const gallery = document.querySelector("[data-gallery]");

    if (!gallery) {
      return;
    }

    const filters = gallery.querySelectorAll("[data-filter]");
    const cards = gallery.querySelectorAll("[data-category]");
    const ascoCarousel = gallery.querySelector("[data-asco-carousel]");

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

    const setupAscoCarousel = () => {
      if (!ascoCarousel) {
        return;
      }

      const image = ascoCarousel.querySelector("[data-asco-carousel-image]");
      const previousButton = ascoCarousel.querySelector("[data-asco-carousel-prev]");
      const nextButton = ascoCarousel.querySelector("[data-asco-carousel-next]");
      const dotsContainer = ascoCarousel.querySelector("[data-asco-carousel-dots]");
      const media = ascoCarousel.querySelector(".gallery-carousel-media");
      let activeIndex = 0;
      let touchStartX = null;

      if (!image || !previousButton || !nextButton || !dotsContainer) {
        return;
      }

      const dots = ascoPosters.map((poster, index) => {
        const dot = document.createElement("button");
        dot.className = "gallery-carousel-dot";
        dot.type = "button";
        dot.setAttribute("aria-label", `Show ASCO 2026 poster ${index + 1} of ${ascoPosters.length}`);
        dot.addEventListener("click", () => showPoster(index));
        dotsContainer.append(dot);
        return dot;
      });

      const showPoster = (index) => {
        activeIndex = (index + ascoPosters.length) % ascoPosters.length;
        const poster = ascoPosters[activeIndex];
        image.src = poster.src;
        image.alt = poster.alt;

        dots.forEach((dot, dotIndex) => {
          const isActive = dotIndex === activeIndex;
          dot.classList.toggle("is-active", isActive);
          dot.setAttribute("aria-current", isActive ? "true" : "false");
        });
      };

      previousButton.addEventListener("click", () => showPoster(activeIndex - 1));
      nextButton.addEventListener("click", () => showPoster(activeIndex + 1));

      media?.addEventListener("touchstart", (event) => {
        touchStartX = event.changedTouches[0]?.clientX ?? null;
      }, { passive: true });

      media?.addEventListener("touchend", (event) => {
        if (touchStartX === null) {
          return;
        }

        const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
        const deltaX = touchEndX - touchStartX;
        touchStartX = null;

        if (Math.abs(deltaX) < 40) {
          return;
        }

        showPoster(activeIndex + (deltaX < 0 ? 1 : -1));
      }, { passive: true });

      showPoster(0);
    };

    filters.forEach((filter) => {
      filter.addEventListener("click", () => applyFilter(filter.dataset.filter));
    });

    setupAscoCarousel();
    applyFilter("all");
  })();
</script>
