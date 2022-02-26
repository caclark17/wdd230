let d = new Date();

document.getElementById("date").value = d.toDateString();

let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
document.getElementById("time").value = h + ":" + m + ":" + s;