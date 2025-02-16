"use strict";

// ////////////////////////////////////////////
// // Functions
// ////////////////////////////////////////////

// function describeCountry(country, population, capital) {
//   return `${country} has a population of ${population} million people and its capital is ${capital}`;
// }

// const switzerland = describeCountry("Switzerland", 9, "Bern");
// const germany = describeCountry("Germany", 84.7, "Berlin");
// const france = describeCountry("France", 68.6, "Paris");

// console.log(switzerland);
// console.log(germany);
// console.log(france);
// // /* -------------------------------------------- */

// ////////////////////////////////////////////
// // Function declarations vs. function expressions
// ////////////////////////////////////////////

// const worldPopulation = 8200; // [millions]

// function percentageOfTheWorld1(population) {
//   return population / (worldPopulation / 100);
// }

// let percentageChina = percentageOfTheWorld1(1417);
// let percentageIndia = percentageOfTheWorld1(1458);
// let percentageUnitedStates = percentageOfTheWorld1(346);
// let percentageBrazil = percentageOfTheWorld1(212);
// let percentageSwitzerland = percentageOfTheWorld1(9);

// console.log(percentageChina);
// console.log(percentageIndia);
// console.log(percentageUnitedStates);
// console.log(percentageBrazil);
// console.log(percentageSwitzerland);

// let percentageChina2 = function percentageOfTheWorld2(population) {
//   return population / (worldPopulation / 100);
// };

// console.log(percentageChina2(1417));
// /* -------------------------------------------- */

// ////////////////////////////////////////////
// // Arrow functions
// ////////////////////////////////////////////

// const percentageOfTheWorld3 = (population) =>
//   population / (worldPopulation / 100);

// const percentageChina3 = percentageOfTheWorld3(1417);

// console.log(percentageChina3);
// /* -------------------------------------------- */

// ////////////////////////////////////////////
// // Functions calling other functions
// ////////////////////////////////////////////

// const worldPopulation = 8200; // [million]

// function percentageOfTheWorld4(population) {
//   return (population / worldPopulation) * 100;
// }

// function describePopulation(country, population) {
//   const percentageOfTheCountry = percentageOfTheWorld4(population);
//   const descriptionOfTheCountry = `${country} has a population of ${population} million people, which is equal to ${percentageOfTheCountry}% of the population of the world`;

//   console.log(descriptionOfTheCountry);
// }

// describePopulation("China", 1417);
// /* -------------------------------------------- */

// ////////////////////////////////////////////
// // Introduction to arrays
// ////////////////////////////////////////////

// const populations = [1417, 1458, 346, 212];

// console.log(populations.length === 4);

// function percentageOfTheWorld(population) {
//   return (population / 8200) * 100;
// }

// const percentages = [
//   percentageOfTheWorld(populations[0]),
//   percentageOfTheWorld(populations[1]),
//   percentageOfTheWorld(populations[2]),
//   percentageOfTheWorld(populations[3]),
// ];

// console.log(percentages);
// /* -------------------------------------------- */

// ////////////////////////////////////////////
// // Basic array operations/methods
// ////////////////////////////////////////////

// const neighbors = ["Germany", "Italy", "France"];

// neighbors.push("Utopia");
// console.log(neighbors);

// neighbors.pop();
// console.log(neighbors);

// if (!neighbors.includes("Germany")) {
//   console.log("Probably not a central european country");
// } else {
//   console.log("Definitely a central european country");
// }

// neighbors[neighbors.indexOf("Germany")] = "Deutschland";
// console.log(neighbors);
// /* -------------------------------------------- */

// ////////////////////////////////////////////
// // Introduction to objects
// ////////////////////////////////////////////

// const myCountry = {
//   country: "Switzerland",
//   capital: "Bern",
//   language: ["German", "Italian", "French", "Romansh"],
//   population: 9,
//   neighbors: ["Germany", "Italy", "France"],
// };

// console.log(myCountry);
// /* -------------------------------------------- */

// ////////////////////////////////////////////
// // Dot notation vs. bracket notation
// ////////////////////////////////////////////

// const myCountry = {
//   country: "Switzerland",
//   capital: "Bern",
//   language: ["German", "Italian", "French", "Romansh"],
//   population: 9,
//   neighbors: ["Germany", "Italy", "France"],
// };

// console.log(
//   `${myCountry.country} has ${myCountry["population"]} million ${myCountry.language[0]}-speaking people, ${myCountry["neighbors"].length} neighboring countries and a capital called ${myCountry["capital"]}.`
// );

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry["population"] -= 2;
// console.log(myCountry.population);
// /* -------------------------------------------- */

// ////////////////////////////////////////////
// // Object methods
// ////////////////////////////////////////////

// const myCountry = {
//   country: "Switzerland",
//   capital: "Bern",
//   language: ["German", "Italian", "French", "Romansh"],
//   population: 9,
//   neighbors: ["Germany", "Italy", "France"],

//   describe: function () {
//     console.log(
//       `${this.country} has ${this["population"]} million ${this["language"][0]}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
//     );
//   },

//   checkIsIsland: function () {
//     this.isIsland = this.neighbors.length === 0 ? true : false;
//   },
// };

// myCountry.describe();
// myCountry.checkIsIsland();
// console.log(myCountry.isIsland);
// /* -------------------------------------------- */

// ////////////////////////////////////////////
// // Iteration: The for loop
// ////////////////////////////////////////////

// for (let elector = 1; elector <= 50; elector++) {
//   console.log(`Elector number ${elector} has just voted.`);
// }
// /* -------------------------------------------- */

// ////////////////////////////////////////////
// Looping arrays, continuing and breaking loops
// ////////////////////////////////////////////

// const populations = [1417, 1458, 346, 212];
// let percentagesOfTheWorld = [];

// function getPercentageOfTheWorld(population) {
//   return population / (8200 / 100);
// }

// for (let i = 0; i < populations.length; i++) {
//   percentagesOfTheWorld.push(getPercentageOfTheWorld(populations[i]));
// }

// console.log(percentagesOfTheWorld);
// /* -------------------------------------------- */

// ////////////////////////////////////////////
// Looping backwards and loops inside loops
// ////////////////////////////////////////////

// const listOfNeighbors = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbors.length; i++) {
//   console.log(`----- listOfNeighbors[${i}]`);
//   for (let n = 0; n < listOfNeighbors[i].length; n++) {
//     console.log(`Neighbor: ${listOfNeighbors[i][n]}`);
//   }
// }
// /* -------------------------------------------- */

// ////////////////////////////////////////////
// Looping backwards and loops inside loops
// ////////////////////////////////////////////

const populations = [1417, 1458, 346, 212];
let percentagesOfTheWorld = [];

function getPercentageOfTheWorld(population) {
  return population / (8200 / 100);
}

while (percentagesOfTheWorld.length !== populations.length) {
  percentagesOfTheWorld.push(
    getPercentageOfTheWorld(populations[percentagesOfTheWorld.length])
  );
}

console.log(percentagesOfTheWorld);
// /* -------------------------------------------- */
