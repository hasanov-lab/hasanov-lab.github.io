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
  <iframe
    class="x-feed-frame"
    title="Hasanov Lab X timeline"
    src="https://syndication.twitter.com/srv/timeline-profile/screen-name/HasanovLab?dnt=true&embedId=twitter-widget-0&frame=false&hideBorder=false&hideFooter=false&hideHeader=false&hideScrollBar=false&lang=en&maxHeight=900px&showHeader=true&showReplies=false&transparent=false"
    loading="lazy"
    allowtransparency="true"
  ></iframe>

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
  padding: 12px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: var(--shadow);
}

.x-feed-frame {
  display: block;
  width: 100%;
  height: 900px;
  border: 0;
}

.x-feed-fallback {
  margin-top: 20px;
  text-align: center;
}
</style>
