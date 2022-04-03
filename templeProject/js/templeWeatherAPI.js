const apiURL =   'https://api.openweathermap.org/data/2.5/weather?id=4699066&units=imperial&appid=f139db2a1c6a525fcd6812a627141e69' ;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        document.querySelector('#current-temp').textContent = jsObject.main.temp.toFixed(1);
        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        const humidity = jsObject.weather[0].humidity;
        
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
        document.querySelector('#speed').textContent = `${jsObject.wind.speed} MPH`;
        document.querySelector('#humidity').textContent = `${jsObject.main.humidity}%`;
       

        const speed = jsObject.wind.speed;
        const temp = jsObject.main.temp;

        function Chill(temp, speed) {
            return 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
            }
            if(temp <= 50 && speed >= 3) {
            document.querySelector('#wind').textContent = Chill(temp, speed).toFixed(2);
            } else {
            document.querySelector('#wind').textContent = `N/A`;


        }
        ;
            });

            const apiURL2 =   'https://api.openweathermap.org/data/2.5/forecast/daily?lat=29&lon=-95&cnt=3&appid=f139db2a1c6a525fcd6812a627141e69' ;

            fetch(apiURL2)
                .then((response) => response.json())
                .then((jsObject) => {
            
                    document.querySelector('#current-temp2').textContent = jsObject.main.temp.toFixed(1);
                    const iconsrc2 = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
                    const desc2 = jsObject.weather[0].description;
                    
                    document.querySelector('#weathericon2').setAttribute('src', iconsrc2);
                    document.querySelector('#weathericon2').setAttribute('alt', desc2);
                    document.querySelector('figcaption').textContent = desc;

                   
            

                        });


