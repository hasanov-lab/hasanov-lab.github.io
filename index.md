---
---

<h1>CODE TO CLINIC</h1>

We are a physician-scientist lab at [The Ohio State University Comprehensive Cancer Center (OSUCCC – James)](https://cancer.osu.edu/), led by Elshad Hasanov, MD, PhD. Our mission is to bridge computational discovery and clinical application in oncology by transforming complex cancer data into clinically meaningful insights.

Through the Code to Clinic initiative, we build machine learning models, reproducible computational pipelines, and translational research tools that integrate clinical data, cancer genomics, transcriptomics, single-cell biology, tumor immunology, and clinical trial outcomes. Our research spans genitourinary malignancies, renal cell carcinoma, bladder cancer, prostate cancer, melanoma, brain metastases, and pan-cancer studies.

Our work focuses on biomarker discovery, treatment response prediction, survival modeling, patient stratification, clinical trial interpretation, and characterization of the tumor microenvironment. By combining clinical expertise with machine learning and large-scale cancer data analysis, we aim to develop practical tools that accelerate discovery, support trial-informed research, and translate data-driven findings into improved patient outcomes.

{% include section.html %}

<h2>Highlights</h2>

{% capture text %}

Explore our publications, abstracts, and translational oncology research outputs grouped by year.

{%
  include button.html
  link="publications"
  text="View publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/code-to-clinic-logo.png"
  link="publications"
  title="Publications"
  text=text
%}

{% capture text %}

Meet our multidisciplinary team of clinicians, computational biologists, statisticians, and trainees working together to advance Code to Clinic research.

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/team/elshad-hasanov.jpg"
  link="team"
  title="Team"
  flip=true
  style="bare"
  text=text
%}
