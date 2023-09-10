/*==================== First Slider Start  ====================*/

let swiper = new Swiper(".slider-1", {
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
    900: {
      slidesPerView: 2.6,
    },
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

/*==================== First Slider End  ====================*/

/*==================== Second Slider Start  ====================*/

let scSwiper = new Swiper(".slider-2", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

/*==================== Second Slider End  ====================*/

/*==================== Third Slider Start  ====================*/

let thSwiper = new Swiper(".slider-3", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".mb-next",
    prevEl: ".mb-prev",
  },
});

/*==================== Fourth Slider End  ====================*/

let frSwiper = new Swiper(".slider-4", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

/*==================== Fourth Slider End  ====================*/

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

/*==================== Scroll Reveal Animation Start ====================*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

sr.reveal(
  `.landing-tx, .help-center-form, .first-slider, .about-us-item, .journey-sc-slider, .ds-title, .gallery-card-big, .testimonials-title, .partner-title, .footer-social, .copyright`,
  {
    origin: "top",
    interval: 100,
  }
);

sr.reveal(
  `.about-title, .journey-fs-img, .ds-carousel, .gallery-collection-content, .card-1, .footer-form-tx`,
  {
    origin: "left",
  }
);

sr.reveal(
  `.about-text, .journey-sc-img, .journey-content, .card-2, .partner-item, .footer-inputs`,
  {
    origin: "right",
    interval: 100,
  }
);

/*==================== Scroll Reveal Animation End ====================*/
