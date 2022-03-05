const requestURL = 'https://caclark17.github.io/wdd230/chamber/data.json';
const cards = document.querySelector('.cards');
const jsonObject = '';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        console.table(jsonObject);
        businesses.forEach(displayBusinesses);
    });

    function displayBusinesses(businesses) {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let businessName = document.createElement('h2');
        let address = document.createElement('p');
        let phoneNum = document.createElement('p');
        let website = document.createElement('p');

        businessName.textContent = `${businesses.name}`;
        address.textContent = `${businesses.address}`;
        phoneNum.textContent = `${businesses.phoneNumber}`;
        website.textContent = `${businesses.website}`;

        logo.setAttribute('src', businesses.logo);
        logo.setAttribute('alt', `Logo for ${businesses.name}`);
        logo.setAttribute('loading', 'lazy');

        card.appendChild(logo);
        card.appendChild(businessName);
        card.appendChild(address);
        card.appendChild(phoneNum);
        card.appendChild(website);

        cards.appendChild(card);
    }


