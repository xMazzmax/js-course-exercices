"use strict";

// ////////////////////////////////////////////
// // Dot notation vs bracket notation
// ////////////////////////////////////////////
// const max = {
//   firstName: "Maximiliano",
//   nickname: "Max",
//   lastName: "Ely Mazzola",
//   yearOfBirth: 1996,
//   job: "software developer",
//   friends: ["Jenny", "Bob", "John"],
//   hasDriversLicense: false,

//   calcAge: function () {
//     this.age = 2025 - this.yearOfBirth;
//     return this.age;
//   },

//   getDriversLicenseString: function () {
//     return this.hasDriversLicense ? "a" : "no";
//   },

//   getSummary: function () {
//     return `${this.nickname} is a ${this.calcAge()}-years old ${
//       this.job
//     }, and he has ${this.getDriversLicenseString()} driver's license`;
//   },
// };

// console.log(
//   `${max.nickname} has ${max.friends.length} friends, and his best friend is called ${max.friends[0]}`
// );

// console.log(max.getSummary());
// /* -------------------------------------------- */

// ////////////////////////////////////////////
// // Iteration: The for loop
// ////////////////////////////////////////////

// for (let repetition = 1; repetition <= 10; repetition++) {
//   console.log(`Rep ${repetition}`);
// }

// /* -------------------------------------------- */

// ////////////////////////////////////////////
// Looping arrays, breaking and continuing
// ////////////////////////////////////////////

// const max = [
//   "Maximiliano",
//   "Max",
//   "Ely Mazzola",
//   2025 - 1996,
//   "software developer",
//   ["Jenny", "Bob", "John"],
// ];

// for (let i = 0; i < max.length; i++) {
//   console.log(max[i], typeof max[i]);
// }

// // "continue" skipps the code that follows in the current iteration
// for (let i = 0; i < max.length; i++) {
//   if (typeof max[i] === "number") continue;

//   console.log(typeof max[i]);
// }

// // "break" exits the current loop
// for (let i = 0; i < max.length; i++) {
//   if (typeof max[i] === "number") break;

//   console.log(typeof max[i]);
// }

// const yearsOfBirth = [1987, 2003, 1999, 2012];
// const ages = [];

// function calcAge(yearOfBirth) {
//   return 2025 - yearOfBirth;
// }

// for (let i = 0; i < yearsOfBirth.length; i++) {
//   ages.push(calcAge(yearsOfBirth[i]));
// }

// console.log(ages);
/* -------------------------------------------- */

// ////////////////////////////////////////////
// Looping backwards and loops inside loops
// ////////////////////////////////////////////

// const max = [
//   "Maximiliano",
//   "Max",
//   "Ely Mazzola",
//   2025 - 1996,
//   "software developer",
//   ["Jenny", "Bob", "John"],
// ];

// for (let i = max.length - 1; i >= 0; i--) {
//   console.log(max[i]);
// }
/* -------------------------------------------- */

// ////////////////////////////////////////////
// // Iteration: The while loop
// ////////////////////////////////////////////
let dice;

while (dice != 6) {
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
}
