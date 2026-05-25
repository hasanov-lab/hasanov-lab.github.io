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
    {% include search-box.html %}
    {% include tags.html tags=site.tags %}
    {% include search-info.html %}
    {% include list.html data="posts" component="post-excerpt" %}
  </div>

  <div class="x-feed-card">
    <a
      class="twitter-timeline"
      data-height="720"
      data-dnt="true"
      href="https://twitter.com/X"
    >
      Latest posts from @X
    </a>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <a class="x-feed-fallback" href="https://x.com/HasanovLab" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-x-twitter"></i> View latest updates on X
    </a>
  </div>
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

.x-feed-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 90px;
  min-height: 720px;
}

.x-feed-card .twitter-timeline {
  display: block;
  padding: 22px;
  text-align: center;
}

.x-feed-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 14px 20px 20px;
  padding: 12px 18px;
  background: #0f1419;
  color: #ffffff;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.98rem;
  text-decoration: none !important;
  transition: background 0.2s ease;
}

.x-feed-fallback:hover {
  background: #272c30;
}
</style>
