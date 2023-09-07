//====================== Navbar Close Start ========================

const navItems = document.querySelectorAll(".nav-item");
const navbarContent = document.querySelector(".navbar-collapse");
const navbarImg = document.querySelector(".navbar-img");

navItems.forEach((el) => {
  el.addEventListener("click", function () {
    navbarContent.classList.remove("show");
    navbarImg.classList.remove("active");
  });
});

const navbarToggler = document.querySelector(".navbar-toggler");

navbarImg.addEventListener("click", function () {
  navbarImg.classList.toggle("active");
});

//===================== Navbar Close End ==========================

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
