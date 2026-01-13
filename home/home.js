// Load saved theme + device on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "default";
  const savedDevice = localStorage.getItem("device") || "pc";

  applyTheme(savedTheme);
  highlightDevice(savedDevice);
  setupGenreButtons();
  setupSearch();
  setupThemeModal();
  setupThemeOptions();
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

// Genre button logic (FIXED to match your HTML)
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

// Filter games by genre (FIXED to match your array)
function filterGamesByGenre(genre) {
  const games = document.querySelectorAll(".game-card");

  games.forEach(game => {
    const gameGenre = game.dataset.genres;
    game.style.display = genre === "all" || gameGenre === genre
      ? "block"
      : "none";
  });
}

// THEME MODAL LOGIC (NEW)
function setupThemeModal() {
  const themeBtn = document.getElementById("themeBtn");
  const themeModal = document.getElementById("themeModal");
  const closeTheme = document.getElementById("closeTheme");

  themeBtn.addEventListener("click", () => {
    themeModal.style.display = "block";
  });

  closeTheme.addEventListener("click", () => {
    themeModal.style.display = "none";
  });

  // Close when clicking outside modal
  window.addEventListener("click", (e) => {
    if (e.target === themeModal) {
      themeModal.style.display = "none";
    }
  });
}

// THEME OPTION BUTTONS (NEW)
function setupThemeOptions() {
  const themeButtons = document.querySelectorAll(".theme-option");

  themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      applyTheme(theme);
    });
  });
}
