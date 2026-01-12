document.getElementById("mobileBtn").onclick = () => {
  localStorage.setItem("device", "mobile");
  localStorage.setItem("theme", "default");
  window.location.href = "home/index.html";
};

document.getElementById("pcBtn").onclick = () => {
  localStorage.setItem("device", "pc");
  localStorage.setItem("theme", "default");
  window.location.href = "home/index.html";
};
