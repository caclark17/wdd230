const lastvisit = localStorage.getItem('#lastvisit');

const factor = 1000 * 60 * 60 * 24;

let daysbetween = Date.now() - lastvisit;


let numberOfDays = daysbetween / factor;
console.log(numberOfDays);

localStorage.setItem('#lastvisit', Date.now());
