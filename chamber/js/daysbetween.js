const lastvisit = localStorage.getItem('lastvisit');

const factor = 1000 * 60 * 60 * 24;

let daysbetween = Date.now() - lastvisit;
console.log(daysbetween);

let numberOfDays = daysbetween / factor;

localStorage.setItem('lastvisit', Date.now());