// Load saved theme + device on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "default";
  const savedDevice = localStorage.getItem("device") || "pc";

  applyTheme(savedTheme);
  highlightDevice(savedDevice);
  setupGenreButtons();
  setupSearch();
  setupThemePage(); // REQUIRED
});

function setupThemePage() {
  const themePage = document.getElementById("themePage");
  const themeBtn = document.getElementById("themeBtn");
  const backBtn = document.getElementById("backBtn");

  themeBtn.addEventListener("click", () => {
    themePage.style.display = "flex";
  });

  backBtn.addEventListener("click", () => {
    themePage.style.display = "none";
  });

  document.querySelectorAll(".theme-big-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      applyTheme(theme);
    });
  });
}


  // ⭐ NEW FULLSCREEN THEME PAGE SETUP ⭐
  setupThemePage();
});

// Apply theme to body
function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

// Highlight selected device button
function highlightDevice(device) {
  const deviceButtons = document.querySelectorAll(".device-filter button");
  deviceButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.device === device);
  });
}

// Genre button logic
function setupGenreButtons() {
  const genreButtons = document.querySelectorAll(".cat-btn");

  genreButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      genreButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const genre = btn.dataset.category;
      filterGamesByGenre(genre);
    });

    btn.addEventListener("mouseenter", () => btn.classList.add("hover"));
    btn.addEventListener("mouseleave", () => btn.classList.remove("hover"));
  });
}

// Search bar logic
function setupSearch() {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const games = document.querySelectorAll(".game-card");

    games.forEach(game => {
      const title = game.querySelector("h3").textContent.toLowerCase();
      game.style.display = title.includes(query) ? "block" : "none";
    });
  });
}

// Filter games by genre
function filterGamesByGenre(genre) {
  const games = document.querySelectorAll(".game-card");

  games.forEach(game => {
    const gameGenre = game.dataset.genres;
    game.style.display = genre === "all" || gameGenre === genre
      ? "block"
      : "none";
  });
}

// ⭐⭐⭐ FULLSCREEN THEME PAGE LOGIC ⭐⭐⭐
function setupThemePage() {
  const themePage = document.getElementById("themePage");
  const themeBtn = document.getElementById("themeBtn");
  const backBtn = document.getElementById("backBtn");

  // Open fullscreen theme page
  themeBtn.addEventListener("click", () => {
    themePage.style.display = "flex";
  });

  // Close fullscreen theme page
  backBtn.addEventListener("click", () => {
    themePage.style.display = "none";
  });

  // Apply theme when clicking big buttons
  document.querySelectorAll(".theme-big-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      applyTheme(theme);
    });
  });
}
