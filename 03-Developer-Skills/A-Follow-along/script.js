"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function calcAmplitude(tempArr) {
  let minTemp = tempArr[0];
  let maxTemp = tempArr[0];

  for (let i = 1; i < tempArr.length; i++) {
    if (typeof tempArr[i] !== "number") continue;

    if (minTemp > tempArr[i]) minTemp = tempArr[i];
    if (maxTemp < tempArr[i]) maxTemp = tempArr[i];
  }

  return (maxTemp - minTemp) / 2;
}

console.log(calcAmplitude(temperatures));
