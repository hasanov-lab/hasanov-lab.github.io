---
title: Team
nav:
  order: 4
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Our lab brings together clinicians, statisticians, bioinformaticians, and computer scientists with a shared goal of translating multi-omics discoveries into clinical impact for patients with genitourinary malignancies and brain metastases.

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'principal-investigator'" %}
{% include list.html data="members" component="portrait" filter="role == 'faculty'" %}
{% include list.html data="members" component="portrait" filter="role == 'clinical'" %}
{% include list.html data="members" component="portrait" filter="role == 'visiting-scholar'" %}
{% include list.html data="members" component="portrait" filter="role == 'postdoc'" %}
{% include list.html data="members" component="portrait" filter="role == 'phd'" %}
{% include list.html data="members" component="portrait" filter="role == 'team-member'" %}

## Alumni

{% assign alumni = site.members | where: "role", "alumni" | sort: "name" %}

<div class="alumni-list">
  {% for member in alumni %}
    <div class="alumni-item">
      <a class="alumni-name" href="{{ member.url | relative_url | uri_escape }}">
        {{ member.name }}
      </a>
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
