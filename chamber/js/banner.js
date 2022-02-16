let day= new Date().getDay();
console.log(day);
if (day == 1 || day == 2) {
    document.querySelector(".banner").classList.remove("hide");
}
else {
    document.querySelector(".banner").classList.add("hide");
}
