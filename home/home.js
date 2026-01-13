// Load saved theme + device on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "default";
  const savedDevice = localStorage.getItem("device") || "pc";

  applyTheme(savedTheme);
  highlightDevice(savedDevice);
  setupGenreButtons();
  setupSearch();
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
  const genreButtons = document.querySelectorAll(".genre-btn");

  genreButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      genreButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const genre = btn.dataset.genre;
      filterGamesByGenre(genre);
    });

    // Hover animation
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
    const gameGenres = game.dataset.genres.split(",");
    game.style.display = genre === "all" || gameGenres.includes(genre)
      ? "block"
      : "none";
  });
}
