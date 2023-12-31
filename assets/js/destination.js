// ====================== Help Center Start =======================
function initHelpButtonAndSlider() {
  let helpBtn = document.getElementById("help-btn");
  let helpCenter = document.getElementById("help-center");
  let helpCenterForm = document.querySelector(".help-center-form");
  let closeFormSvg = document.querySelector(".close-form");

  helpBtn.style.display = "none";
  document.querySelector(".slider-1").style.visibility = "visible";

  let slider = new Swiper(".slider-1", {
    slidesPerView: 2.6,
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      300: {
        spaceBetween: 10,
        slidesPerView: 1.4,
      },
      400: {
        slidesPerView: 1.4,
        spaceBetween: 40,
      },
      700: {
        slidesPerView: 2.6,
      },
    },
    navigation: {
      nextEl: ".button-next-1",
      prevEl: ".button-prev-1",
    },
    on: {
      slideChange: function () {
        const activeSlide = this.slides[this.activeIndex];
        if (activeSlide) {
          const imageUrl = activeSlide.querySelector("img").src;
          document.querySelector(
            ".home"
          ).style.backgroundImage = `url(${imageUrl})`;
        }
      },
    },
  });

  let firstSlide = slider.slides[0];

  let homeTitle = document.querySelector(".home-title");

  ScrollReveal().reveal(homeTitle, {
    delay: 400,
    distance: "50px",
    origin: "left",
    duration: 1000,
  });

  firstSlide.addEventListener("load", function () {
    helpBtn.style.display = "block";
  });

  closeFormSvg.addEventListener("click", function () {
    helpCenter.classList.remove("show");
    helpCenterForm.classList.remove("show-top");
  });

  helpBtn.addEventListener("click", function () {
    helpCenter.classList.toggle("show");
    helpCenterForm.classList.toggle("show-top");
  });

  helpBtn.style.display = "none";

  ScrollReveal().reveal(".first-slider", {
    delay: 400,
    distance: "50px",
    origin: "right",
    duration: 1000,
  });

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

window.addEventListener("load", initHelpButtonAndSlider);

// ====================== Help Center End =======================

/*==================== Second Swiper On Landing Page  ====================*/

let secondLandSwiper = new Swiper(".slider-landing", {
  slidesPerView: 5,
  spaceBetween: 50,
  navigation: {
    nextEl: ".button-next-ln",
    prevEl: ".button-prev-ln",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

/* ==================== Inspired =====================  */

let secondSwiper = new Swiper(".slider-2", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".button-next-test",
    prevEl: ".button-prev-test",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    renderCustom: function (swiper, currentClass, totalClass) {
      return `0${currentClass}/0${totalClass}`;
    },
  },
});

/* ======================  Get Inspired =============== */

/*==================== Destination Slider Start  ====================*/

let thSwiper = new Swiper(".slider-3", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".journey-arrow-right",
    prevEl: ".journey-arrow-left",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});

/*==================== DestinationSlider End ====================*/

/*==================== Testimonials Start  ====================*/

const frSwiper = new Swiper(".testimonials-swiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    300: {
      spaceBetween: 10,
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1185: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".testimonials-arrow-right",
    prevEl: ".testimonials-arrow-left",
  },
});

/*==================== Testimonials End  ====================*/

// Close Button Hover Search
const handleCardsHover = () => {
  const toursCards = document.querySelectorAll(".tours-card");

  toursCards.forEach((card) => {
    const hoverEl = card.querySelector(".hover-search");
    const defaultEl = card.querySelector(".search-default");
    const closeBtn = card.querySelector(".close-button");
    const cardDescription = card.querySelector(".card-description");

    card.addEventListener("mouseenter", () => {
      defaultEl.style.opacity = 0;
      defaultEl.style.zIndex = 0;
      hoverEl.style.opacity = 1;
      hoverEl.style.zIndex = 10;
      cardDescription.style.display = "none";
    });

    card.addEventListener("mouseleave", () => {
      defaultEl.style.opacity = 1;
      defaultEl.style.zIndex = 30;
      hoverEl.style.opacity = 0;
      hoverEl.style.zIndex = 0;
      cardDescription.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      defaultEl.style.opacity = 1;
      defaultEl.style.zIndex = 30;
      hoverEl.style.opacity = 0;
      hoverEl.style.zIndex = 0;
      cardDescription.style.display = "block";
    });
  });
};
handleCardsHover();

// ScrollReveal

ScrollReveal().reveal(".location-map-img", {
  delay: 400,
  distance: "50px",
  origin: "right",
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
ScrollReveal().reveal(".map-item", {
  delay: 300,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".date-wrapp", {
  delay: 800,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".map-desc", {
  delay: 1000,
  distance: "50px",
  origin: "left",
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
ScrollReveal().reveal(".ds-carousel", {
  delay: 500,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
