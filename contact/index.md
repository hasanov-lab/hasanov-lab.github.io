---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

We welcome inquiries from potential collaborators, prospective students and postdocs, and anyone interested in our research.

{% include section.html %}

<div class="contact-container">
  <div class="contact-card">
    <h2 class="contact-heading">Get in Touch</h2>

    <div class="contact-item">
      <div class="contact-icon-circle">
        <i class="fa-solid fa-location-dot"></i>
      </div>
      <div class="contact-info">
        <h4>Address</h4>
        <p>
          Pelotonia Research Center<br>
          Department of Internal Medicine<br>
          Division of Medical Oncology<br>
          The Ohio State University<br>
          2255 Kenny Rd<br>
          Columbus, OH 43210
        </p>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-icon-circle">
        <i class="fa-solid fa-envelope"></i>
      </div>
      <div class="contact-info">
        <h4>Email Us</h4>
        <p><a href="mailto:elshad.hasanov@osumc.edu">elshad.hasanov@osumc.edu</a></p>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-icon-circle">
        <i class="fa-solid fa-share-nodes"></i>
      </div>
      <div class="contact-info">
        <h4>Social Media</h4>
        <div class="contact-buttons">
          <a href="https://github.com/hasanov-lab" class="contact-social-btn github">
            <i class="fa-brands fa-github"></i> GitHub
          </a>
          <a href="https://scholar.google.com/citations?user=R6wSHlgAAAAJ" class="contact-social-btn scholar">
            <i class="fa-brands fa-google-scholar"></i> Google Scholar
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="contact-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.0!2d-83.0305!3d40.0030!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388c5e1a6c8b1d%3A0x5af8e1e6e07f9a8e!2sPelotonia%20Research%20Center!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" width="100%" height="100%" style="border:0; min-height:500px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>

{% include section.html background="images/background.jpg" dark=true %}

**Interested in joining our team?** We are always looking for motivated students, postdocs, and collaborators passionate about cancer research and computational biology. Please send your CV and a brief description of your research interests to [elshad.hasanov@osumc.edu](mailto:elshad.hasanov@osumc.edu).

<style>
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 20px 0;
  align-items: stretch;
}

@media (max-width: 800px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}

.contact-card {
  background: var(--background);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
}

.contact-heading {
  font-size: 2.2rem !important;
  font-weight: 300 !important;
  color: var(--dark-gray) !important;
  border: none !important;
  margin-top: 0 !important;
  margin-bottom: 30px !important;
  padding: 0 !important;
  text-align: left !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 28px;
}

.contact-icon-circle {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #e8f4fd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2e86c1;
  font-size: 1.2rem;
  transition: transform 0.3s ease, background 0.3s ease;
}

.contact-item:hover .contact-icon-circle {
  transform: scale(1.1);
  background: #d0ebfa;
}

.contact-info h4 {
  margin: 0 0 6px 0 !important;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--dark-gray);
  letter-spacing: 0;
}

.contact-info p {
  margin: 0;
  color: var(--gray);
  line-height: 1.7;
}

.contact-info a {
  color: var(--primary);
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.contact-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 6px;
}

.contact-social-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-social-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.contact-social-btn.github {
  background: #24292e;
  color: #ffffff !important;
}

.contact-social-btn.scholar {
  background: #2e86c1;
  color: #ffffff !important;
}

.contact-map {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
  min-height: 500px;
}

.contact-map iframe {
  border-radius: 0;
}
</style>
