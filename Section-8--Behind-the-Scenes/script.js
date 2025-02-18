"use strict";

// // The this keyword in practice
// const f = () => {
//   console.log(this);
// };

// f();

// const max = {
//   firstName: "Maximiliano",
//   lastName: "Ely Mazzola",
// };
// const marriedMax = { ...max };

// marriedMax.lastName = "Something Else";

// console.log(max.lastName); // Ely Mazzola
// console.log(marriedMax.lastName); // Something Else

const max2 = {
  firstName: "Maximiliano",
  lastName: "Ely Mazzola",
  kids: [],
};

// Assignment using spread operator
const parentMax2 = { ...max2 };

// Assignment using structured clone
const parentMax3 = structuredClone(max2);

// Add kid to spread operator copy
parentMax2.kids.push("kidNumber1");

// Original object
console.log(max2.kids); // Array [ "kidNumber1" ]
// Spread operator copy object
console.log(parentMax2.kids); // Array [ "kidNumber1" ]
// Structured clone object
console.log(parentMax3.kids); // Array []
