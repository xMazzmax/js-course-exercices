"use strict";

// // Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// const italianFoods = new Set([
//   "pasta",
//   "gnocchi",
//   "tomatoes",
//   "olive oil",
//   "garlic",
//   "basil",
// ]);

// const mexicanFoods = new Set([
//   "tortillas",
//   "beans",
//   "rice",
//   "tomatoes",
//   "avocado",
//   "garlic",
// ]);

// // Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// //////////////////////////////////////
// // Destructuring arrays
// //////////////////////////////////////

// let colors = ["red", "green", "blue"];

// // Traditional way
// let first1 = colors[0];
// let second1 = colors[1];
// let third1 = colors[2];
// console.log(first1, second1, third1); // red green blue

// // Destructured
// let [first2, second2, third2] = colors;
// console.log(first2, second2, third2); // red green blue

// // To skip elements add , ,
// let [first3, , third3] = ["red", "green", "blue"];
// console.log(first3, third3); // red blue

// // Add default values
// let [a = "default", b = "default"] = ["hello"];
// console.log(a, b); // hello default

// // To swap values
// [a, b] = [b, a];
// console.log(a, b); // default hello

// // Nested array
// const arr1 = [1, 2, [3, 4]];
// const [q, r, [s, t]] = arr1;
// console.log(q, r, s, t);

// //////////////////////////////////////
// // Destructuring objects
// //////////////////////////////////////

// let person = { firstName: "Alice", age: 25, sex: "female" };

// // Traditional way
// let firstName1 = person.firstName;
// let age1 = person.age;
// let sex1 = person.sex;
// console.log(firstName1, age1, sex1); // Alice 25 female

// // Destructured
// // To access the specific properties, variables need to have the same name (probably because properties of objects are saved in alphabetical order)
// let { firstName, age } = person;
// console.log(firstName, age); // Alice 25

// // To set custom variable names
// let { firstName: xName, age: xAge } = person;
// console.log(xName, xAge);

// // Set default values
// // Useful when retrieving objects from an API
// let person = { firstName: "Alice", age: 25, sex: "female" };
// const { firstName, lastName = "Unknown", age, sex } = person;
// console.log(firstName, lastName, age, sex);

// // Mutating variables
// let a = 123;
// let b = 456;
// const obj = { a: 1, b: 2, c: 3 };
// // Needs parenthesis surrounding the whole destructuring assignment
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   openingHours: {
//     thu: { open: restaurantOpens, close: restaurantCloses },
//   },
// } = restaurant;
// console.log(restaurantOpens, restaurantCloses); //12 22

// // When a function receives an object with many properties as an argument
// // This makes it easier to work with the properties of the object
const order = {
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  confirmation: function ({ starterIndex, mainIndex, deliveryTime, address }) {
    console.log(
      `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${deliveryTime}`
    );
  },
};

let orderDataFromAPI = {
  deliveryTime: "20:00",
  address: "Zürichstrasse 1",
  starterIndex: 1,
  mainIndex: 2,
};

order.confirmation(orderDataFromAPI);

//////////////////////////////////////
//
//////////////////////////////////////
