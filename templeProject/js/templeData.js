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
        let address2 = document.createElement('p');
        let phoneNum = document.createElement('p');
        let services = document.createElement('p');
        let history = document.createElement('p');
        let ordinanceSchedule = document.createElement('p');
        let sessionSchedule = document.createElement('p');
        let closure = document.createElement('p');

        templeName.textContent = `${temples.location}`;
        address.textContent = `${temples.address}`;
        address2.textContent = `${temples.address2}`;
        phoneNum.textContent = `${temples.phone}`;
        services.textContent = `${temples.services}`;
        history.textContent = `${temples.history}`;
        ordinanceSchedule.textContent = `${temples.ordinance-schedule}`;
        sessionSchedule.textContent = `${temples.session-schedule}`;
        closure.textContent = `${temples.temple-closure-schedule}`;


        photo.setAttribute('src', temples.photo);
        photo.setAttribute('alt', `Photo for ${temples.location}`);
        photo.setAttribute('loading', 'lazy');

        card.appendChild(photo);
        card.appendChild(templeName);
        card.appendChild(address);
        card.appendChild(phoneNum);
        card.appendChild(address2);
        card.appendChild(services);
        card.appendChild(history);
        card.appendChild(ordinanceSchedule);
        card.appendChild(sessionSchedule);
        card.appendChild(closure);

        cards.appendChild(card);
    }


