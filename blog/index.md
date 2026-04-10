---
title: News & Events
nav:
  order: 4
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

  <div class="news-twitter">
    <h3 class="news-twitter-heading">
      <i class="fa-brands fa-x-twitter"></i> Latest from @HasanovLab
    </h3>
    <div class="news-twitter-embed">
      <a class="twitter-timeline"
         data-height="700"
         data-chrome="noheader nofooter noborders transparent"
         href="https://twitter.com/HasanovLab?ref_src=twsrc%5Etfw">
        Tweets by HasanovLab
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
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

.news-twitter {
  background: var(--background);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 90px;
}

.news-twitter-heading {
  font-size: 1.2rem !important;
  font-weight: 600 !important;
  margin: 0 0 16px 0 !important;
  padding: 0 !important;
  border: none !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  color: var(--dark-gray) !important;
  display: flex;
  align-items: center;
  gap: 10px;
}

.news-twitter-heading i {
  color: #1da1f2;
}

.news-twitter-embed {
  max-height: 720px;
  overflow-y: auto;
}
</style>
