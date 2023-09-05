// ==================== Load More Start ===============================
let loadMoreBtn = document.querySelector(".loadmore");
let currentItem = 9;
loadMoreBtn.addEventListener("click", function () {
  let containers = [...document.querySelectorAll(".search-card")];

  for (let i = currentItem; i < currentItem + 2; i++) {
    containers[i]?.setAttribute("style", "display: inline-block;");
  }

  currentItem += 2;

  // Перевіряємо, чи потрібно приховати кнопку "Load More"
  if (currentItem >= containers.length) {
    loadMoreBtn.setAttribute("style", "display: none;");
  } else {
    loadMoreBtn.setAttribute("style", "display: block;");
  }
});
// =================== Load More End ===================================

// Function for displaying elements
function displayElements(elements) {
  const searchCardWrapp = document.querySelector(".search-card-wrapp");
  searchCardWrapp.innerHTML = "";

  elements.forEach((el, index, array) => {
    let div = ` <div class="search-card ">
      <div class="search-default">
        <span class="search-coutry-name">${el.country}</span>
        <div class="search-content">
          <div class="d-flex">
            <span>Activities:</span>
            <p>${el.activities}</p>
          </div>
          <div class="d-flex">
            <span>Time:</span>
            <p>${el.time}</p>
          </div>
        </div>
      </div>
      <div class="hover-search">
        <span>${el.description}</span>
        <a href="#">Experience this</a>
        <a href="" class="contact-us-btn">LEARN MORE</a>
      </div>
    </div>`;

    searchCardWrapp.insertAdjacentHTML("beforeend", div);

    if (array.length > 3) {
      loadMoreBtn.setAttribute("style", "display: block;");
    } else {
      loadMoreBtn.setAttribute("style", "display: none;");
    }
  });
}

// Function for loading initial data
function loadInitialData() {
  fetch("assets/data/coutries-card.json")
    .then(function (response) {
      // response.json() returns a promise, use the same .then syntax to work with the results
      response.json().then(async function (elements) {
        displayElements(elements);
      });
    })
    .catch((err) => console.error(err));
}

// Call loadInitialData for initial loading
loadInitialData();

// ======================= Search Start =========================
const form = document.getElementById("search");

(function () {
  form.addEventListener("submit", function (e) {
    // Prevent default behavior
    e.preventDefault();

    // Create new FormData object
    let countries = $(".country").val();
    let activities = $(".activities").val();

    let searchData = {
      country: countries,
      date: $(".datatime").val(),
      activities: $(".activities").val(),
    };

    fetch("assets/data/coutries-card.json")
      .then(function (response) {
        // response.json() returns a promise, use the same .then syntax to work with the results
        response.json().then(async function (elements) {
          let filteredElements = elements;

          // Apply filters if they are not empty
          if (searchData.country.length > 0) {
            filteredElements = filteredElements.filter((element) =>
              searchData.country.includes(element.country)
            );
          }
          if (searchData.date.length > 0) {
            filteredElements = filteredElements.filter((element) =>
              searchData.date.includes(element.time)
            );
          }
          if (searchData.activities.length > 0) {
            filteredElements = filteredElements.filter((element) =>
              searchData.activities.includes(element.activities)
            );
          }

          displayElements(filteredElements);
        });
      })
      .catch((err) => console.error(err));
  });
})();
// ======================  Search End ========================
