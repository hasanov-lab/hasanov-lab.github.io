---
title: News & Events
nav:
  order: 5
  tooltip: News and events from the lab
---

<img class="page-logo page-logo-small code-to-clinic-page-logo" src="{{ '/images/code-to-clinic-logo.png' | relative_url }}" alt="Code to Clinic logo">

<h1 class="page-title-clean">NEWS & EVENTS</h1>

Stay updated with the latest news, publications, and events from the Hasanov Lab.

{% include section.html %}

<div class="news-container">
  <div class="news-main">
    <div class="news-posts">
      {% for post in site.data.news %}
        <article class="news-post-card">
          <div class="news-post-content">
            <div class="news-post-meta">
              <time datetime="{{ post.date }}">{{ post.display_date | default: post.date }}</time>
              {% if post.category %}
                <span class="news-post-category">{{ post.category }}</span>
              {% endif %}
            </div>

            <h2 class="news-post-title">{{ post.title }}</h2>
            <p class="news-post-text">{{ post.text | newline_to_br }}</p>

            {% if post.image %}
              <button class="news-post-gallery-button news-post-image-button" type="button" data-news-lightbox-title="{{ post.title | escape }}" data-news-lightbox-category="{{ post.category | default: 'News' | escape }}" data-news-lightbox-src="{{ post.image | relative_url }}" data-news-lightbox-alt="{{ post.title | escape }}" data-news-lightbox-caption="{{ post.title | escape }}" data-news-lightbox-index="0" data-news-lightbox-total="1" aria-label="Open image for {{ post.title | escape }}">
                <img class="news-post-image news-lightbox-image{% if post.image == 'images/code-to-clinic-logo.png' %} news-post-image--logo{% endif %}" src="{{ post.image | relative_url }}" alt="{{ post.title | escape }}" data-news-lightbox-image>
              </button>
            {% endif %}

            {% if post.images %}
              <div class="news-post-gallery" aria-label="Images for {{ post.title | escape }}">
                {% for image in post.images %}
                  <button class="news-post-gallery-button" type="button" data-news-lightbox-group="{{ post.title | slugify }}" data-news-lightbox-title="{{ post.title | escape }}" data-news-lightbox-category="{{ post.category | default: 'News' | escape }}" data-news-lightbox-src="{{ image.src | relative_url }}" data-news-lightbox-alt="{{ image.alt | default: post.title | escape }}" data-news-lightbox-caption="{{ post.title | escape }}" data-news-lightbox-index="{{ forloop.index0 }}" data-news-lightbox-total="{{ post.images.size }}" aria-label="Open image {{ forloop.index }} of {{ post.images.size }} for {{ post.title | escape }}">
                    <img class="news-post-gallery-image news-lightbox-image" src="{{ image.src | relative_url }}" alt="{{ image.alt | default: post.title | escape }}" loading="lazy" data-news-lightbox-image>
                  </button>
                {% endfor %}
              </div>
            {% endif %}

            {% if post.link %}
              <a class="news-post-link" href="{{ post.link }}" target="_blank" rel="noopener noreferrer">
                {{ post.link_label | default: "Read the original post" }}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </div>

  <div class="x-card">
    <div class="x-card-cover"></div>
    <div class="x-card-body">
      <img class="x-card-avatar" src="{{ '/images/x/hasanov-profile.jpg' | relative_url }}" alt="Elshad Hasanov, MD, PhD">
      <div class="x-card-name">
        Elshad Hasanov, MD, PhD
        <i class="fa-solid fa-circle-check x-card-verified"></i>
      </div>
      <div class="x-card-handle">@HasanovLab</div>
      <p class="x-card-bio">
        Physician-Scientist @OSUCCC_James in #GU cancers #brainmet | PI #HasanovLab @OhioStatePIIO #spatialsinglecell | former fellow @MDAndersonNews | #cancerfreeworld
      </p>
      <div class="x-card-meta">
        <span><i class="fa-solid fa-location-dot"></i> Columbus, OH</span>
        <a href="https://scholar.google.com/citations?user=R6wSHlgAAAAJ" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-google"></i> Google Scholar
        </a>
      </div>
      <div class="x-card-stats">
        <div><strong>458</strong><span>Posts</span></div>
        <div><strong>886</strong><span>Following</span></div>
        <div><strong>759</strong><span>Followers</span></div>
      </div>
      <a class="x-card-button" href="https://x.com/HasanovLab" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-x-twitter"></i> Follow on X
      </a>
    </div>
  </div>
