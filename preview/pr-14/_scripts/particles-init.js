// initialize particles.js when loaded
function initParticles() {
  if (typeof particlesJS === "undefined") {
    setTimeout(initParticles, 100);
    return;
  }

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 900,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: {
          enable: true,
          speed: 0.8,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.5,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.25,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 180,
          line_linked: {
            opacity: 0.6,
          },
        },
        push: {
          particles_nb: 3,
        },
      },
    },
    retina_detect: true,
  });
}

document.addEventListener("DOMContentLoaded", initParticles);
