const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');
const jsonObject ='';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        console.table(jsonObject); //temporary checking for valid response and data parsing
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthDate = document.createElement('h3');
    let birthPlace = document.createElement('h3');
    let death = document.createElement('p')
    let numofchildren = document.createElement('p')

    //change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    death.textContent = `Date of Death: ${prophet.death}`
    numofchildren.textContent = `Number of children: ${prophet.numofchildren}`;
    

    //Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}, ${prophet.order} Latter-Day Prophet`);
    portrait.setAttribute('loading', 'lazy');

    // Add/apend the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(death);
    card.appendChild(numofchildren);

    // Add/apend the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);

}





    








