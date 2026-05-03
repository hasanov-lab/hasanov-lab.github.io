---
title: Tools
nav:
  order: 3
  tooltip: Interactive web tools and calculators from our publications
---

# {% include icon.html icon="fa-solid fa-laptop-medical" %}Tools

Interactive web-based calculators and tools developed by the Hasanov Lab. Each tool is linked to a peer-reviewed publication and is freely available for clinical and research use.

{% include section.html %}

<div class="tools-grid">

  <!-- ═══════════════════════════════════════════
       TEMPLATE — duplicate this block for each tool
       ═══════════════════════════════════════════ -->
  <!--
  <div class="tool-card">
    <div class="tool-card-header">
      <div class="tool-icon">
        <i class="fa-solid fa-calculator"></i>
      </div>
      <div class="tool-badge">New</div>
    </div>
    <div class="tool-card-body">
      <h3 class="tool-title">Tool Name</h3>
      <p class="tool-desc">
        Brief description of what this tool does and who should use it.
      </p>
      <div class="tool-tags">
        <span class="tool-tag">RCC</span>
        <span class="tool-tag">Brain Metastasis</span>
      </div>
      <div class="tool-citation">
        <i class="fa-solid fa-book-open"></i>
        Author et al., <em>Journal</em> (Year).
        <a href="https://doi.org/XXXXX" target="_blank" rel="noopener">DOI</a>
      </div>
    </div>
    <div class="tool-card-footer">
      <a class="tool-btn" href="https://TOOL-URL" target="_blank" rel="noopener">
        <i class="fa-solid fa-arrow-up-right-from-square"></i> Launch Tool
      </a>
    </div>
  </div>
  -->

  <!-- Coming Soon placeholder -->
  <div class="tools-coming-soon">
    <div class="coming-soon-icon">
      <i class="fa-solid fa-flask-vial"></i>
    </div>
    <h3>Tools Coming Soon</h3>
    <p>
      We are actively developing web-based calculators to accompany our publications.
      Check back here for interactive tools for risk stratification, biomarker analysis,
      and treatment response prediction in genitourinary cancers and brain metastasis.
    </p>
    <p class="coming-soon-contact">
      Interested in a collaboration?
      <a href="mailto:elshad.hasanov@osumc.edu">Contact us</a>.
    </p>
  </div>

</div>

<style>
/* ── Grid layout ── */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
  margin: 24px 0 40px;
}

/* ── Individual tool card ── */
.tool-card {
  display: flex;
  flex-direction: column;
  background: var(--background);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.13);
}

/* Card header bar */
.tool-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0;
}

.tool-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, #1a5276, #2e86c1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.4rem;
}

.tool-badge {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 999px;
  background: #e8f4fd;
  color: #2e86c1;
}

/* Card body */
.tool-card-body {
  padding: 16px 24px;
  flex: 1;
}

.tool-title {
  font-size: 1.2rem !important;
  font-weight: 700 !important;
  color: var(--dark-gray) !important;
  margin: 0 0 10px !important;
  border: none !important;
  padding: 0 !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
}

.tool-desc {
  font-size: 0.92rem;
  color: var(--gray);
  line-height: 1.6;
  margin: 0 0 14px !important;
}

/* Tag pills */
.tool-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.tool-tag {
  font-size: 0.78rem;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 999px;
  background: #f0f4f8;
  color: #4a6fa5;
}

/* Citation line */
.tool-citation {
  font-size: 0.82rem;
  color: var(--gray);
  line-height: 1.5;
}

.tool-citation i {
  margin-right: 5px;
  color: #2e86c1;
}

.tool-citation a {
  color: #2e86c1;
  text-decoration: none;
}

.tool-citation a:hover {
  text-decoration: underline;
}

/* Card footer button */
.tool-card-footer {
  padding: 0 24px 24px;
}

.tool-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: center;
  padding: 11px 20px;
  border-radius: 10px;
  background: linear-gradient(135deg, #1a5276, #2e86c1);
  color: #ffffff !important;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none !important;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.tool-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* ── Coming soon state ── */
.tools-coming-soon {
  grid-column: 1 / -1;
  text-align: center;
  padding: 60px 40px;
  background: var(--background);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.coming-soon-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a5276, #2e86c1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
}

.tools-coming-soon h3 {
  font-size: 1.5rem !important;
  font-weight: 600 !important;
  color: var(--dark-gray) !important;
  margin: 0 0 16px !important;
  border: none !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
}

.tools-coming-soon p {
  max-width: 540px;
  margin: 0 auto 12px !important;
  color: var(--gray);
  font-size: 0.95rem;
  line-height: 1.7;
}

.coming-soon-contact a {
  color: #2e86c1;
  text-decoration: none;
}

.coming-soon-contact a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .tools-coming-soon {
    padding: 40px 20px;
  }
}
</style>
