---
title: ISM-RCC
---

<div class="ismrcc-landing">
  <div class="ismrcc-logo-wrap">
    <img src="{{ '/images/tools/ism-rcc-logo.svg' | relative_url }}" alt="ISM-RCC Hasanov Lab logo" class="ismrcc-logo">
  </div>
  <h1>ISM-RCC</h1>
  <h2>Immunotherapy Survival Model - Renal Cell Carcinoma</h2>
  <p class="ismrcc-description">ISM-RCC is a machine learning-based tool developed by Hasanov Lab to estimate overall survival for patients with advanced renal cell carcinoma receiving first line therapy ipilimumab and nivolumab.</p>
  <p class="ismrcc-description">It depends on selected clinical and laboratory features to estimate personalized risk assessment for the patient.</p>

  <div class="ismrcc-models">
    <div class="ismrcc-model">
      <h3>1st Model</h3>
      <p>Explore individualized overall survival based on baseline features.</p>
      <a class="ismrcc-launch" href="https://01a1d6e0-f5f6-347f-8285-097b9bc2e5bf.share.connect.posit.cloud/" target="_blank" rel="noopener noreferrer">Launch 1st Model <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
    <div class="ismrcc-model">
      <h3>2nd Model</h3>
      <p>Explore how toxicity-based discontinuation of either drug affects patient survival.</p>
      <a class="ismrcc-launch" href="https://01a20a28-a059-847f-6fdc-d3f127be90c0.share.connect.posit.cloud/" target="_blank" rel="noopener noreferrer">Launch 2nd Model <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
  </div>
</div>

<style>
.ismrcc-landing{max-width:760px;margin:40px auto 80px;padding:56px 48px 64px;text-align:center;background:var(--background);border-radius:16px;box-shadow:var(--shadow)}
.ismrcc-logo-wrap{display:flex;justify-content:center;margin-bottom:28px}.ismrcc-logo{width:190px;height:190px;object-fit:contain;border-radius:50%;background:#fff}
.ismrcc-landing h1{margin:0 0 8px!important;border:0!important;color:var(--primary)!important;font-size:2.5rem!important;letter-spacing:0!important}
.ismrcc-landing h2{margin:0 auto 28px!important;border:0!important;color:var(--gray);font-size:1.35rem!important;font-weight:var(--regular)!important;letter-spacing:0!important;text-transform:none!important}
.ismrcc-description{max-width:650px;margin:0 auto 18px;color:var(--text);font-size:1.08rem;line-height:1.7}
.ismrcc-models{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:30px}
.ismrcc-model{padding:24px 20px;border:1px solid var(--gray-light);border-radius:12px;background:var(--background)}
.ismrcc-model h3{margin:0 0 10px;color:var(--primary);font-size:1.2rem}
.ismrcc-model p{margin:0 0 20px;color:var(--text);font-size:.98rem;line-height:1.55}
.ismrcc-launch{display:inline-flex;align-items:center;gap:9px;padding:12px 20px;border-radius:7px;background:var(--primary);color:#fff!important;font-weight:var(--semi-bold);text-decoration:none!important}
@media(max-width:680px){.ismrcc-landing{margin:20px auto 50px;padding:36px 22px 44px}.ismrcc-logo{width:155px;height:155px}.ismrcc-landing h1{font-size:2rem!important}.ismrcc-landing h2{font-size:1.1rem!important}.ismrcc-description{font-size:1rem}.ismrcc-models{grid-template-columns:1fr}}
</style>