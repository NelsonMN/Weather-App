import updateAppUI from "./ui.js";
import { fetchData, processData } from "./weather.js";

const search = document.getElementById("submit-button");
const input = document.getElementById("search");

search.addEventListener("click", (e) => {
  e.preventDefault();
  let searchInput = input.value;
  const initialOutput = fetchData(searchInput);
  initialOutput
    .then((data) => {
      const formattedData = processData(data);
      updateAppUI(formattedData);
    })
    .catch(() => {
      return;
    });
  input.value = "";
});

// Load Toronto

fetchData("Toronto").then((data) => {
  updateAppUI(processData(data));
});
