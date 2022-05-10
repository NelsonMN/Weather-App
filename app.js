async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84f293469f95029376a49c8dbfc2b1d4`, {mode: 'cors'});
        const weatherData = await response.json()
        console.log(weatherData) 
    } catch (response) {
        console.log(response)
    }
}

fetchWeatherData(Toronto);