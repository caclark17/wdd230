const requestURL = 'https://caclark17.github.io/wdd230/templeProject/data.json';
const cards = document.querySelector('.cards');
const jsonObject = '';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        console.table(jsonObject);
        temples.forEach(displayTemples);
    });

    function displayTemples(temples) {
        let card = document.createElement('section');
        let photo = document.createElement('img');
        let templeName = document.createElement('h2');
        let address = document.createElement('p');
        let phoneNum = document.createElement('p');
        let services = document.createElement('p');
        let history = document.createElement('p');
        let ordinanceSchedule = document.createElement('p');
        let sessionSchedule = document.createElement('p');
        let templeClosureSchedule = document.createElement('p');
        let thumbsUp = document.createElement('img');


        templeName.textContent = `${temples.location}`;
        address.textContent = `Address: ${temples.address} ${temples.address2}`;
        phoneNum.textContent = `Phone Number: ${temples.phone}`;
        services.textContent = `Services: ${temples.services}`;
        history.textContent = `History: ${temples.history}`;
        ordinanceSchedule.textContent = `Ordinance Schedule: ${temples.ordinanceSchedule}`;
        sessionSchedule.textContent = `Session Schedule: ${temples.sessionSchedule}`;
        templeClosureSchedule.textContent = `Closure Schedule: ${temples.templeClosureSchedule}`;


        photo.setAttribute('src', temples.photo);
        photo.setAttribute('alt', `Photo for ${temples.location}`);
        photo.setAttribute('loading', 'lazy');

        thumbsUp.setAttribute('src', temples.icon);
        thumbsUp.setAttribute('alt', `Thumbs Up Icon`);

        card.appendChild(photo);
        card.appendChild(templeName);
        card.appendChild(phoneNum);
        card.appendChild(address);
        card.appendChild(services);
        card.appendChild(history);
        card.appendChild(ordinanceSchedule);
        card.appendChild(sessionSchedule);
        card.appendChild(templeClosureSchedule);
        card.appendChild(thumbsUp);

        cards.appendChild(card);
    }


