import updateAppUI from "./ui.js";
import {fetchData, processData} from "./weather.js";

const search = document.getElementById('submit');
const input = document.getElementById('search');

search.addEventListener('click', (e) => {
    e.preventDefault()
    let searchInput = input.value
    if (searchInput == '') {
        alert('Please fill in a city')
    }
    // fetch weather data
    const initialOutput = fetchData(searchInput)
    initialOutput.then((data) => {
        const formattedData = processData(data)
        updateAppUI(formattedData)
    }).catch(() => {
        return
    })
    // updateAppUI(data)
    // input weather data into the elements in the DOM
    input.value = ''
});

fetchData('Toronto').then(data => {
    updateAppUI(processData(data))
    }
)