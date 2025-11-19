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
//#region 150. The New .at() Method
//////////////////////////////////////////////////////////////////////

// // Both return the same
// array[array.length - 1]; // "c"
// array.at(-1); // "c"
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 151. Looping Arrays: forEach
//////////////////////////////////////////////////////////////////////

// const someArray = ["a", "b", "c"];
// someArray.forEach(function (element, index, array) {
//   console.log(
//     `This is the value ${element} with the index ${index} from a total of ${array.length} values`
//   );
// });
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 152. forEach With Maps and Sets
//////////////////////////////////////////////////////////////////////

// // forEach on Map
// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value} (Map size: ${map.size})`);
// });

// // forEach on Set
// const currenciesUnique = new Set(["EUR", "CHF", "BRL", "EUR", "EUR", "USD"]);
// currenciesUnique.forEach((value, _, set) => {
//   console.log(`${_}: ${value} (Set size: ${set.size})`);
// });
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 154. Creating DOM Elements (account transactions)
//////////////////////////////////////////////////////////////////////
// // with .innerHTML() and insertAdjacentHTML.() which create an XSS vulnerability
// const displayMovements = function (movements) {
//   containerMovements.innerHTML = "";

//   movements.forEach(function (movement, index) {
//     const movementType = movement > 0 ? "deposit" : "withdrawal";

//     const html = `
//     <div class="movements__row">
//       <div class="movements__type movements__type--${movementType}">${
//       index + 1
//     } ${movementType.toUpperCase()}</div>
//       <div class="movements__date"></div>
//       <div class="movements__value">${movement}€</div>
//     </div>`;

//     containerMovements.insertAdjacentHTML("afterbegin", html);
//   });
// };

// displayMovements(movements);

// with <template> and .textContent, which doesn't pose an XSS vulnerability
// const movements = [
//   {
//     type: "deposit",
//     date: "3 days ago",
//     amount: "4 000€",
//   },
//   {
//     type: "withdrawal",
//     date: "",
//     amount: "1 200€",
//   },
//   {
//     type: "deposit",
//     date: "1 day ago",
//     amount: "500€",
//   },
//   {
//     type: "deposit",
//     date: "2 weeks ago"
//     amount: "3 400€",
//   },
//   {
//     type: "withdrawal",
//     date: "",
//     amount: "600€",
//   },
//   {
//     type: "deposit",
//     date: "5 days ago",
//     amount: "1 000€",
//   },
//   {
//     type: "deposit",
//     date: "",
//     amount: "2 000€",
//   },
//   {
//     type: "withdrawal",
//     date: "yesterday",
//     amount: "700€",
//   },
//   {
//     type: "deposit",
//     date: "4 hours ago",
//     amount: "900€",
//   },
//   {
//     type: "deposit",
//     date: "",
//     amount: "5 500€",
//   },
// ];

const movementTemplate = document.getElementById("movement-template");

// const displayMovements = movements.forEach(function (movement, index) {
//   const templateClone = movementTemplate.content.cloneNode(true);
//   const typeElement = templateClone.querySelector(".movements__type");
//   const dateElement = templateClone.querySelector(".movements__date");
//   const amountElement = templateClone.querySelector(".movements__value");

//   const movementType = movement > 0 ? "deposit" : "withdrawal";

//   // Movement type
//   typeElement.textContent = `${index + 1} ${movementType}`;
//   typeElement.classList.add(`movements__type--${movementType}`);
//   // Movement date
//   if (movement.date) dateElement.textContent = movement.date;
//   else {
//     templateClone.querySelector(".movements__date").remove();
//   }
//   // Movement amount
//   amountElement.textContent = `${movement}€`;

//   containerMovements.prepend(templateClone);
// });
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 157. The map Method
//////////////////////////////////////////////////////////////////////

// const eurToUSD = 1.1;

// // Below the following function is an example on how to write more concise functions with arrow functions
// // const movementsInUSD = movements.map(function (movs) {
// //   movs * eurToUSD
// // });

// // Arrow functions implicitly return the value when written without curly braces, eliminating the need for an explicit return statement.
// const movementsInUSD = movements.map(movs => movs * eurToUSD);

// const movementsInUSDWithFor = [];
// for (const mov of movements) movementsInUSDWithFor.push(mov * eurToUSD);
// console.log(movementsInUSDWithFor);

