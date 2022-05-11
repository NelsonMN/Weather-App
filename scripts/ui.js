const tempReading = document.getElementById('temp-reading');
const cityCountry = document.getElementById('city-country');

const weatherForecast = document.getElementById('weather-forecast');
const weatherDescription = document.getElementById('weather-description');

const humidity = document.getElementById('humidity-reading');
const pressure = document.getElementById('pressure-reading');
const minTemp = document.getElementById('min-temp-reading');
const maxTemp = document.getElementById('max-temp-reading');
const feelsLike = document.getElementById('feels-like-reading');

const degree = document.getElementById('degree')


// Temperature to Celcius:
function toCelcius(temp){
    let adjustedTemp = temp.slice(0, -1)
    return (Math.round(((adjustedTemp - 32)*(5/9))*10)/10)
}
// Temperature to Fahrenheit:
function toFarenheit(temp){
    let adjustedTemp = temp.slice(0, -1)
    return (Math.round((adjustedTemp * (9/5) + 32)*10)/10)
}

// Form Validation API:
const errorInput = document.querySelector('[error-input]')
const search = document.getElementById('search')
const error = document.querySelector('.error')

errorInput.addEventListener('input', () => {
    if (search.validity.valid) {
        error.textContent = ''
        error.className = 'error'
    } else {
        showError()
    }
})

function showError() {
    if (search.validity.valueMissing) {
        error.textContent = 'You need to enter a city';
        error.className = 'error active';
    }
}

// Degree Changer
degree.addEventListener('click', (e) => {
    let measurement = e.target.textContent
    if (measurement == `\u00B0C`) {
        e.target.textContent = `\u00B0F`
        tempReading.textContent = `${toFarenheit(tempReading.textContent)}\u00B0`
        minTemp.textContent = `${toFarenheit(minTemp.textContent)}\u00B0`
        maxTemp.textContent = `${toFarenheit(maxTemp.textContent)}\u00B0`
        feelsLike.textContent = `${toFarenheit(feelsLike.textContent)}\u00B0`
    } else {
        e.target.textContent = `\u00B0C`
        tempReading.textContent = `${toCelcius(tempReading.textContent)}\u00B0`
        minTemp.textContent = `${toCelcius(minTemp.textContent)}\u00B0`
        maxTemp.textContent = `${toCelcius(maxTemp.textContent)}\u00B0`
        feelsLike.textContent = `${toCelcius(feelsLike.textContent)}\u00B0`
    }
})

function updateAppUI(data) {
    tempReading.textContent = `${data.main.temp}`
    cityCountry.textContent = `${data.main.city}, ${data.main.country}`
    weatherForecast.textContent = `${data.weather.forecast}`
    weatherDescription.textContent = `${data.weather.description}`
    humidity.textContent = `${data.details.humidity}\u0025`
    pressure.textContent = `${data.details.pressure}`
    minTemp.textContent = `${data.details.minTemp}\u00B0`
    maxTemp.textContent = `${data.details.maxTemp}\u00B0`
    feelsLike.textContent = `${data.details.feelsLike}\u00B0`
}

export { updateAppUI, showError }