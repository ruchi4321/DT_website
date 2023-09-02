//===================== Contact Us Start ==========================

document.querySelectorAll(".tab-2").forEach((el) => {
  el.addEventListener("click", function () {
    document.querySelector(".content-one").classList.remove("active-tab");
    document.querySelector(".content-2").classList.add("active-tab");
  });
});

document.querySelector(".orrange-btn").addEventListener("click", function () {
  document.querySelector(".content-one").classList.remove("active-tab");
  document.querySelector(".content-2").classList.add("active-tab");
});

document.querySelector(".back").addEventListener("click", function () {
  document.querySelector(".content-one").classList.add("active-tab");
  document.querySelector(".content-2").classList.remove("active-tab");
});

//===================== Contact Us End ==========================
