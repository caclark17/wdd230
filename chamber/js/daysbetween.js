const lastvisit = localStorage.getItem('#lastvisit');

const factor = 1000 * 60 * 60 * 24;

let daysbetween = Date.now() - lastvisit;


let numberOfDays = daysbetween / factor;


localStorage.setItem('#lastvisit', Date.now());

document.getElementById('#lastvisit').innerHTML = `${numberOfDays.toFixed(2)} since your last visit`;

