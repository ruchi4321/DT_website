// ====================== Help Center Start =======================

function initHelpButton() {
  let helpBtn = document.getElementById("help-btn");
  let helpCenter = document.getElementById("help-center");
  let helpCenterForm = document.querySelector(".help-center-form");
  let closeFormSvg = document.querySelector(".close-form");

  closeFormSvg.addEventListener("click", function () {
    helpCenter.classList.remove("show");
    helpCenterForm.classList.remove("show-top");
  });

  helpBtn.addEventListener("click", function () {
    helpCenter.classList.toggle("show");
    helpCenterForm.classList.toggle("show-top");
  });

  helpBtn.style.display = "none";

  window.addEventListener("scroll", () => {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    const threshold = 600;

    if (scrollPosition > threshold) {
      helpBtn.style.display = "block";
    } else {
      helpBtn.style.display = "none";
    }
  });
}

window.addEventListener("load", initHelpButton);
// ====================== Help Center End =======================

/*==================== Second Slider Start  ====================*/

let exploreSwiper = new Swiper(".explore-slider", {
  slidesPerView: 2.6,
  loop: true,
  spaceBetween: 15,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".explore-arrow-right",
    prevEl: ".explore-arrow-left",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3,
    },

    500: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3.2,
    },
    990: {
      slidesPerView: 4.5,
    },
    1200: {
      slidesPerView: 2.6,
    },
  },
});

/*==================== Second Slider End  ====================*/

/*==================== Second Slider Start  ====================*/

let scSwiper = new Swiper(".slider-2", {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 15,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".button-next-1",
    prevEl: ".button-prev-1",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    990: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

/*==================== Second Slider End  ====================*/

/*==================== Second Slider Start  ====================*/

let videoSwiper = new Swiper(".video-slider", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 15,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 1,
    },
  },
});

/*==================== Second Slider End  ====================*/

/*==================== Fourth Slider End  ====================*/

let frSwiper = new Swiper(".slider-4", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".journey-arrow-right",
    prevEl: ".journey-arrow-left",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2.5,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 3,
    },
  },
});

/*==================== Fourth Slider End  ====================*/

/*==================== More Slider End  ====================*/

let moreSwiper = new Swiper(".more-slider", {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 15,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".more-arrow-right",
    prevEl: ".more-arrow-left",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3,
    },
    900: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2,
    },
  },
});

/*==================== More Slider End  ====================*/

// Ініціалізуємо ScrollReveal
ScrollReveal().reveal(".landing-content", {
  delay: 400,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".title-section", {
  delay: 700,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".daily-fs-content", {
  delay: 700,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".home-timeline-wrapp", {
  delay: 900,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".mobile-map", {
  delay: 500,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".map-img", {
  delay: 500,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".map-item1", {
  delay: 300,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".map-item2", {
  delay: 500,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".map-item3", {
  delay: 700,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".map-item4", {
  delay: 900,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".map-item5", {
  delay: 1200,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".map-item6", {
  delay: 1400,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".date-wrapp", {
  delay: 800,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".map-desc", {
  delay: 1000,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".explore-content", {
  delay: 800,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".explore-slider-wrapp", {
  delay: 1200,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".experience-title", {
  delay: 800,
  distance: "50px",
  origin: "top",
  duration: 1000,
});
ScrollReveal().reveal(".daily-fs-images", {
  delay: 800,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".daily-sc-images", {
  delay: 800,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".daily-fs-content", {
  delay: 800,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".daily-sc-content", {
  delay: 800,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".experience-slider", {
  delay: 1000,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".ds-carousel ", {
  delay: 1000,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