// [1, 2, 3, 4, 5].map((val, i, arr) => val * 2); //[2, 4, 6, 8, 10]

// const movementsDescription = movements.map(
//   (movement, index) =>
//     `Movement ${index + 1}: You ${
//       movement > 0 ? "deposited" : "withdrew"
//     } ${Math.abs(movement)}`
// );

// console.log(movementsDescription);
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 158. Computing Usernames
//////////////////////////////////////////////////////////////////////

function computeUsername(accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .split(" ")
      .map(partialName => partialName[0])
      .join("")
      .toLowerCase();

    // console.log(`Owner: ${account.owner} ; Username: ${account.username}`);
  });
}

computeUsername(accounts);
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 159. The filter Method
//////////////////////////////////////////////////////////////////////
const deposits = movements.filter(movement => movement > 0);

const withdrawals = movements.filter(movement => movement < 0);
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 160. The reduce Method
//////////////////////////////////////////////////////////////////////

// // With reduce
// const balance = movements.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// // With for...of loop
// let balance2 = 0;
// for (const movement of movements) balance2 += movement;

// labelBalance.textContent = `${balance}€`;

// // Get max. value from an array
// const maxVal = movements.reduce((acc, currentVal) =>
//   acc > currentVal ? acc : currentVal
// );
// console.log(maxVal);

// const sumIn = movements.reduce((accumulator, currentValue) =>
//   currentValue > 0 ? accumulator + currentValue : accumulator
// );

// const sumOut = movements.reduce(
//   (accumulator, currentValue) =>
//     currentValue < 0 ? accumulator + Math.abs(currentValue) : accumulator,
//   0
// );

// labelSumIn.textContent = `${sumIn}€`;
// labelSumOut.textContent = `${sumOut}€`;

// labelSumInterest.textContent = sumIn * 0.012;
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 165. Implementing Login
//////////////////////////////////////////////////////////////////////

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  currentAccount = accounts.find(
    account => account.username === inputLoginUsername.value
  );

  if (currentAccount?.pin == inputLoginPin.value) {
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    // removes focus from the text input
    inputLoginUsername.blur();
    inputLoginPin.blur();

    containerApp.style.opacity = 1;

    labelWelcome.textContent = `Welcome, ${
      currentAccount.owner.split(" ")[0]
    }!`;

    displayMovements(currentAccount);
    displayCalculations(currentAccount);
  }
});

// const displayMovements = function (movements) {
//   movements.forEach(function (movement, index) {
//     const templateClone = movementTemplate.content.cloneNode(true);
//     const typeElement = templateClone.querySelector(".movements__type");
//     const dateElement = templateClone.querySelector(".movements__date");
//     const amountElement = templateClone.querySelector(".movements__value");

//     const movementType = movement > 0 ? "deposit" : "withdrawal";

//     // Movement type
//     typeElement.textContent = `${index + 1} ${movementType}`;
//     typeElement.classList.add(`movements__type--${movementType}`);
//     // Movement date
//     if (movement.date) dateElement.textContent = movement.date;
//     else {
//       templateClone.querySelector(".movements__date").remove();
//     }
//     // Movement amount
//     amountElement.textContent = `${movement}€`;

//     containerMovements.prepend(templateClone);
//   });
// };

// const displayCalculations = function (account) {
//   const sumIn = account.movements.reduce((accumulator, currentValue) =>
//     currentValue > 0 ? accumulator + currentValue : accumulator
//   );

//   const sumOut = account.movements.reduce(
//     (accumulator, currentValue) =>
//       currentValue < 0 ? accumulator + Math.abs(currentValue) : accumulator,
//     0
//   );

//   labelSumIn.textContent = `${sumIn}€`;
//   labelSumOut.textContent = `${sumOut}€`;
//   labelBalance.textContent = `${sumIn - sumOut}€`;
//   account.balance = sumIn - sumOut;
//   labelSumInterest.textContent = `${(sumIn * account.interestRate) / 100}`;
// };
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 166. Implementing Transfers
//////////////////////////////////////////////////////////////////////
let currentAccount;
let balance;

