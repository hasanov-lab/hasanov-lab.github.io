---
title: Team
nav:
  order: 4
  tooltip: About our team
---

<img class="page-logo page-logo-small code-to-clinic-page-logo" src="{{ '/images/code-to-clinic-logo.png' | relative_url }}" alt="Code to Clinic logo">

<h1 class="page-title-clean">TEAM</h1>

Our lab brings together clinicians, statisticians, bioinformaticians, and computer scientists with a shared goal of translating multi-omics discoveries into clinical impact for patients with genitourinary malignancies and brain metastases.

{% include section.html %}

<div class="team-member-grid">
  {% include portrait.html lookup="elshad-hasanov" no_link=true %}
  {% include portrait.html lookup="merve-hasanov" no_link=true %}
  {% include portrait.html lookup="zuhair-majeed" no_link=true %}
  {% include portrait.html lookup="bayan-abu-alragheb" no_link=true %}
  {% include portrait.html lookup="semiha-ozgul" no_link=true %}
  {% include portrait.html lookup="mostafa-ali" no_link=true %}
  {% include portrait.html lookup="peng-li" no_link=true %}
  {% include portrait.html lookup="antonio-fajeta" no_link=true %}
  {% include portrait.html lookup="shriya-deshmukh" no_link=true %}
  {% include portrait.html lookup="tugcs" no_link=true %}
  {% include portrait.html lookup="nurlan" no_link=true %}
</div>

## Alumni

{% assign alumni = site.members | where: "role", "alumni" | sort: "name" %}

<div class="alumni-list">
  {% for member in alumni %}
    <div class="alumni-item">
      <span class="alumni-name">
        {{ member.name }}
      </span>
      {% if member.description %}
        <div class="alumni-description">{{ member.description }}</div>
      {% endif %}
      {% if member.affiliation %}
        <div class="alumni-affiliation">{{ member.affiliation }}</div>
      {% endif %}
    </div>
  {% endfor %}
</div>

{% include section.html %}
