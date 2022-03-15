let day= new Date().getDay();

if (day == 1 || day == 2) {
    document.querySelector(".banner").classList.remove("hide");
}
else {
    document.querySelector(".banner").classList.add("hide");
}
