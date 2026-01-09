document.getElementById("mobileBtn").onclick = () => {
  localStorage.setItem("device", "mobile");
  window.location.href = "home.html";
};

document.getElementById("pcBtn").onclick = () => {
  localStorage.setItem("device", "pc");
  window.location.href = "home.html";
};
