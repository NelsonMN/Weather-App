import updateAppUI from "./ui";
import {fetchData, processData} from "./weather"

const search = document.getElementById('submit');
const input = document.getElementById('search');

search.addEventListener('click', (e) => {
    let searchInput = input.value
    if (searchInput == '') {
        alert('Please fill in a city')
    }
    // fetch weather data
    const initialOutput = fetchData(searchInput)
    processData(initialOutput)
    // input weather data into the elements in the DOM
    input.value = ''
});