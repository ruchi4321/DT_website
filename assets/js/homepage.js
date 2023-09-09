/*==================== First Slider Start  ====================*/
const windowWidth = window.innerWidth;
let swiper;

if (windowWidth >= 1200) {
  function initHelpButtonAndSlider() {
    let helpBtn = document.getElementById("help-btn");
    let helpCenter = document.getElementById("help-center");
    let helpCenterForm = document.querySelector(".help-center-form");
    let closeFormSvg = document.querySelector(".close-form");

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

    let homeTitle = document.querySelector(".landing-tx");

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

    ScrollReveal().reveal(homeTitle, {
      delay: 400,
      distance: "50px",
      origin: "left",
      duration: 1000,
    });

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

    // Змінюємо стиль на видимий після завантаження DOM
    document.querySelector(".slider-1").style.visibility = "visible";
  }

  window.addEventListener("load", initHelpButtonAndSlider);
} else {
  function initHelpButtonAndSlider() {
    let helpBtn = document.getElementById("help-btn");
    let helpCenter = document.getElementById("help-center");
    let helpCenterForm = document.querySelector(".help-center-form");
    let closeFormSvg = document.querySelector(".close-form");

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
              ".landing"
            ).style.backgroundImage = `url(${imageUrl})`;
          }
        },
      },
    });

    let firstSlide = slider.slides[0];

    let homeTitle = document.querySelector(".landing-tx");

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

    ScrollReveal().reveal(homeTitle, {
      delay: 400,
      distance: "50px",
      origin: "left",
      duration: 1000,
    });

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

    // Змінюємо стиль на видимий після завантаження DOM
    document.querySelector(".slider-1").style.visibility = "visible";
  }

  document.addEventListener("DOMContentLoaded", function () {
    initHelpButtonAndSlider();
  });
}

/*==================== First Slider End  ====================*/

/*==================== Second Slider Start  ====================*/

let scSwiper = new Swiper(".slider-2", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
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

/*==================== Third Slider Start  ====================*/

let thSwiper = new Swiper(".slider-3", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

/*==================== Fourth Slider End  ====================*/

let frSwiper = new Swiper(".slider-4", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
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

/* ======================= Video Lazy Loading Start =========================== */

window.onload = function () {
  setTimeout(() => {
    var video = document.querySelector(".active-video");
    if (video.played) {
      function playVideo(videoSource, type) {
        var videoElm = document.querySelector(".active-video");
        var videoSourceElm = document.getElementById("video-sr");
        if (videoElm.paused) {
          videoElm.pause();
        } else {
          videoSourceElm.src = "./assets/videos/desire_trip_video_2.mp4";
          videoSourceElm.type = "video/mp4";

          videoElm.load();
          videoElm.play();
        }
      }

      playVideo();
    }
  }, 7000);
};

/* ======================= Video Lazy Loading End  =========================== */

/* ======================= Video Play Start =========================== */
//./assets/videos/desire_trip_video_2.mp4

var el = document.querySelector(".active-video");
var playButton = document.getElementById("play-btn");
var muteButton = document.getElementById("muted");

function checkScreenSize() {
  if (window.innerWidth <= 992) {
    el.style.display = "none";
    playButton.style.display = "block";
    playButton.src = "./assets/images/play.svg";
    muteButton.style.display = "block";
  } else {
    el.style.display = "block";
  }
}

checkScreenSize();

playButton.addEventListener("click", function () {
  if (el.paused) {
    el.play();
    playButton.src = "./assets/images/pause-btn.svg";
  } else {
    el.pause();
    playButton.src = "./assets/images/play.svg";
  }
});

muteButton.addEventListener("click", function () {
  if (el.muted === true) {
    el.muted = false;
    muteButton.src = "./assets/images/unmute.svg";
  } else {
    el.muted = true;
    muteButton.src = "./assets/images/muted.svg";
  }
});

fraction = 0.99;
function checkScroll() {
  var video = el;
  var x = video.offsetLeft,
    y = video.offsetTop,
    w = video.offsetWidth,
    h = video.offsetHeight,
    r = x + w,
    b = y + h,
    visibleX,
    visibleY,
    visible;

  visibleX = Math.max(
    0,
    Math.min(
      w,
      window.pageXOffset + window.innerWidth - x,
      r - window.pageXOffset
    )
  );
  visibleY = Math.max(
    0,
    Math.min(
      h,
      window.pageYOffset + window.innerHeight - y,
      b - window.pageYOffset
    )
  );

  visible = (visibleX * visibleY) / (w * h);

  if (visible > fraction) {
    playButton.style.display = "block";
    el.pause();
  }
}

window.addEventListener("resize", checkScreenSize);
window.addEventListener("scroll", checkScroll, false);
