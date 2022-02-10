document.querySelector("#copyrightyear").textContent = new Date().getFullYear();

const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new
Intl.DateTimeFormat("en-us", {dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;


if (day == 1 || day == 2) {
    document.getElementsByClassName("banner").classList.add("");
}
else {
    document.getElementsByClassName("banner").classList.remove("");
}