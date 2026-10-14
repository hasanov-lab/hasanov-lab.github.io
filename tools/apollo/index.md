---
title: Apollo Tools
---

# Apollo Tools

A collection of clinical and computational oncology tools from the Hasanov Lab.

{% include section.html %}

<section class="apollo-tools" aria-label="Apollo tools">
  <article class="apollo-tool-card">
    <h2>Pluvicto for Advanced Prostate Cancer</h2>
    <p class="apollo-tool-status">COMING SOON</p>
  </article>

  <article class="apollo-tool-card">
    <h2>Belzutifan</h2>
    <p class="apollo-tool-status">COMING SOON</p>
  </article>
</section>

<style>
.apollo-tools {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  max-width: 1000px;
  margin: 28px auto 48px;
  padding: 0 8px;
}

.apollo-tool-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 210px;
  padding: 32px 24px;
  text-align: center;
  background: var(--background);
  border: 1px solid var(--primary);
  border-top: 5px solid var(--primary);
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
}

.apollo-tool-card h2 {
  margin: 0 0 24px !important;
  padding: 0 !important;
  border: 0 !important;
  color: var(--primary) !important;
  font-size: clamp(1.15rem, 2.2vw, 1.5rem) !important;
  font-weight: var(--bold);
  line-height: 1.35;
}

.apollo-tool-status {
  display: inline-block;
  margin: 0 !important;
  padding: 8px 14px;
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: var(--bold);
  letter-spacing: 0.09em;
  line-height: 1.2;
}

@media (max-width: 650px) {
  .apollo-tools {
    grid-template-columns: minmax(0, 1fr);
    gap: 18px;
    margin: 20px auto 36px;
    padding: 0;
  }

  .apollo-tool-card {
    min-height: 170px;
    padding: 28px 20px;
  }
}
</style>
