---
title: Tools
nav:
  order: 3
  tooltip: Interactive web tools and calculators from our publications
---

# {% include icon.html icon="fa-solid fa-laptop-medical" %}Tools

Interactive web-based calculators and tools developed by the Hasanov Lab.

{% include section.html %}

<div class="tools-grid">
  <div class="tool-card tool-card-disabled" aria-label="Apollo link coming soon">
    <div class="tool-logo-wrap">
      <img src="{{ '/images/tools/apollo-logo.png' | relative_url }}" alt="Apollo logo" class="tool-logo">
    </div>
    <div class="tool-card-body">
      <h2 class="tool-title">Apollo</h2>
      <p class="tool-status">Link coming soon</p>
    </div>
  </div>

  <a class="tool-card" href="https://hasanovlab-oncogenie.share.connect.posit.cloud" target="_blank" rel="noopener noreferrer" aria-label="Open OncoGenie tool">
    <div class="tool-logo-wrap">
      <img src="{{ '/images/tools/oncogenie-logo.png' | relative_url }}" alt="OncoGenie logo" class="tool-logo">
    </div>
    <div class="tool-card-body">
      <h2 class="tool-title">OncoGenie</h2>
      <p class="tool-status">Launch tool <i class="fa-solid fa-arrow-up-right-from-square"></i></p>
    </div>
  </a>

  <a class="tool-card" href="{{ '/tools/rcc-bm/' | relative_url }}" aria-label="Open RCC-BM model selection">
    <div class="tool-logo-wrap">
      <img src="{{ '/images/tools/rccbm-logo.png' | relative_url }}" alt="RCC-BM logo" class="tool-logo tool-logo-wide">
    </div>
    <div class="tool-card-body">
      <h2 class="tool-title">RCC-BM</h2>
      <p class="tool-status">Select model <i class="fa-solid fa-arrow-right"></i></p>
    </div>
  </a>
</div>

<style>
.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  margin: 28px 0 48px;
}

.tool-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 360px;
  padding: 28px;
  background: var(--background);
  border-radius: 10px;
  box-shadow: var(--shadow);
  text-align: center;
  text-decoration: none !important;
  color: inherit !important;
  transition: transform var(--transition), box-shadow var(--transition);
}

.tool-card[href]:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.14);
}

.tool-card-disabled {
  opacity: 0.86;
}

.tool-logo-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  margin-bottom: 18px;
}

.tool-logo {
  max-width: 100%;
  max-height: 210px;
  object-fit: contain;
}

.tool-logo-wide {
  max-height: 170px;
}

.tool-card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.tool-title {
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  color: var(--primary) !important;
  font-size: 1.45rem !important;
  font-weight: var(--semi-bold) !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
}

.tool-status {
  margin: 0 !important;
  color: var(--gray);
  font-size: 0.95rem;
}

.tool-card[href] .tool-status {
  color: var(--primary);
  font-weight: var(--semi-bold);
}

@media (max-width: 900px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }

  .tool-card {
    min-height: 300px;
  }
}
</style>
