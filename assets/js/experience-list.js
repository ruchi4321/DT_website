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

// ==================== Load More Start ===============================
let loadMoreBtn = document.querySelector(".loadmore");
let currentItem = 9;
loadMoreBtn.addEventListener("click", function () {
  let containers = [...document.querySelectorAll(".search-card")];

  for (let i = currentItem; i < currentItem + 2; i++) {
    containers[i]?.setAttribute("style", "display: inline-block;");
  }

  currentItem += 2;

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
    let div = ` <div class="search-card">
    <div class="search-default">
    <span class="search-coutry-name">${el.title}</span>
        <div class="search-content">
        <div class="search-coutry-destination">
          <span>Destination:</span>
          <div><p>${el.destination} </p></div>
        </div>
          <div class="activities">
            <span>Activities:</span>
            <div><p>${el.activities} </p></div>
          </div>
          <div class="card-description">
          <div class="time-zone">
            <span class="time-label">Time:</span>
            <p class="time-value">${el.time}</p>
          </div>
          <a href="${el.url}" class="learn__more-link">LEARN MORE</a>
          </div>
        </div>
      </div>
      <div class="hover-search">
        <span>${el.description}</span>
        <a href="#">Experience this</a>
        <img class="close-button" src="./assets/images/close.svg" alt="">
      </div>
    </div>`;

    searchCardWrapp.insertAdjacentHTML("beforeend", div);

    if (array.length > 3) {
      loadMoreBtn.setAttribute("style", "display: block;");
    } else {
      loadMoreBtn.setAttribute("style", "display: none;");
    }
  });

  // Close Button Hover Search
  const handleCardsHover = () => {
    const toursCards = document.querySelectorAll(".search-card");

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
}

// Close Button Hover Search End

// Function for loading initial data
function loadInitialData() {
  fetch("assets/data/experience-card.json")
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

const form = document.getElementById("search");
let initialElements = [];

// Function for loading initial data
function loadInitialData() {
  fetch("assets/data/experience-card.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (elements) {
      initialElements = elements;
    })
    .catch((err) => console.error(err));
}

// Call loadInitialData for initial loading
loadInitialData();

(function () {
  let initialElements = []; // Keep the original list of items
  let availableActivities = []; // Store available activities

  // Load data once during initialization
  fetch("assets/data/experience-card.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (elements) {
      initialElements = elements;
      // Extract available activities from the data
      availableActivities = extractAvailableActivities(initialElements);
      // Populate the activities select options
      populateActivitiesSelect(availableActivities);
      displayElements(initialElements);
    })
    .catch((err) => console.error(err));

  // Function to extract available activities from the data
  function extractAvailableActivities(elements) {
    let activities = new Set();
    elements.forEach((element) => {
      activities = new Set([...activities, ...element.availabelActivities]);
    });
    return Array.from(activities);
  }

  // Function to populate the activities select options
  function populateActivitiesSelect(activities) {
    const activitiesSelect = document.querySelector(".activities");
    activitiesSelect.innerHTML = "";
    activities.forEach((activity) => {
      const option = document.createElement("option");
      option.value = activity;
      option.text = activity;
      activitiesSelect.appendChild(option);
    });
  }

  $(".country").on("change", function () {
    updateSelectedCountries();
  });
  $(".datatime").on("change", function () {
    updateSelectedCountries();
  });
  $(".activities").on("change", function () {
    updateSelectedCountries();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let countries = $(".country").val();
    let activities = $(".activities").val();
    let selectedMonths = $(".datatime").val();
    let availabelActivities = $("#state1").val();

    let searchData = {
      country: countries,
      availableMonths: selectedMonths,
      activities: activities,
      availabelActivities: availabelActivities,
    };

    let filteredElements = initialElements.slice();

    if (searchData.country.length > 0) {
      filteredElements = filteredElements.filter(
        (element) =>
          searchData.country.includes(element.country) ||
          searchData.country.includes(element.name)
      );
    }
    console.log(filteredElements);
    if (searchData.availableMonths.length > 0) {
      filteredElements = filteredElements.filter((element) =>
        searchData.availableMonths.some((month) =>
          element.availableMonths.includes(month)
        )
      );
    }
    if (searchData.activities.length > 0) {
      // Filter by selected activities
      filteredElements = filteredElements.filter((element) =>
        searchData.activities.every((activity) =>
          element.availabelActivities.includes(activity)
        )
      );
    }

    displayElements(filteredElements);
  });

  function updateSelectedCountries() {
    let countries = $(".country").val();
    let selectedActivities = $(".activities").val();
    let selectedMonths = $(".datatime").val();

    let searchData = {
      country: countries,
      availableMonths: selectedMonths,
      activities: selectedActivities,
    };
    console.log(searchData);
    let filteredElements = initialElements.slice();

    if (searchData.country.length > 0) {
      filteredElements = filteredElements.filter((element) => {
        if (Array.isArray(element.country)) {
          return element.country.some((country) =>
            searchData.country.includes(country)
          );
        } else {
          return searchData.country.includes(element.country);
        }
      });
    }
    console.log(filteredElements);
    if (searchData.availableMonths.length > 0) {
      filteredElements = filteredElements.filter((element) =>
        searchData.availableMonths.some((month) =>
          element.availableMonths.includes(month)
        )
      );
    }
    if (searchData.activities.length > 0) {
      // Filter by selected activities
      filteredElements = filteredElements.filter((element) =>
        searchData.activities.every((activity) =>
          element.availabelActivities.includes(activity)
        )
      );
    }

    displayElements(filteredElements);
    // Check if no elements are left after filtering
    if (filteredElements.length === 0) {
      // If no elements are found, display "Country not found"
      $(".results").html("<p>Country not found</p>");
      $("#loadMore").css("display", "none");
    } else {
      // If elements are found, clear the "Country not found" message
      $(".results").empty();
    }
  }
})();
