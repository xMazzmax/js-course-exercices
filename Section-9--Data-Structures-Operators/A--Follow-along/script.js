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
// const order = {
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   confirmation: function ({ starterIndex, mainIndex, deliveryTime, address }) {
//     console.log(
//       `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${deliveryTime}`
//     );
//   },
// };

// let orderDataFromAPI = {
//   deliveryTime: "20:00",
//   address: "Zürichstrasse 1",
//   starterIndex: 1,
//   mainIndex: 2,
// };

// order.confirmation(orderDataFromAPI);

//////////////////////////////////////
// Maps iteration
//////////////////////////////////////

// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct 🎉"],
//   [false, "Try again!"],
// ]);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// const arrFromMap = [...question.keys()];
// for(const [key, value] of question)
//   objectFromMap.set
// console.log(arrFromMap);

// console.log(objectFromMap);

// // Quiz app
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt("Your answer"));
// console.log(question.get(question.get("correct") === answer));

// //////////////////////////////////////
// // 128. Working With Strings - Part 1
// //////////////////////////////////////

// const quote = "Follow the plan!";

// // First string index
// console.log(quote[0]); // F

// // Second string index
// console.log(quote[1]); // o

// // Type in the string directly and use it like a variable of type string
// console.log("Asdf"[1]); // s
// console.log("Asdf".length); // 4

// // Get the index of the first correspondant character found inside the string
// console.log(quote.indexOf("l")); // 2

// // Get the index of the last correspondant character found inside the string
// console.log(quote.lastIndexOf("l")); // 12

// // Get the starting index of the first correspondant string (multiple characters) found inside the string
// console.log(quote.indexOf("plan")); // 11

// // Get the starting index of the last correspondant string (multiple characters) found inside the string
// console.log(quote.lastIndexOf("plan")); // 12

// // Get a string starting from a specific index
// console.log(quote.slice(7)); // the plan!

// // Get a string with the starting and ending index. The ending index is doesn't get returned. Length of the returned string is ending - starting index
// console.log(quote.slice(7, 10)); // the

// // Get a string with the starting and ending string by using the index of a specific string. The ending string doesn't get returned.
// console.log(quote.slice(0, quote.indexOf(" "))); // Follow

// // Get a string with the starting and ending string by using the last index of a specific string + 1. The ending string doesn't get returned.
// console.log(quote.slice(quote.lastIndexOf(" ") + 1)); // Follow

// // Get a string with the starting index and an ending index by using a negative index. The negative index is the index number starting from the end.
// console.log(quote.slice(0, -2)); // Follow the pla

// //////////////////////////////////////
// // 129. Working With Strings - Part 2
// //////////////////////////////////////
// const quote = "Follow The Plan!";

// console.log(quote.toLowerCase()); // follow the plan!
// console.log(quote.toUpperCase()); // FOLLOW THE PLAN!

// // Fix string formatting
// const passengerName = "mAxI";
// const passengerNameLowerCase = passengerName.toLocaleLowerCase();
// const passengerNameFormatted =
//   passengerNameLowerCase[0].toUpperCase() + passengerNameLowerCase.slice(1);

// console.log(passengerNameFormatted); // Maxi

// // Fix email formatting
// const emailWrongFormat = " MyMail@mail.com  \n";
// const emailRightFormat = "mymail@mail.com";
// const emailFormatted = emailWrongFormat.toLowerCase().trim();

// console.log(emailRightFormat === emailFormatted); // true

// // Replace string
// const currencyDollar = "$20,00";
// const currencyEuro = currencyDollar.replace("$", "€").replace(",", ".");

// console.log(currencyEuro); // €20.00

// // Replace all matches of a substring in a string
// const quote2 = "Alone, alone, all, all alone.";
// const quote2Replaced = quote2.toLowerCase().replaceAll("alone", "together"); // together, together, all, all together.

// console.log(quote2Replaced);

// // Replace all matches of a substring in a string with RegEx
// const quote2Replaced2 = quote2.toLowerCase().replace(/alone/g, "together"); // together, together, all, all together.

// console.log(quote2Replaced2);

// // Check if a string contains a substring
// const quoteBusiness = "The Key to success is action.";
// console.log(quoteBusiness.toLowerCase().includes("key")); // true

// // Check if a string contains a substring with a function
// const checkBaggage = function (baggageContent) {
//   const baggageContentLowerCase = baggageContent.toLowerCase();

//   if (
//     baggageContentLowerCase.includes("gun") ||
//     baggageContentLowerCase.includes("knife")
//   )
//     console.log("You are NOT allowed on board!");
//   else {
//     console.log("Welcome aboard!");
//   }
// };

// checkBaggage("I have a laptop, some Food and a pocket Knife"); // You are NOT allowed on board!
// checkBaggage("Socks and camera"); // Welcome aboard!
// checkBaggage("Got some snacks and a gun for protection"); // You are NOT allowed on board!

// //////////////////////////////////////
// // 129. Working With Strings - Part 3
// //////////////////////////////////////

// // Split a string into substrings using a specific separator and return them as an array
// console.log(
//   "Love+is+composed+of+a+single+soul+inhabiting+two+bodies".split("+")
// ); // Array [ "Love", "is", "composed", "of", "a", "single", "soul", "inhabiting", "two", "bodies" ]

// // Combine split with destructuring to easily create variables out of substrings
// const [firstName, lastName] = "Maximiliano Ely-Mazzola".split(" ");

// console.log(firstName);
// console.log(lastName);

// // Add strings together with a separator using the join method
// console.log(["Mr.", firstName, lastName.toUpperCase()].join(" "));

// // Repeat a string
// console.log("*".repeat(10)); // **********

// // Add padding at the start or end of a string for a max length (including length of the string)
// function AddPadding(item, price) {
//   console.log(item.padEnd(20, "_") + "CHF" + price.padStart(10, "_"));
// }

// // Banana______________CHF______0.99
// AddPadding("Banana", "0.99");
// // Gaming Laptop_______CHF__2'499.99
// AddPadding("Gaming Laptop", "2'499.99");
// // Luxury Watch________CHF_89'999.99
// AddPadding("Luxury Watch", "89'999.99");

// // Mutate a specific character index of all substrings
// const names = "maximiliano ely mazzola".split(" ");
// let capitalizedNames = [];

// for (const n of names) {
//   capitalizedNames.push(n.replace(n[0], n[0].toUpperCase()));
// }

// console.log(capitalizedNames.join(" ")); // Maximiliano Ely Mazzola
