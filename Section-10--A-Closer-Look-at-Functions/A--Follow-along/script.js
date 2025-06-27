"use strict";
// //////////////////////////////////////////////////////////////////////
// //#region 135. Default Parameters
// //////////////////////////////////////////////////////////////////////

// // Set default values in the parameters definition (ES6)
// // Any expression can be set as dafault value
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // Default values with short circuiting (ES5)
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
// };

// // Skip a paramater with undefined
// createBooking("XM312", undefined, 400);

// //#endregion
// //////////////////////////////////

// //////////////////////////////////////////////////////////////////////
// //#region 136. How Passing Arguments Works: Value vs. Reference
// //////////////////////////////////////////////////////////////////////

// const sex = "male";
// const max = {
//   firstName: "Max",
// };

// function logMutation(gender, person) {
//   gender = "man";
//   person.firstName = "Maximiliano";

//   console.log(gender); // man
//   console.log(person.firstName); // Maximiliano
// }

// logMutation(sex, max);

// // Since strings are primitives, a copy of the value is passed as an argument to the function. Therefore the value of the original object stays untouched
// console.log(sex); // male
// // Since objects are reference type, a reference of the object is passed as an argument to the function, not the value itself. Therefore the value of the original object gets mutated
// console.log(max.firstName); // Maximiliano

// //#endregion
// //////////////////////////////////

// //////////////////////////////////////////////////////////////////////
// //#region 139. Functions Returning Functions
// //////////////////////////////////////////////////////////////////////
// const greet = greeting => name => console.log(`${greeting} ${name}`);
// // Passes the "Hey" argument to the greeting parameter and becomes the function inside the greet function
// const greeterHey = greet("Hey");
// // Since greeterHey has become the inner function, "Jonas" is the argument of the name parameter
// greeterHey("Jonas");
// greeterHey("Steven");

// greet("Hello")("Jonas");

// //#endregion
// //////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 140. The call and apply Methods
//////////////////////////////////////////////////////////////////////
// const lufthansa = {
//   airline: "Lufthansa",
//   code: "LH",
//   bookings: [],
//   book(flightNumber, passenger) {
//     console.log(
//       `${passenger} booked a seat on the ${this.code}${flightNumber} flight from ${this.airline}`
//     );

//     this.bookings.push({ flight: `${this.code}${flightNumber}`, passenger });
//   },
// };

// lufthansa.book(1423, "Max");

// const book = lufthansa.book;

// const swiss = {
//   airline: "Swiss",
//   code: "LX",
//   bookings: [],
// };

// // The arguments must be passed as an array
// book.apply(swiss, [4321, "Molly"]);
// // The arguments are passed individually
// book.call(lufthansa, 1111, "Mike");
// // Use call() instead of apply() by using the spread operator
// book.call(swiss, ...[4444, "Elizabeth"]);

// lufthansa.book.call(swiss, 2222, "Mel");

//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 141. The bind Method
//////////////////////////////////////////////////////////////////////
// const max = { firstName: "Max" };
// const lea = { firstName: "Lea" };
// const jasmin = { firstName: "Jasmin" };

// function logPersonalInfos(sex, age) {
//   console.log(`${this.firstName} ; ${sex} ; ${age}`);
// }

// const logInfosMax = logPersonalInfos.bind(max, "male");
// logInfosMax(29); // Max ; male ; 29

// // Arguments can't be skipped when using bind(). Either change the order in the parent function or don't bind the arguments at all that come after one that shouldn't be bound
// // const logInfosJasmin = logPersonalInfos.bind(jasmin, , 30); // Error
// const logInfosJasmin = logPersonalInfos.bind(jasmin, undefined, 30);
// logInfosJasmin("female"); // Jasmin ; undefined ; 30

// function logInfosLea(sex) {
//   return logPersonalInfos.call(lea, sex, 31);
// }

// logInfosLea("female"); // Lea ; female ; 31

// const delta = {
//   planes: 200,
//   buyPlane() {
//     this.planes++;
//     console.log(this.planes);
//   },
// };

// function logJasmin(sex) {
//   return function () {
//     logPersonalInfos.call(jasmin, sex, 30);
//   };
// }

// document
//   .querySelector(".buy")
//   .addEventListener("click", delta.buyPlane.bind(delta));

// document.querySelector(".buy").addEventListener("click", logJasmin("female"));

// // Partial application
// const addTax = (rate, value) => value + (rate / 100) * value;

// const addVATSwitzerland = function (value) {
//   return function () {
//     console.log(value + (8.1 / 100) * value);
//   };
// };
// console.log(addVATSwitzerland(100));

// document
//   .querySelector(".buy")
//   .addEventListener("click", addVATSwitzerland(100));

//#endregion
//////////////////////////////////
