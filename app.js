// Fetch Weather using API
async function fetchData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84f293469f95029376a49c8dbfc2b1d4`, {mode: 'cors'});
    const weatherData = await response.json();
    if (weatherData.cod == '404') {
        // Handle error here
    } else {
        console.log(weatherData)
        return weatherData
    }
};

// Input Weather Data Into DOM:


// Relevant DOM Elements
const search = document.getElementById('submit');
const input = document.getElementById('search');

search.addEventListener('click', (e) => {
    e.preventDefault()
    let searchInput = input.value
    if (searchInput == '') {
        alert('Please fill in a city')
    } else {
        // fetch weather data
        fetchData(searchInput)
        // input weather data into the elements in the DOM
    }
    input.value = ''
});