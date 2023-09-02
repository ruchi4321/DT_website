// ====================== Help Center Start =======================

let helpBtn = document.getElementById("help-btn");
let helpCenter = document.getElementById("help-center");
let helpCenterForm = document.querySelector(".help-center-form");

helpBtn.addEventListener("click", function () {
  helpCenter.classList.toggle("show");
  helpCenterForm.classList.toggle("show-top");
});

// ====================== Help Center End =======================

/*==================== Second Slider Start  ====================*/

let exploreSwiper = new Swiper(".explore-slider", {
  slidesPerView: 2.6,
  loop: true,
  spaceBetween: 15,
  grabCursor: true,
  navigation: {
    nextEl: ".explore-arrow-right",
    prevEl: ".explore-arrow-left",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3
        },

    500: {
      slidesPerView: 2
    },
    900: {
      slidesPerView: 2.6
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
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3
    },
    450: {
      slidesPerView: 3.5
    },
    900: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  },
});

/*==================== Second Slider End  ====================*/

/*==================== Second Slider Start  ====================*/

let videoSwiper = new Swiper(".video-slider", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 15,
  grabCursor: true,
  navigation: {
    nextEl: ".video-arrow-left",
    prevEl: ".video-arrow-right",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3
    },
    900: {
      slidesPerView: 1
    }
  },
});

/*==================== Second Slider End  ====================*/


/*==================== Fourth Slider End  ====================*/

let frSwiper = new Swiper(".slider-4", {
  slidesPerView: 4,
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
    500 : {
      slidesPerView: 2.5
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 4
    }
  },
});

/*==================== Fourth Slider End  ====================*/

/*==================== More Slider End  ====================*/

let moreSwiper = new Swiper(".more-slider", {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 15,
  grabCursor: true,
  navigation: {
    nextEl: ".more-arrow-left",
    prevEl: ".more-arrow-right",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3
    },
    900: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 2
    }
  }
});

/*==================== More Slider End  ====================*/


/* ======================= Video Play Start =========================== */

let videos = document.querySelectorAll('.video-1');
let ppButtons = document.querySelectorAll(".play-btn");
let mutedS = document.querySelectorAll(".muted");

for(let i = 0; i < videos.length; i++) {
  ppButtons[i].addEventListener("click", function () {
    if (videos[i].paused) {
      videos[i].play();
      ppButtons[i].src = './assets/images/pause-btn.svg'
    } else {
      videos[i].pause();
      ppButtons[i].src = './assets/images/play.svg'
    }
  });
  
  
  
  mutedS[i].addEventListener("click", function () {
    if (videos[i].muted === true) {
      videos[i].muted = false;
      mutedS[i].src = './assets/images/unmute.svg'
    } else {
      videos[i].muted = true;
      mutedS[i].src = './assets/images/muted.svg'
    }
  });


}








/* ======================= Video Play End  =========================== */



let activeVideoSLide = document.querySelector('.swiper-slide.video-slide.swiper-slide-active > video');
let ppbutton = document.querySelector('.swiper-slide.video-slide.swiper-slide-active > .play-btn');


fraction = 0.99;
function checkScroll() {

    
        var video = activeVideoSLide;
        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                ppbutton.src = './assets/images/play.svg'
                video.pause()
            } 

}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

// Ініціалізуємо ScrollReveal
ScrollReveal().reveal('.landing-content', { delay: 400, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.title-section', { delay: 700, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.daily-fs-content', { delay: 700, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.home-timeline-wrapp', { delay: 900, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.mobile-map', { delay: 500, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.map-img', { delay: 500, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.map-item1', { delay: 300, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.map-item2', { delay: 500, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.map-item3', { delay: 700, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.map-item4', { delay: 900, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.map-item5', { delay: 1200, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.map-item6', { delay: 1400, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.date-wrapp', { delay: 800, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.map-desc', { delay: 1000, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.explore-content', { delay: 800, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.explore-slider-wrapp', { delay: 1200, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.experience-title', { delay: 800, distance: '50px', origin: 'top', duration: 1000 });
ScrollReveal().reveal('.daily-fs-images', { delay: 800, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.daily-sc-images', { delay: 800, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.daily-fs-content', { delay: 800, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.daily-sc-content', { delay: 800, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.experience-slider', { delay: 1000, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.ds-carousel ', { delay: 1000, distance: '50px', origin: 'left', duration: 1000 });




// Інші налаштування ScrollReveal можна додати тут