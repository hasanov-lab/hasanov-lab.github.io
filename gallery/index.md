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
      <img src="{{ '/images/news/news-zeynep-internal-medicine-match.jpg' | relative_url }}" alt="Zeynep Matches into Internal Medicine" loading="lazy">
      <div class="gallery-card-body">
        <span class="gallery-tag">Lab Life</span>
        <h2>Zeynep Matches into Internal Medicine</h2>
        <p>Celebrating Zeynep, one of our postdoctoral scholars, on matching into Internal Medicine at UConn / the University of Connecticut.</p>
      </div>
    </article>
  </div>
</div>

<script>
  {
    const gallery = document.querySelector("[data-gallery]");

    if (gallery) {
      const filters = gallery.querySelectorAll("[data-filter]");
      const cards = gallery.querySelectorAll("[data-category]");

      filters.forEach((filter) => {
        filter.addEventListener("click", () => {
          const selected = filter.dataset.filter;

          filters.forEach((button) => {
            const isActive = button === filter;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
          });

          cards.forEach((card) => {
            const isVisible = selected === "all" || card.dataset.category === selected;
            card.hidden = !isVisible;
          });
        });
      });
    }
  }
</script>
