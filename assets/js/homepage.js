function initHelpButtonAndSlider() {
  let helpBtn = document.getElementById("help-btn");
  let helpCenter = document.getElementById("help-center");
  let helpCenterForm = document.querySelector(".help-center-form");
  let closeFormSvg = document.querySelector(".close-form");

  // Add the following line to set the visibility of slider-1 to "visible"
  document.querySelector(".slider-1").style.visibility = "visible";
  helpBtn.style.display = "none";

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
  });

  let firstSlide = slider.slides[0];

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

/*==================== Second Swiper On Landing Page  ====================*/

/*==================== Second Slider Start  ====================*/

let scSwiper = new Swiper(".slider-2", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
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
let expSwiper = new Swiper(".slider-3", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
/*==================== Third Slider Start  ====================*/

let tsSwiper = new Swiper(".slider-5", {
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
/*==================== Testimonials Slider End  ====================*/

/*==================== Scroll Reveal Animation Start ====================*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

sr.reveal(
  `.landing-tx, .first-slider, .about-us-item, .journey-sc-slider, .ds-title, .gallery-card-big, .testimonials-title, .partner-title, .footer-social, .copyright`,
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

/*==================== VIDEO PLAY  ====================*/

const videoElement = document.getElementById("background-video");
const playBtn = document.querySelector(".landing-tx");

function toggleVideoPlayback() {
  if (videoElement.paused || videoElement.ended) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
}

videoElement.addEventListener("click", toggleVideoPlayback);

playBtn.addEventListener("click", toggleVideoPlayback);
