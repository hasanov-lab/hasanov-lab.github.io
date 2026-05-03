---
title: News & Events
nav:
  order: 5
  tooltip: News and events from the lab
---

# {% include icon.html icon="fa-solid fa-newspaper" %}News & Events

Stay updated with the latest news, publications, and events from the Hasanov Lab.

{% include section.html %}

<div class="news-container">
  <div class="news-main">
    {% include search-box.html %}
    {% include tags.html tags=site.tags %}
    {% include search-info.html %}
    {% include list.html data="posts" component="post-excerpt" %}
  </div>

  <a class="x-card" href="https://twitter.com/HasanovLab" target="_blank" rel="noopener">
    <div class="x-card-cover"></div>
    <div class="x-card-body">
      <img class="x-card-avatar" src="{{ '/images/photo.jpg' | relative_url }}" alt="Dr. Elshad Hasanov">
      <div class="x-card-name">
        Elshad Hasanov, MD, PhD
        <i class="fa-solid fa-circle-check x-card-verified"></i>
      </div>
      <div class="x-card-handle">@HasanovLab</div>
      <p class="x-card-bio">
        Physician-Scientist <span class="x-mention">@OSUCCC_James</span> in
        <span class="x-tag">#GU</span> cancers <span class="x-tag">#brainmet</span> | PI
        <span class="x-tag">#HasanovLab</span> <span class="x-mention">@OhioStatePIIO</span>
        <span class="x-tag">#spatialsinglecell</span> | former fellow
        <span class="x-mention">@MDAndersonNews</span> | <span class="x-tag">#cancerfreeworld</span>
      </p>
      <div class="x-card-meta">
        <span><i class="fa-solid fa-location-dot"></i> Columbus, OH</span>
      </div>
      <div class="x-card-stats">
        <div><strong>458</strong><span>Posts</span></div>
        <div><strong>886</strong><span>Following</span></div>
        <div><strong>759</strong><span>Followers</span></div>
      </div>
      <span class="x-card-button">
        <i class="fa-brands fa-x-twitter"></i> Follow on X
      </span>
    </div>
  </a>
</div>

<style>
.news-container {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
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
  background: linear-gradient(135deg, #1a5276 0%, #2e86c1 50%, #17a589 100%);
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
}

.x-card-meta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  color: #536471;
  font-size: 0.88rem;
  margin-bottom: 14px;
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
  transition: background 0.2s ease;
}

.x-card:hover .x-card-button {
  background: #272c30;
}
</style>
