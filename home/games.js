// Your game list
const games = [
  {
    name: "Drive Mad",
    img: "../images/Drive-Mad.jpeg",
    link: "../SingleFileGames/Drive-Mad.html",
    category: "racing",
    mobileSupport: true
  },
  {
    name: "Five Nights At Freddy's",
    img: "../images/FNAF1.jpeg",
    link: "../SingleFileGames/FNAF.html",
    category: "horror",
    mobileSupport: true
  },
  {
    name: "Monster Tracks",
    img: "../images/monster-tracks.jpeg",
    link: "../SingleFileGames/Monster-Tracks.html",
    category: "racing",
    mobileSupport: true
  },


  
  {
    name: "Bloons",
    img: "../images/Bloons.jpeg",
    link: "../SingleFileGames/Bloons.html",
    category: "strategy",
    mobileSupport: true
  },


  true
  },


  
  {
    name: "Bloons 2",
    img: "../images/Bloons2.jpeg",
    link: "../SingleFileGames/Bloons2.html",
    category: "strategy",
    mobileSupport: true
  },


  


  
  {
    name: "Stickman Hook",
    img: "../images/Stickman-Hook.jpeg",
    link: "../SingleFileGames/Stickman-Hook.html",
    category: "strategy",
    mobileSupport: true
  },

  
];

// Render all games into the grid
function renderGames() {
  const grid = document.getElementById("gamesGrid");
  const savedDevice = localStorage.getItem("device") || "pc";

  grid.innerHTML = ""; // clear old content

  games.forEach(game => {
    // Device filtering
    if (savedDevice === "mobile" && !game.mobileSupport) return;

    const card = document.createElement("div");
    card.classList.add("game-card");
    card.dataset.genres = game.category;

    // Card content (NO play button)
    card.innerHTML = `
      <img src="${game.img}" alt="${game.name}" class="game-img">
      <h3>${game.name}</h3>
    `;

    // Make entire card clickable
    card.addEventListener("click", () => {
      window.location.href = game.link;
    });

    grid.appendChild(card);
  });
}

// Run after DOM loads
document.addEventListener("DOMContentLoaded", renderGames);
