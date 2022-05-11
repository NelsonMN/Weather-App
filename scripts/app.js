import {updateAppUI, showError} from "./ui.js";
import {fetchData, processData} from "./weather.js";

const search = document.getElementById('submit-button');
const input = document.getElementById('search');


search.addEventListener('click', (e) => {
    e.preventDefault()
    let searchInput = input.value
    if (!input.validity.valid) {
        showError();
        e.preventDefault()
    } else {
        const initialOutput = fetchData(searchInput)
        initialOutput.then((data) => {
            const formattedData = processData(data)
            updateAppUI(formattedData)
        }).catch(() => {
            return
        })
        input.value = ''
    }
    
});

fetchData('Toronto').then(data => {
    updateAppUI(processData(data))
    }
)