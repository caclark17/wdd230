const requestURL = 'https://caclark17.github.io/chamber/lesson-10/data.json';
const cards = document.querySelector('cards');
const jsonObject = '';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        console.table(jsonObject);
    })