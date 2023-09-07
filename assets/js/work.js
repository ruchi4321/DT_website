document.addEventListener("DOMContentLoaded", function () {
  var readMoreBtns = document.querySelectorAll(".read-more-btn");

  readMoreBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var contentBlock = btn.parentNode.querySelector(
        ".daily-fs-content-text, .daily-sc-content-text"
      );
      contentBlock.classList.toggle("active");

      if (contentBlock.classList.contains("active")) {
        btn.textContent = "Show less";
      } else {
        btn.textContent = "Read more";
      }
    });
  });
});

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
ScrollReveal().reveal(".your-trip-text", {
  delay: 1200,
  distance: "50px",
  origin: "bottom",
  duration: 1000,
});
ScrollReveal().reveal(".daily", {
  delay: 400,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".number", {
  delay: 400,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".daily-fs", {
  delay: 500,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".experience-title", {
  delay: 100,
  distance: "50px",
  origin: "top",
  duration: 1000,
});
ScrollReveal().reveal(".daily-sc", {
  delay: 500,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".daily-fs-images", {
  delay: 500,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".daily-sc-images", {
  delay: 500,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".daily-fs-content", {
  delay: 800,
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".daily-sc-content", {
  delay: 800,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".partner-title", {
  delay: 300,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".text-center", {
  delay: 400,
  distance: "50px",
  origin: "top",
  duration: 1000,
});
ScrollReveal().reveal(".partner-item-1", {
  delay: 500,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".partner-item-2", {
  delay: 700,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".partner-item-3", {
  delay: 900,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".partner-item-4", {
  delay: 1000,
  distance: "50px",
  origin: "right",
  duration: 1000,
});
