---
title: RCC-BM Models
---

# {% include icon.html icon="fa-solid fa-brain" %}RCC-BM Models

Select one of the RCC-BM prediction models below.

{% include section.html %}

<div class="rccbm-model-grid">
  <a class="rccbm-model-card" href="https://hasanovlab-rcc-bm-resect.share.connect.posit.cloud/" target="_blank" rel="noopener noreferrer">
    <h2>RCCBM-Resect</h2>
    <p>Post-craniotomy prediction model</p>
    <span>Launch model <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
  </a>

  <a class="rccbm-model-card" href="https://hasanovlab-rcc-bm-srs.share.connect.posit.cloud/" target="_blank" rel="noopener noreferrer">
    <h2>RCCBM-SRS</h2>
    <p>Post-SRS prediction model</p>
    <span>Launch model <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
  </a>

  <a class="rccbm-model-card" href="https://hasanovlab-rcc-bm-systemic.share.connect.posit.cloud/" target="_blank" rel="noopener noreferrer">
    <h2>RCCBM-Systemic</h2>
    <p>Systemic therapy prediction model</p>
    <span>Launch model <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
  </a>
</div>

<style>
.rccbm-model-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  margin: 28px 0 48px;
}

.rccbm-model-card {
  display: flex;
  flex-direction: column;
  min-height: 220px;
  padding: 28px;
  background: var(--background);
  border-radius: 10px;
  box-shadow: var(--shadow);
  text-decoration: none !important;
  color: inherit !important;
  transition: transform var(--transition), box-shadow var(--transition);
}

.rccbm-model-card[href]:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.14);
}

.rccbm-model-card h2 {
  margin: 0 0 16px !important;
  padding: 0 !important;
  border: 0 !important;
  color: var(--primary) !important;
  font-size: 1.35rem !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
}

.rccbm-model-card p {
  flex: 1;
  margin: 0 0 22px !important;
  color: var(--gray);
}

.rccbm-model-card span {
  color: var(--primary);
  font-weight: var(--semi-bold);
}

.rccbm-model-disabled {
  opacity: 0.82;
}

.rccbm-model-disabled span {
  color: var(--gray);
}

@media (max-width: 900px) {
  .rccbm-model-grid {
    grid-template-columns: 1fr;
  }
}
</style>
