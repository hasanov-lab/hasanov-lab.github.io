/*
  Gallery lightbox interactions.
  This file is loaded globally, but it only activates when the Gallery page
  markup is present. Keep this in an external script so the click behavior does
  not depend on inline scripts in the Markdown page body.
*/
(function () {
  const galleryItems = {
    "asco-posters": {
      category: "Science",
      categorySlug: "science",
      title: "ASCO 2026 Posters",
      description: "A collection of Hasanov Lab poster presentations from the Annual ASCO 2026 meeting.",
      images: [
        {
          src: "/gallery/ascoposters/ascoa.jpeg",
          alt: "ASCO 2026 poster preview from Hasanov Lab",
          caption: "ASCO 2026 Posters"
        },
        {
          src: "/gallery/ascoposters/asco-antonio.jpeg",
          alt: "ASCO 2026 poster by Antonio Faieta from Hasanov Lab",
          caption: "ASCO 2026 poster by Antonio Faieta"
        },
        {
          src: "/gallery/ascoposters/asco-betul.jpeg",
          alt: "ASCO 2026 poster by Betul from Hasanov Lab",
          caption: "ASCO 2026 poster by Betul"
        },
        {
          src: "/gallery/ascoposters/asco-peng.jpeg",
          alt: "ASCO 2026 poster by Peng Li from Hasanov Lab",
          caption: "ASCO 2026 poster by Peng Li"
        },
        {
          src: "/gallery/ascoposters/asco-zuhair.jpeg",
          alt: "ASCO 2026 poster by Zuhair Majeed from Hasanov Lab",
          caption: "ASCO 2026 poster by Zuhair Majeed"
        },
        {
          src: "/gallery/ascoposters/ascozz.jpeg",
          alt: "ASCO 2026 poster from Hasanov Lab",
          caption: "ASCO 2026 Posters"
        }
      ]
    },
    "lab-meeting": {
      category: "Lab Life",
      categorySlug: "lab-life",
      title: "Lab Meeting & Team Gathering",
      description: "A Hasanov Lab team gathering, bringing together lab members for project discussions, collaboration, and community.",
      images: [
        {
          src: "/gallery/gallery-lab-meeting-team-gathering.png.jpeg",
          alt: "Lab Meeting & Team Gathering",
          caption: "Lab Meeting & Team Gathering"
        }
      ]
    },
    "zeynep-match": {
      category: "Celebrations",
      categorySlug: "celebrations",
      title: "Zeynep Matches into Internal Medicine",
      description: "Celebrating Zeynep, one of our postdoctoral scholars, on matching into Internal Medicine at UConn / the University of Connecticut.",
      images: [
        {
          src: "/gallery/news-zeynep-internal-medicine-match.jpeg",
          alt: "Zeynep Matches into Internal Medicine",
          caption: "Zeynep Matches into Internal Medicine"
        }
      ]
    }
  };

  const videoItems = {
    "zuhair-asco-2026": {
      category: "Video",
      categorySlug: "video",
      title: "Zuhair ASCO 2026 Poster Video",
      description: "A poster presentation video by Zuhair for the ASCO 2026 meeting.",
      embedUrl: "https://www.youtube.com/embed/8OAeRvHbG0Y?autoplay=1"
    }
  };

  const state = {
    initialized: false,
    gallery: null,
    modal: null,
    modalPanel: null,
    modalCategory: null,
    modalTitle: null,
    modalDescription: null,
    modalImage: null,
    modalCaption: null,
    modalCounter: null,
    previousButton: null,
    nextButton: null,
    closeButton: null,
    videoFrameWrap: null,
    activeGallery: null,
    activeVideo: null,
    activeIndex: 0,
    previousFocus: null
  };

  const getClosestGalleryCard = (target) => {
    if (!target || typeof target.closest !== "function") {
      return null;
    }

    return target.closest("[data-gallery-card]");
  };

  const getClosestGalleryVideo = (target) => {
    if (!target || typeof target.closest !== "function") {
      return null;
    }

    return target.closest("[data-gallery-video]");
  };

  const setFilter = (selected) => {
    if (!state.gallery) {
      return;
    }

    state.gallery.querySelectorAll("[data-filter]").forEach((button) => {
      const isActive = button.dataset.filter === selected;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    state.gallery.querySelectorAll("[data-category]").forEach((card) => {
      const isVisible = selected === "all" || card.dataset.category === selected;
      card.hidden = !isVisible;
    });
  };

  const updateCarousel = (index) => {
    if (!state.activeGallery || !state.modalImage || !state.modalCaption || !state.modalCounter || !state.previousButton || !state.nextButton) {
      return;
    }

    state.activeIndex = (index + state.activeGallery.images.length) % state.activeGallery.images.length;
    const image = state.activeGallery.images[state.activeIndex];
    state.modalImage.src = image.src;
    state.modalImage.alt = image.alt;
    state.modalCaption.textContent = image.caption || state.activeGallery.title;
    state.modalCounter.textContent = `${state.activeIndex + 1} / ${state.activeGallery.images.length}`;

    const hasMultipleImages = state.activeGallery.images.length > 1;
    state.modal.classList.toggle("is-single-image", !hasMultipleImages);
    state.modalCounter.hidden = !hasMultipleImages;
    state.previousButton.hidden = !hasMultipleImages;
    state.nextButton.hidden = !hasMultipleImages;
    state.previousButton.disabled = !hasMultipleImages;
    state.nextButton.disabled = !hasMultipleImages;
  };

  const clearVideoFrame = () => {
    if (state.videoFrameWrap) {
      state.videoFrameWrap.replaceChildren();
      state.videoFrameWrap.hidden = true;
    }
  };

  const closeModal = () => {
    if (!state.modal) {
      return;
    }

    clearVideoFrame();
    state.modal.hidden = true;
    state.modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("gallery-modal-is-open");
    state.modal.classList.remove("is-single-image", "is-video");
    state.activeGallery = null;
    state.activeVideo = null;

    if (state.previousFocus && typeof state.previousFocus.focus === "function") {
      state.previousFocus.focus();
    }
  };

  const openModal = (galleryKey) => {
    if (!state.initialized) {
      initializeGalleryLightbox();
    }

    const selectedGallery = galleryItems[galleryKey];

    if (!selectedGallery || !state.modal) {
      return;
    }

    clearVideoFrame();
    state.previousFocus = document.activeElement;
    state.activeGallery = selectedGallery;
    state.activeVideo = null;
    state.modal.classList.remove("is-video");
    state.modal.dataset.category = selectedGallery.categorySlug;
    state.modalCategory.textContent = selectedGallery.category;
    state.modalTitle.textContent = selectedGallery.title;
    state.modalDescription.textContent = selectedGallery.description;
    updateCarousel(0);
    state.modal.hidden = false;
    state.modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("gallery-modal-is-open");

    if (state.closeButton) {
      state.closeButton.focus();
    }
  };

  const openVideoModal = (videoKey) => {
    if (!state.initialized) {
      initializeGalleryLightbox();
    }

    const selectedVideo = videoItems[videoKey];

    if (!selectedVideo || !state.modal || !state.videoFrameWrap) {
      return;
    }

    clearVideoFrame();
    state.previousFocus = document.activeElement;
    state.activeGallery = null;
    state.activeVideo = selectedVideo;
    state.modal.classList.remove("is-single-image");
    state.modal.classList.add("is-video");
    state.modal.dataset.category = selectedVideo.categorySlug;
    state.modalCategory.textContent = selectedVideo.category;
    state.modalTitle.textContent = selectedVideo.title;
    state.modalDescription.textContent = selectedVideo.description;

    const iframe = document.createElement("iframe");
    iframe.src = selectedVideo.embedUrl;
    iframe.title = selectedVideo.title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.setAttribute("allowfullscreen", "");
    state.videoFrameWrap.hidden = false;
    state.videoFrameWrap.appendChild(iframe);

    state.modal.hidden = false;
    state.modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("gallery-modal-is-open");

    if (state.closeButton) {
      state.closeButton.focus();
    }
  };

  window.openHasanovGalleryCard = (card, event) => {
    if (!card) {
      return;
    }

    if (event) {
      event.preventDefault();
      event.galleryLightboxHandled = true;
    }

    openModal(card.dataset.galleryCard);
  };

  window.openHasanovGalleryVideo = (card, event) => {
    if (!card) {
      return;
    }

    if (event) {
      event.preventDefault();
      event.galleryLightboxHandled = true;
    }

    openVideoModal(card.dataset.galleryVideo);
  };

  function initializeGalleryLightbox() {
    if (state.initialized) {
      return;
    }

    state.gallery = document.querySelector("[data-gallery]");
    state.modal = document.querySelector("[data-gallery-modal]");

    if (!state.gallery || !state.modal) {
      return;
    }

    state.initialized = true;

    state.modalPanel = state.modal.querySelector(".gallery-modal-panel");
    state.modalCategory = state.modal.querySelector("[data-gallery-modal-category]");
    state.modalTitle = state.modal.querySelector("[data-gallery-modal-title]");
    state.modalDescription = state.modal.querySelector("[data-gallery-modal-description]");
    state.modalImage = state.modal.querySelector("[data-gallery-image]");
    state.modalCaption = state.modal.querySelector("[data-gallery-caption]");
    state.modalCounter = state.modal.querySelector("[data-gallery-counter]");
    state.previousButton = state.modal.querySelector("[data-gallery-prev]");
    state.nextButton = state.modal.querySelector("[data-gallery-next]");
    state.closeButton = state.modal.querySelector(".gallery-modal-close");
    state.videoFrameWrap = state.modal.querySelector("[data-gallery-video-frame]");

    state.gallery.querySelectorAll("[data-filter]").forEach((filter) => {
      filter.addEventListener("click", () => setFilter(filter.dataset.filter));
    });

    state.gallery.addEventListener("click", (event) => {
      if (event.galleryLightboxHandled) {
        return;
      }

      const videoCard = getClosestGalleryVideo(event.target);

      if (videoCard && state.gallery.contains(videoCard)) {
        window.openHasanovGalleryVideo(videoCard, event);
        return;
      }

      const card = getClosestGalleryCard(event.target);

      if (!card || !state.gallery.contains(card)) {
        return;
      }

      window.openHasanovGalleryCard(card, event);
    });

    state.gallery.querySelectorAll("[data-gallery-card]").forEach((card) => {
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          window.openHasanovGalleryCard(card, event);
        }
      });
    });

    state.gallery.querySelectorAll("[data-gallery-video]").forEach((card) => {
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          window.openHasanovGalleryVideo(card, event);
        }
      });
    });

    if (state.previousButton) {
      state.previousButton.addEventListener("click", (event) => {
        event.preventDefault();
        updateCarousel(state.activeIndex - 1);
      });
    }

    if (state.nextButton) {
      state.nextButton.addEventListener("click", (event) => {
        event.preventDefault();
        updateCarousel(state.activeIndex + 1);
      });
    }

    state.modal.querySelectorAll("[data-gallery-close]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        closeModal();
      });
    });

    state.modal.addEventListener("click", (event) => {
      if (!state.modalPanel || !state.modalPanel.contains(event.target)) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (!state.modal || state.modal.hidden) {
        return;
      }

      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowLeft" && state.activeGallery && state.activeGallery.images.length > 1) {
        updateCarousel(state.activeIndex - 1);
      }

      if (event.key === "ArrowRight" && state.activeGallery && state.activeGallery.images.length > 1) {
        updateCarousel(state.activeIndex + 1);
      }
    });

    setFilter("all");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeGalleryLightbox);
  } else {
    initializeGalleryLightbox();
  }
})();
