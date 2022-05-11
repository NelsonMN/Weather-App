import updateAppUI from "./ui.js";
import {fetchData, processData} from "./weather.js";

const search = document.getElementById('submit-button');
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

    input.value = ''
});

fetchData('Toronto').then(data => {
    updateAppUI(processData(data))
    }
)