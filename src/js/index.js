function menuOpen() {
  document.getElementById("menu").style.display = "block";
  const closingFirst = document.querySelectorAll(".js-closing-first");
  closingFirst.forEach((element) => (element.style.display = "none"));
}

function menuClose() {
  document.getElementById("menu").style.display = "none";
  const closingFirst = document.querySelectorAll(".js-closing-first");
  closingFirst.forEach((element) => (element.style.display = "block"));
}