---
title: Apollo Tools
---

# Apollo Tools

A collection of clinical and computational oncology tools from the Hasanov Lab.

{% include section.html %}

<div class="rccbm-model-grid apollo-tools-grid">
  <a class="rccbm-model-card" href="https://hasanovlab-apollo-pulvicto.share.connect.posit.cloud/" target="_blank" rel="noopener noreferrer" aria-label="Open Pluvicto for Advanced Prostate Cancer tool">
    <h2>Pluvicto for Advanced Prostate Cancer</h2>
    <p>Real-world outcomes and EHR-based machine learning model for patients with advanced prostate cancer treated with Lu-PSMA-617.</p>
    <span>Open tool <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
  </a>
</div>

<style>
.rccbm-model-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  margin: 28px 0 48px;
}

.apollo-tools-grid {
  grid-template-columns: minmax(0, 360px);
  justify-content: center;
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

@media (max-width: 900px) {
  .rccbm-model-grid {
    grid-template-columns: 1fr;
  }
}
</style>
