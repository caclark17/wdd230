let temp = parseFloat(document.querySelector('temp').value);
let speed = parseFloat(document.querySelector('speed').value);
let windchill = '';

if(temp <= 50 && speed > 3) {
    document.querySelector('wind').innerHTML = Chill(temp, speed).toFixed(2);
} else {
    windchill="N/A";

function Chill(temp, speed) {
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    }
}



