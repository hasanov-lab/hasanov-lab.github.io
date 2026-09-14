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
        },
        {
          src: "/gallery/ascoposters/new%20asco%200.jpeg",
          alt: "ASCO 2026 group photo from Hasanov Lab",
          caption: "ASCO 2026 Group Photo"
        },
        {
          src: "/gallery/ascoposters/Newasco1.jpeg",
          alt: "ASCO 2026 group photo from Hasanov Lab",
          caption: "ASCO 2026 Group Photo"
        },
        {
          src: "/gallery/ascoposters/new%20asco2%20.jpeg",
          alt: "ASCO 2026 group photo from Hasanov Lab",
          caption: "ASCO 2026 Group Photo"
        },
        {
          src: "/gallery/ascoposters/new%20asco%203%20.jpeg",
          alt: "ASCO 2026 group photo from Hasanov Lab",
          caption: "ASCO 2026 Group Photo"
        }
      ]
    },
    "mostafa-rcc-brain-metastases": {
      category: "Science",
      categorySlug: "science",
      title: "Mostafa Presents RCC Brain Metastases Research",
      description: "Mostafa presenting his work on the single-cell and spatial landscape of renal cell carcinoma brain metastases.",
      images: [
        {
          src: "/images/news/mostafa-rcc-brain-metastases/mostafa-rcc-bm-1.jpg",
          alt: "Mostafa presenting RCC brain metastases research",
          caption: "Mostafa Presents RCC Brain Metastases Research"
        },
        {
          src: "/images/news/mostafa-rcc-brain-metastases/mostafa-rcc-bm-2.jpg",
          alt: "Mostafa RCC brain metastases presentation image",
          caption: "Mostafa Presents RCC Brain Metastases Research"
        },
        {
          src: "/images/news/mostafa-rcc-brain-metastases/mostafa-rcc-bm-3.jpeg",
          alt: "Mostafa RCC brain metastases research discussion image",
          caption: "Mostafa Presents RCC Brain Metastases Research"
        },
        {
          src: "/images/news/mostafa-rcc-brain-metastases/mostafa-rcc-bm-4.jpeg",
          alt: "Mostafa RCC brain metastases research presentation audience image",
          caption: "Mostafa Presents RCC Brain Metastases Research"
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
    "belzutifan-rcc": {
      category: "Video",
      categorySlug: "video",
      title: "Belzutifan Real-World Outcomes and EHR-Based ML Model in Advanced RCC",
      description: "By Zuhair Majeed",
      embedUrl: "https://www.youtube.com/embed/lVSRhm7HHBc?autoplay=1"
    },
    "antonio-lu-psma-617": {
      category: "Video",
      categorySlug: "video",
      title: "Lu-PSMA-617 Real-World Outcomes and EHR-Based ML Model in Advanced Prostate Cancer",
      description: "By Antonio Faieta",
      embedUrl: "https://www.youtube.com/embed/Pprk51ziVlc?autoplay=1"
    },
    "betul-rcc-brain-metastases": {
      category: "Video",
      categorySlug: "video",
      title: "Genomic Landscape of RCC Brain Metastases",
      description: "By Betul Gok Yavuz",
      embedUrl: "https://www.youtube.com/embed/OalExMxoDHs?autoplay=1"
    },
    "shriya-metastatic-rcc": {
      category: "Video",
      categorySlug: "video",
      title: "Spatial Transcriptomics in Metastatic RCC",
      description: "By Shriya Deshmukh",
      embedUrl: "https://www.youtube.com/embed/XFHCCjsCyDM?autoplay=1"
    },
    "peng-rcc-transcriptomic-outcomes": {
      category: "Video",
      categorySlug: "video",
      title: "Transcriptomic Prediction of RCC Treatment Outcomes",
      description: "By Peng Li",
      embedUrl: "https://www.youtube.com/embed/HmnE7B0gRnA?autoplay=1"
    }
  };

  const state = {
    initialized: false,
    gallery: null,
    modal: null,
    modalPanel: null,
    videoModal: null,
    videoModalPanel: null,
    videoModalTitle: null,
    videoModalDescription: null,
    videoFrameWrap: null,
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

  const hasOpenModal = () => Boolean(
    (state.modal && !state.modal.hidden) ||
    (state.videoModal && !state.videoModal.hidden)
  );

  const restorePreviousFocus = () => {
    const previousFocus = state.previousFocus;
    state.previousFocus = null;

    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus();
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

    if (!hasOpenModal()) {
      document.body.classList.remove("gallery-modal-is-open");
    }

    restorePreviousFocus();
  };

  const closeVideoModal = () => {
    if (!state.videoModal) {
      return;
    }

    state.videoModal.hidden = true;
    state.videoModal.setAttribute("aria-hidden", "true");

    if (state.videoFrameWrap) {
      state.videoFrameWrap.replaceChildren();
    }

    if (!hasOpenModal()) {
      document.body.classList.remove("gallery-modal-is-open");
    }

    restorePreviousFocus();
  };

  const openModal = (galleryKey, startIndex = 0, options = {}) => {
    if (!state.initialized) {
      initializeGalleryLightbox();
    }

    const selectedGallery = galleryItems[galleryKey];

    if (!selectedGallery || !state.modal) {
      return;
    }

    clearVideoFrame();
    state.previousFocus = document.activeElement;
    state.activeGallery = options.imageLimit
      ? { ...selectedGallery, images: selectedGallery.images.slice(0, options.imageLimit) }
      : selectedGallery;
    state.activeVideo = null;
    state.modal.classList.remove("is-video");
    state.modal.dataset.category = selectedGallery.categorySlug;
    state.modal.dataset.galleryKey = galleryKey;
    state.modalCategory.textContent = state.activeGallery.category;
    state.modalTitle.textContent = state.activeGallery.title;
    state.modalDescription.textContent = state.activeGallery.description;
    updateCarousel(startIndex);
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

  window.openHasanovGalleryKey = (galleryKey, startIndex, event) => {
    if (event) {
      event.preventDefault();
      event.galleryLightboxHandled = true;
    }

    const parsedIndex = Number.parseInt(startIndex, 10);
    const trigger = event && event.currentTarget;
    const parsedLimit = trigger && trigger.dataset.newsGalleryLimit
      ? Number.parseInt(trigger.dataset.newsGalleryLimit, 10)
      : Number.NaN;

    openModal(
      galleryKey,
      Number.isNaN(parsedIndex) ? 0 : parsedIndex,
      { imageLimit: Number.isNaN(parsedLimit) ? null : parsedLimit }
    );
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
    state.modal = document.querySelector("#gallery-lightbox");
    state.videoModal = document.querySelector("[data-gallery-video-modal]");

    if (!state.modal) {
      return;
    }

    state.initialized = true;

    state.modalPanel = state.modal.querySelector(".gallery-modal-panel");

    if (state.videoModal) {
      state.videoModalPanel = state.videoModal.querySelector(".gallery-video-modal-panel");
      state.videoModalTitle = state.videoModal.querySelector("[data-gallery-video-modal-title]");
      state.videoModalDescription = state.videoModal.querySelector("[data-gallery-video-modal-description]");
      state.videoFrameWrap = state.videoModal.querySelector("[data-gallery-video-frame-wrap]");
      state.videoCloseButton = state.videoModal.querySelector(".gallery-modal-close");
    }
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

    if (state.gallery) {
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

      state.gallery.querySelectorAll("[data-gallery-card], [data-gallery-video]").forEach((card) => {
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          if (card.matches("[data-gallery-video]")) {
            window.openHasanovGalleryVideo(card, event);
            return;
          }

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

    }

    document.querySelectorAll("[data-news-gallery]").forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        window.openHasanovGalleryKey(trigger.dataset.newsGallery, trigger.dataset.newsGalleryIndex, event);
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

    if (state.videoModal) {
      state.videoModal.querySelectorAll("[data-gallery-video-close]").forEach((button) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          closeVideoModal();
        });
      });
    }

    state.modal.addEventListener("click", (event) => {
      if (!state.modalPanel || !state.modalPanel.contains(event.target)) {
        closeModal();
      }
    });

    if (state.videoModal) {
      state.videoModal.addEventListener("click", (event) => {
        if (!state.videoModalPanel || !state.videoModalPanel.contains(event.target)) {
          closeVideoModal();
        }
      });
    }

    document.addEventListener("keydown", (event) => {
      if (state.videoModal && !state.videoModal.hidden && event.key === "Escape") {
        closeVideoModal();
        return;
      }

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

    if (state.gallery) {
      setFilter("all");
    }
  }


  function initializeNewsLightbox() {
    const modal = document.querySelector("#news-gallery-lightbox");
    const modalPanel = modal ? modal.querySelector(".gallery-modal-panel") : null;
    const modalImage = modal ? modal.querySelector("[data-gallery-image]") : null;
    const caption = modal ? modal.querySelector("[data-gallery-caption]") : null;
    const counter = modal ? modal.querySelector("[data-gallery-counter]") : null;
    const previousButton = modal ? modal.querySelector("[data-gallery-prev]") : null;
    const nextButton = modal ? modal.querySelector("[data-gallery-next]") : null;
    const closeButton = modal ? modal.querySelector(".gallery-modal-close") : null;

    if (!modal || !modalPanel || !modalImage || modal.dataset.newsLightboxInitialized === "true") {
      return;
    }

    modal.dataset.newsLightboxInitialized = "true";

    let activeImages = [];
    let activeIndex = 0;
    let previousFocus = null;

    const updateNewsImage = (index) => {
      if (!activeImages.length) {
        return;
      }

      activeIndex = (index + activeImages.length) % activeImages.length;
      const activeImage = activeImages[activeIndex];
      modalImage.src = activeImage.src;
      modalImage.alt = activeImage.alt || "News image";

      if (caption) {
        caption.textContent = activeImage.caption || activeImage.alt || "News image";
      }

      if (counter) {
        counter.textContent = `${activeIndex + 1} / ${activeImages.length}`;
        counter.hidden = activeImages.length < 2;
      }

      const hasMultipleImages = activeImages.length > 1;
      modal.classList.toggle("is-single-image", !hasMultipleImages);

      [previousButton, nextButton].forEach((button) => {
        if (button) {
          button.hidden = !hasMultipleImages;
          button.disabled = !hasMultipleImages;
        }
      });
    };

    const closeNewsModal = () => {
      modal.hidden = true;
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("gallery-modal-is-open");
      activeImages = [];

      if (previousFocus && typeof previousFocus.focus === "function") {
        previousFocus.focus();
      }
    };

    const openNewsModal = (trigger) => {
      const post = trigger.closest(".news-post-card");
      const group = trigger.dataset.newsLightboxGroup;
      const triggers = Array.from((post || document).querySelectorAll("[data-news-lightbox-src]")).filter((item) => (
        group
          ? item.dataset.newsLightboxGroup === group
          : item === trigger || item.dataset.newsLightboxSrc === trigger.dataset.newsLightboxSrc
      ));

      activeImages = (triggers.length ? triggers : [trigger]).map((item) => ({
        src: item.dataset.newsLightboxSrc,
        alt: item.dataset.newsLightboxAlt,
        caption: item.dataset.newsLightboxCaption || item.dataset.newsLightboxTitle
      }));

      previousFocus = document.activeElement;


      updateNewsImage(Number.parseInt(trigger.dataset.newsLightboxIndex, 10) || 0);
      modal.hidden = false;
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("gallery-modal-is-open");

      if (closeButton) {
        closeButton.focus();
      }
    };

    document.addEventListener("click", (event) => {
      if (!event.target.matches(".news-lightbox-image")) {
        return;
      }

      const trigger = event.target.closest("[data-news-lightbox-src]");
      if (!trigger) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      openNewsModal(trigger);
    });

    if (previousButton) {
      previousButton.addEventListener("click", (event) => {
        event.preventDefault();
        updateNewsImage(activeIndex - 1);
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", (event) => {
        event.preventDefault();
        updateNewsImage(activeIndex + 1);
      });
    }

    modal.querySelectorAll("[data-gallery-close]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        closeNewsModal();
      });
    });

    modal.addEventListener("click", (event) => {
      if (!modalPanel.contains(event.target)) {
        closeNewsModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (modal.hidden) {
        return;
      }

      if (event.key === "Escape") {
        closeNewsModal();
      }

      if (event.key === "ArrowLeft" && activeImages.length > 1) {
        updateNewsImage(activeIndex - 1);
      }

      if (event.key === "ArrowRight" && activeImages.length > 1) {
        updateNewsImage(activeIndex + 1);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeGalleryLightbox);
    document.addEventListener("DOMContentLoaded", initializeNewsLightbox);
  } else {
    initializeGalleryLightbox();
    initializeNewsLightbox();
  }
})();
