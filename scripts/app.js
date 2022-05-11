import updateAppUI from "./ui.js";
import {fetchData, processData} from "./weather.js";

const search = document.getElementById('submit');
const input = document.getElementById('search');

search.addEventListener('click', (e) => {
    let searchInput = input.value
    if (searchInput == '') {
        alert('Please fill in a city')
    }
    // fetch weather data
    const initialOutput = fetchData(searchInput)
    console.log(initialOutput)
    const data = processData(initialOutput)
    console.log(data)
    updateAppUI(data)
    // input weather data into the elements in the DOM
    input.value = ''
});