// Fetch Weather using API
const error = document.getElementById('error')

async function fetchData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=84f293469f95029376a49c8dbfc2b1d4`, {mode: 'cors'});
        if (!response.ok) {
            throw new Error(`City "${city}" not found`);
        }
        const weatherData = await response.json();
        error.classList.remove('active');
        return weatherData
    } catch(err) {
        if (error.textContent == '') {
        error.textContent = 'You need to enter a city.';
        error.classList.add('active');
        } else {
            error.textContent = `${err}`
        }
    }
};

function processData(data) {
    const formattedData = {
        main: {temp: `${Math.round(data.main.temp * 10)/10}\u00B0`, city: `${data.name}`, country: `${data.sys.country}`},
        weather: {forecast: `${data.weather[0].main}`, description: `${data.weather[0].description}`},
        details: {humidity: `${data.main.humidity}`, pressure: `${data.main.pressure}`, minTemp: `${Math.round(data.main.temp_min * 10)/10}`, maxTemp: `${Math.round(data.main.temp_max*10)/10}`, feelsLike: `${Math.round(data.main.feels_like*10)/10}`}
    }
    return formattedData
}

export { fetchData, processData }