import updateAppUI from "./ui";
import { fetchData, processData } from "./weather";

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
      input.value = "";
    })
    .catch(() => {
      input.value = "";
      return;
    });
});

// Load Toronto

fetchData("Toronto").then((data) => {
  updateAppUI(processData(data));
});
