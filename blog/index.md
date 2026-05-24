---
title: News & Events
nav:
  order: 5
  tooltip: News and events from the lab
---

# {% include icon.html icon="fa-solid fa-newspaper" %}News & Events

Stay updated with the latest news, publications, and events from the Hasanov Lab.

{% include section.html %}

<div class="x-feed">
  <a
    class="twitter-timeline"
    data-height="900"
    data-theme="light"
    href="https://twitter.com/HasanovLab?ref_src=twsrc%5Etfw"
  >
    Tweets by HasanovLab
  </a>
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

  <p class="x-feed-fallback">
    <a href="https://x.com/HasanovLab" target="_blank" rel="noopener noreferrer">
      View latest Hasanov Lab updates on X
    </a>
  </p>
</div>

<style>
.x-feed {
  max-width: 720px;
  margin: 20px auto;
  min-height: 900px;
  padding: 12px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: var(--shadow);
}

.x-feed-fallback {
  margin-top: 20px;
  text-align: center;
}
</style>
