---
title: Team
nav:
  order: 4
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Our lab brings together clinicians, statisticians, bioinformaticians, and computer scientists with a shared goal of translating multi-omics discoveries into clinical impact for patients with genitourinary malignancies and brain metastases.

{% include section.html %}

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
