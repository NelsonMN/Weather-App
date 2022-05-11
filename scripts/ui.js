// Temperature to Celcius:
function toCelcius(){}
// Temperature to Fahrenheit:
function toFarenheit(){}

// Input Weather Data Into DOM:
const tempReading = document.getElementById('temp-reading');
const cityCountry = document.getElementById('city-country');

const weatherForecast = document.getElementById('weather-forecast');
const weatherDescription = document.getElementById('weather-description');

const humidity = document.getElementById('humidity-reading');
const pressure = document.getElementById('pressure-reading');
const minTemp = document.getElementById('min-temp-reading');
const maxTemp = document.getElementById('max-temp-reading');
const feelsLike = document.getElementById('feels-like-reading');


function updateAppUI(data) {
    tempReading.textContent = `${data.main.temp}`
    cityCountry.textContent = `${data.main.city}, ${data.main.country}`
    weatherForecast.textContent = `${data.weather.forecast}`
    weatherDescription.textContent = `${data.weather.description}`
    humidity.textContent = `${data.details.humidity}`
    pressure.textContent = `${data.details.pressure}`
    minTemp.textContent = `${data.details.minTemp}`
    maxTemp.textContent = `${data.details.maxTemp}`
    feelsLike.textContent = `${data.details.feelsLike}`
}

export default updateAppUI