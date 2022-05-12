import './styles.css';
import updateAppUI from './ui';
import { fetchData, processData } from './weather';

const search = document.getElementById('submit-button');
const input = document.getElementById('search');

search.addEventListener('click', (e) => {
  e.preventDefault();
  const searchInput = input.value;
  const initialOutput = fetchData(searchInput);
  initialOutput
    .then((data) => {
      const formattedData = processData(data);
      updateAppUI(formattedData);
      input.value = '';
    })
    .catch(() => {
      input.value = '';
    });
});

// Load Toronto

fetchData('Toronto').then((data) => {
  updateAppUI(processData(data));
});
