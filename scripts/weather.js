// Fetch Weather using API
async function fetchData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=84f293469f95029376a49c8dbfc2b1d4`, {mode: 'cors'});
        if (!response.ok) {
            throw new Error(`City "${city}" not found`);
        }
        const weatherData = await response.json();
        console.log(weatherData)
        return weatherData
    } catch (error){
        alert(error)
    }
};

function processData(dataPromise) {
    dataPromise.then(result => {
        const formattedData = {
            main: {temp: `${result.main.temp}\u00B0`, city: `${result.name}`, country: `${result.sys.country}`},
            weather: {forecast: `${result.weather[0].main}`, description: `${result.weather[0].description}`},
            details: {humidity: `${result.main.humidity}`, pressure: `${result.main.pressure}`, minTemp: `${result.main.temp_min}`, maxTemp: `${result.main.temp_max}`, feelsLike: `${result.main.feels_like}`}
        }
        console.log(formattedData)
        return formattedData
    }).catch(() => {
        return
    })
}

export { fetchData, processData }