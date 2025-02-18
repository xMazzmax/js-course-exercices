"use strict";

// tempArray
// function printForecast console prints each temperature with a string including consecutive days starting with "in 1 day" with the first value of the array

const temperatureArray1 = [17, 21, 23];
const temperatureArray2 = [12, 5, -5, 0, 4];
let temperatureString = "";

// prettier-ignore
function printForecast(temperatureArray) {
  for (let i = 0; i < temperatureArray.length; i++) {
    temperatureString += `${temperatureArray[i]}°C in ${i + 1} days ... `;
  }

  console.log("... " + temperatureString);
}

printForecast(temperatureArray1);
