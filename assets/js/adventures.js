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
    let div = ` <div class="search-card">
    <div class="search-default">
    <span class="search-coutry-name">${el.country}</span>
        <div class="search-content">
          <div class="d-flex">
            <span>Activities:</span>
            <p>${el.activities}</p>
          </div>
          <div class="card-description">
          <div class="time-zone">
            <span class="time-label">Time:</span>
            <p class="time-value">${el.time}</p>
          </div>
            <a href="${el.url}" class="learn-more">LEARN MORE</a>
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

const form = document.getElementById("search");
let initialElements = []; // Зберігати початковий список елементів

// Function for loading initial data
function loadInitialData() {
  fetch("assets/data/coutries-card.json")
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
  // Завантажити дані один раз під час ініціалізації
  fetch("assets/data/coutries-card.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (elements) {
      initialElements = elements;
      displayElements(initialElements); // Додайте цей виклик, щоб відобразити елементи при завантаженні сторінки
    })
    .catch((err) => console.error(err));

  // Додайте слухача подій на зміни вибору країн
  $(".country").on("change", function () {
    updateSelectedCountries();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let countries = $(".country").val();
    let activities = $(".activities").val();

    let searchData = {
      country: countries,
      date: $(".datatime").val(),
      activities: $(".activities").val(),
    };

    let filteredElements = initialElements.slice(); // Клонувати початковий список елементів

    // Застосовувати фільтри, якщо вони не пусті
    if (searchData.country.length > 0) {
      filteredElements = filteredElements.filter((element) =>
        searchData.country.includes(element.country)
      );
    }
    if (searchData.date.length > 0) {
      filteredElements = filteredElements.filter((element) =>
        searchData.date.includes(element.month)
      );
    }
    if (searchData.activities.length > 0) {
      filteredElements = filteredElements.filter((element) =>
        searchData.activities.includes(element.activities)
      );
    }
    displayElements(filteredElements);
  });

  // Функція для оновлення списку вибраних країн і запуску пошуку
  function updateSelectedCountries() {
    let countries = $(".country").val();
    let activities = $(".activities").val();

    let searchData = {
      country: countries,
      date: $(".datatime").val(),
      activities: $(".activities").val(),
    };

    let filteredElements = initialElements.slice(); // Клонувати початковий список елементів

    // Застосовувати фільтри, якщо вони не пусті
    if (searchData.country.length > 0) {
      filteredElements = filteredElements.filter((element) =>
        searchData.country.includes(element.country)
      );
    }
    if (searchData.date.length > 0) {
      filteredElements = filteredElements.filter((element) =>
        searchData.date.includes(element.month)
      );
    }
    if (searchData.activities.length > 0) {
      filteredElements = filteredElements.filter((element) =>
        searchData.activities.includes(element.activities)
      );
    }
    displayElements(filteredElements);
  }
})();