const displayMovements = function (account) {
  containerMovements.innerHTML = "";

  account.movements.forEach(function (movement, index) {
    const templateClone = movementTemplate.content.cloneNode(true);
    const typeElement = templateClone.querySelector(".movements__type");
    const dateElement = templateClone.querySelector(".movements__date");
    const amountElement = templateClone.querySelector(".movements__value");

    const movementType = movement > 0 ? "deposit" : "withdrawal";

    // Movement type
    typeElement.textContent = `${index + 1} ${movementType}`;
    typeElement.classList.add(`movements__type--${movementType}`);
    // Movement date
    if (movement.date) dateElement.textContent = movement.date;
    else {
      templateClone.querySelector(".movements__date").remove();
    }
    // Movement amount
    amountElement.textContent = `${movement}€`;

    containerMovements.prepend(templateClone);
  });
};

const displayCalculations = function (account) {
  account.sumIn = account.movements.reduce((accumulator, currentValue) =>
    currentValue > 0 ? accumulator + currentValue : accumulator
  );

  account.sumOut = account.movements.reduce(
    (accumulator, currentValue) =>
      currentValue < 0 ? accumulator + Math.abs(currentValue) : accumulator,
    0
  );

  account.interestSum = (account.sumIn * account.interestRate) / 100;

  account.balance = account.sumIn + account.interestSum - account.sumOut;

  labelSumIn.textContent = `${account.sumIn}€`;
  labelSumOut.textContent = `${account.sumOut}€`;
  labelBalance.textContent = `${account.balance}€`;
  labelSumInterest.textContent = `${account.interestSum}`;
};

btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();

  const recipientAcc = accounts.find(
    account => inputTransferTo.value === account.username
  );

  if (
    inputTransferTo.value !== currentAccount.username &&
    Number(inputTransferAmount.value) <= currentAccount.balance &&
    Number(inputTransferAmount.value) > 0 &&
    recipientAcc
  ) {
    recipientAcc.balance += Number(inputTransferAmount.value);
    currentAccount.balance -= Number(inputTransferAmount.value);
    currentAccount.sumOut += Number(inputTransferAmount.value);
    currentAccount.movements.push(Number(-inputTransferAmount.value));
    recipientAcc.movements.push(Number(inputTransferAmount.value));

    inputTransferTo.value = inputTransferAmount.value = "";
    inputTransferTo.blur();
    inputTransferAmount.blur();
    displayMovements(currentAccount);
    labelSumIn.textContent = `${currentAccount.sumIn}€`;
    labelSumOut.textContent = `${currentAccount.sumOut}€`;
    labelBalance.textContent = `${currentAccount.balance}€`;
  }
});
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 167. The findIndex Method
//////////////////////////////////////////////////////////////////////
btnClose.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    accounts.splice(
      accounts.findIndex(
        account =>
          account.username === inputCloseUsername.value &&
          account.pin === Number(inputClosePin.value)
      ),
      1
    );
    currentAccount = undefined;

    inputCloseUsername.value = "";
    inputClosePin.value = "";
    console.log(inputCloseUsername.textContent);
    inputClosePin.blur();
    inputCloseUsername.blur();

    labelWelcome.textContent = "Log in to get started";
    labelBalance.textContent = "0000€";
    containerMovements.innerHTML = "";
    labelSumIn.textContent = "0000€";
    labelSumOut.textContent = "0000€";
    labelSumInterest.textContent = "0000€";

    containerApp.removeAttribute("style");
  }
});
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 168. The New findLast and findLastIndex Methods
//////////////////////////////////////////////////////////////////////

// console.log(movements.findLast(movement => movement < 0));

// const movementsAmount =
//   movements.length -
//   movements.findLastIndex(movement => Math.abs(movement) > 2000);

// console.log(`Your latest large movement was ${movementsAmount} movements ago`);
// console.log(movements.findLastIndex(movement => movement > 2000));
// console.log(movements.findLast(x => x > 1000));
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 169. some and every
//////////////////////////////////////////////////////////////////////

btnLoan.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    currentAccount.movements.some(
      deposit => deposit >= inputLoanAmount.value * 0.1
    )
  ) {
    currentAccount.movements.push(Number(inputLoanAmount.value));

    displayCalculations(currentAccount);
    displayMovements(currentAccount);

    inputLoanAmount.value = "";
    inputLoanAmount.blur();
  }
});

const x = [1, [2, [3, 4]]];
console.log(x.flat());
console.log(x);

const y = [1, [2, 4], 4];
console.log(y.flatMap(val => val * 2));
// function addMovement(account, movement) {
//   account.movements.push(movement);
// }
//#endregion
//////////////////////////////////
