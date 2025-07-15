"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//////////////////////////////////////////////////////////////////////
//#region 149. Simple Array Methods
//////////////////////////////////////////////////////////////////////

// const array = [
//   [1, 2],
//   [3, 4],
// ];
// const referenceCopy = array;
// const shallowCopy = array.slice();

// // The variable copies the array object of the "array" object and keeps a reference to the array objects within it
// shallowCopy[0] = [4, 5]; // array == [[1, 2], [3, 4]]
// // The variable copies the reference to the same array object as the "array" variable
// reference[0] = [4, 5]; // array == [[4, 5], [3, 4]]

// shallowCopy[0][0] = 4; // array == [[4, 2], [3, 4]]
// shallowCopy[0][1] = 5; // array == [[4, 5], [3, 4]]

// const array2 = [1, 2];

// const shallowCopy2 = array2;

// //              0:   1:   2:   3:   4:
// const array = ["a", "b", "c", "d", "e"];
// const array2 = ["f", "g", "h", "i", "j"];

// // Creates a shallow copy of an array
// console.log(array.slice()); // ["a", "b", "c", "d", "e"]

// // The spread operator also creates a shallow copy of an array
// console.log([...array]); // ["a", "b", "c", "d", "e"]

// // Use the slice method over the spread operator, to be able to chain methods
// console.log(array.slice().reverse()); // ["e", "d", "c", "b", "a"]

// // Using the first parameter sets a starting index (inclusive of the index element)
// console.log(array.slice(1)); // ["b", "c", "d", "e"]

// // Using a negative index makes the method start counting from the end (-1 returns the last element)
// console.log(array.slice(-1)); // ["e"]

// // Using the second parameter sets an ending index (exclusive of the index element)
// console.log(array.slice(1, 4)); // ["b", "c", "d"]
// console.log(array.slice(1, -1)); // ["b", "c", "d"]
// const arrayXtra = [1, 2];

// // Removes and returns items and optionally inserts other items from the starting position
// // splice(start: number, deleteCount?: number): string[]
// // splice(start: number, deleteCount: number, ...items: string[]): string[]
// console.log(array.splice(1, 2, ...arrayXtra)); // ["b", "c"]
// console.log(array); // ["a", 1, 2, "d", "e"]

// // Mutates the array permanently
// console.log(array.reverse()); // ["e", "d", 2, 1, "a"]

// // Adds arrays to one another
// console.log(array.concat(array2)); // ["e", "d", 2, 1, "a", "f", "g", "h", "i", "j"]
// console.log([...array, ...array2]); // ["e", "d", 2, 1, "a", "f", "g", "h", "i", "j"]
// console.log(array.join("_")); // e_d_2_1_a

// const array3 = ["a", "b", "c", "d", "e"];

// // Remove the first element permanently
// console.log(array3.shift()); // "a"
// console.log(array3); // ["b", "c", "d", "e"]

// // Add element to the beginning permanently
// console.log(array3.unshift("z")); // 5 (new length of the array)
// console.log(array3); // ["z", "b", "c", "d", "e"]

// // Remove the last element permanently
// console.log(array3.pop()); // "e"
// console.log(array3); // ["z", "b", "c", "d"]

// // Add element to the end permanently
// console.log(array3.push("f")); // 5 (new length of the array)
// console.log(array3); // ["z", "b", "c", "d", "f"]
// console.log(array[-1]);
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 150. The New at Method
//////////////////////////////////////////////////////////////////////

// // Both return the same
// array[array.length - 1]; // "c"
// array.at(-1); // "c"
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 151. Looping Arrays: forEach
//////////////////////////////////////////////////////////////////////

// const array = ["a", "b", "c"];
// array.forEach(function (element, index, arr) {
//   console.log(
//     `This is the value ${element} with the index ${index} from a total of ${arr.length} values`
//   );
// });
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 154. Creating DOM Elements (account transactions)
//////////////////////////////////////////////////////////////////////

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (movement, index) {
    const movementType = movement > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${movementType}">${
      index + 1
    } ${movementType.toUpperCase()}</div>
      <div class="movements__date"></div>
      <div class="movements__value">${movement}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(movements);
//#endregion
//////////////////////////////////
