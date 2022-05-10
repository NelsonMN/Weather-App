// Fetch Weather using API

async function fetchWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84f293469f95029376a49c8dbfc2b1d4`, {mode: 'cors'});
    const weatherData = await response.json();
    if (weatherData.cod == '404') {
        // Handle error here
    } else {
        return weatherData
    }
};