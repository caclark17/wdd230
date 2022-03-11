const apiURL =   `https://api.openweathermap.org/data/2.5/weather?zip=99705&units=imperial&appid=f139db2a1c6a525fcd6812a627141e69` ;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const currentTemp = document.querySelector('#current-temp');
        const weathericon = document.querySelector('#icon-src');
    
        currentTemp.textContent = jsObject.main.temp.toFixed(0);
        let imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        let imgalt = jsObject.weather[0].description;
    
        currentTemp.textContent = jsObject.removeAttributeNS.temp.toFixed(0);
        weathericon.setAttribute('src', imgsrc);
        weathericon.setAttribute('alt', imgalt);
    })