</div>

<div class="gallery-modal news-gallery-modal" id="news-gallery-lightbox" data-gallery-modal hidden aria-hidden="true">
  <button class="gallery-modal-backdrop" type="button" aria-label="Close news image viewer" data-gallery-close></button>
  <div class="gallery-modal-panel" role="dialog" aria-modal="true" aria-label="News image viewer">
    <button class="gallery-modal-close" type="button" aria-label="Close news image viewer" data-gallery-close>&times;</button>
    <div class="gallery-carousel">
      <button class="gallery-carousel-arrow gallery-carousel-arrow-prev" type="button" aria-label="Show previous image" data-gallery-prev>&#8249;</button>
      <figure class="gallery-carousel-figure">
        <img src="{{ '/images/news/mostafa-rcc-brain-metastases/mostafa-rcc-bm-1.jpg' | relative_url }}" alt="Mostafa presenting RCC brain metastases research" data-gallery-image>
        <figcaption>
          <span class="gallery-carousel-caption" data-gallery-caption>Mostafa Presents Work on RCC Brain Metastases</span>
          <span class="gallery-carousel-counter" data-gallery-counter>1 / 2</span>
        </figcaption>
      </figure>
      <button class="gallery-carousel-arrow gallery-carousel-arrow-next" type="button" aria-label="Show next image" data-gallery-next>&#8250;</button>
    </div>
    <div class="gallery-video-frame-wrap" data-gallery-video-frame hidden></div>
  </div>
</div>

<style>
.news-container {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 0.85fr);
  gap: 30px;
  margin: 20px 0;
  align-items: start;
}

@media (max-width: 900px) {
  .news-container {
    grid-template-columns: 1fr;
  }
}

.news-main {
  min-width: 0;
}

.news-posts {
  display: grid;
  gap: 22px;
}

.news-post-card {
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.news-post-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.news-post-image {
  display: block;
  width: 100%;
  max-height: 520px;
  object-fit: contain;
  border-radius: 14px;
  background: #f7f9fb;
}

.news-post-image--logo {
  height: 280px;
  padding: 36px 48px;
  object-fit: contain;
  background: #ffffff;
}

.news-post-content {
  padding: 26px;
}

.news-post-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  color: #536471;
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.news-post-category {
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(29, 155, 240, 0.12);
  color: #1d6fb8;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1;
  text-transform: uppercase;
}

.news-post-title {
  margin: 0 0 12px 0 !important;
  color: #0f1419;
  font-size: 1.45rem;
  line-height: 1.25;
}

.news-post-text {
  margin: 0 !important;
  color: #0f1419;
  font-size: 1rem;
  line-height: 1.6;
}

.news-post-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 18px;
}

.news-post-gallery-button {
  display: block;
  padding: 0;
  border: 0;
  border-radius: 14px;
  background: transparent;
  cursor: zoom-in;
  overflow: hidden;
}

.news-post-gallery-button:focus-visible {
  outline: 3px solid #1d9bf0;
  outline-offset: 4px;
}

.news-post-gallery-button .news-post-gallery-image,
.news-post-image-button .news-post-image,
.news-lightbox-image {
  cursor: zoom-in;
}

.news-post-image-button {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  margin-top: 18px;
  cursor: zoom-in;
}

