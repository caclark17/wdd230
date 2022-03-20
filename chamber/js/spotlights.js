const requestURL = 'https://caclark17.github.io/wdd230/chamber/data.json';
const spotlights = document.querySelector('.spotlights');
const jsonObject = '';
const spotlight1 = document.querySelector(".spotlight1");
const spotlight2 = document.querySelector(".spotlight2");
const spotlight3 = document.querySelector(".spotlight3")


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        
    });

    function displaySpotlight(businesses) {
        let spotlightDisplay = document.createElement('section');
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

        spotlightDisplay.appendChild(logo);
        spotlightDisplay.appendChild(businessName);
        spotlightDisplay.appendChild(address);
        spotlightDisplay.appendChild(phoneNum);
        spotlightDisplay.appendChild(website);

        spotlights.appendChild(spotlightDisplay);
    }


