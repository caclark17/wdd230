const hamburgerBtn = document.getElementById("#hamburgerBtn");
const primaryNav = document.getElementsByClassName(".primaryNav");

hamburgerBtn.addEventListener("click", () =>
{primaryNav.classList.toggle("responsive")}, false);