.news-post-gallery-image {
  display: block;
  width: 100%;
  height: 320px;
  object-fit: contain;
  background: #f7f9fb;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

@media (max-width: 640px) {
  .news-post-gallery {
    grid-template-columns: 1fr;
  }

  .news-post-gallery-image {
    height: auto;
    max-height: 520px;
  }
}

.news-post-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  color: #1d9bf0;
  font-weight: 700;
  text-decoration: none !important;
}

.news-post-link:hover {
  text-decoration: underline !important;
}

.news-gallery-modal .gallery-modal-panel {
  width: min(94vw, 1180px);
  background: rgba(8, 13, 24, 0.96);
}

.news-gallery-modal .gallery-carousel {
  padding: 28px;
}

.news-gallery-modal .gallery-carousel-figure img {
  max-width: min(100%, 90vw);
  max-height: 78vh;
  background: transparent;
}

.news-gallery-modal .gallery-carousel-figure figcaption {
  color: #ffffff;
}

.news-gallery-modal .gallery-carousel-caption {
  display: none;
}

@media (max-width: 640px) {
  .news-gallery-modal {
    padding: 14px;
  }

  .news-gallery-modal .gallery-modal-panel {
    width: min(96vw, 1180px);
    max-height: 94vh;
  }

  .news-gallery-modal .gallery-carousel {
    grid-template-columns: 44px minmax(0, 1fr) 44px;
    gap: 8px;
    padding: 22px 12px 18px;
  }

  .news-gallery-modal .gallery-carousel-figure img {
    max-width: 90vw;
    max-height: 76vh;
  }
}

/* === X / Twitter follow card === */
.x-card {
  display: block;
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
  text-decoration: none !important;
  color: inherit !important;
  position: sticky;
  top: 90px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.x-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.x-card-cover {
  height: 110px;
  background:
    linear-gradient(rgba(15, 20, 25, 0.05), rgba(15, 20, 25, 0.05)),
    url("{{ '/images/x/hasanov-banner.jpg' | relative_url }}");
  background-size: cover;
  background-position: center;
}

.x-card-body {
  padding: 0 26px 26px 26px;
  position: relative;
}

.x-card-avatar {
  display: block;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  object-fit: cover;
  margin: -52px 0 12px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.x-card-name {
  font-size: 1.35rem;
  font-weight: 700;
  color: #0f1419;
  display: flex;
  align-items: center;
  gap: 6px;
  line-height: 1.2;
}

.x-card-verified {
  color: #1d9bf0;
  font-size: 1rem;
}

.x-card-handle {
  color: #536471;
  font-size: 0.95rem;
  margin-top: 2px;
}

.x-card-bio {
  margin: 14px 0 12px 0 !important;
  color: #0f1419;
  font-size: 0.95rem;
  line-height: 1.45;
}

.x-mention,
.x-tag {
  color: #1d9bf0;
  text-decoration: none !important;
}

.x-mention:hover,
.x-tag:hover {
  text-decoration: underline !important;
}

.x-card-meta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  color: #536471;
  font-size: 0.88rem;
  margin-bottom: 14px;
}

.x-card-meta a {
  color: #536471;
  text-decoration: none !important;
}

.x-card-meta a:hover {
  color: #1d9bf0;
  text-decoration: underline !important;
}

.x-card-meta i {
  margin-right: 4px;
}

.x-card-stats {
  display: flex;
  gap: 22px;
  padding: 12px 0;
  border-top: 1px solid #eff3f4;
  border-bottom: 1px solid #eff3f4;
  margin-bottom: 18px;
}

.x-card-stats > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.85rem;
  color: #536471;
}

.x-card-stats strong {
  color: #0f1419;
  font-size: 1.05rem;
  font-weight: 700;
}

.x-card-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px 20px;
  background: #0f1419;
  color: #ffffff;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.98rem;
  text-decoration: none !important;
  transition: background 0.2s ease;
}

.x-card:hover .x-card-button {
  background: #272c30;
}
</style>
