"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = +acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//////////////////////////////////////////////////////////////////////
//#region 181. Converting and Checking Numbers
//////////////////////////////////////////////////////////////////////
// // In JS, numbers are saved as floats
// 23 === 23.0; // true

// // Many decimal fractions can't be represented exactly in binary (base 2) and must be rounded, just like 1/3 in decimal (base 10).
// // In the following example, the rounding error is large enough to show up within JS's ~17 digits of decimal precision
// console.log(0.1 + 0.2); // 0.30000000000000004

// // Regular string
// console.log("10"); // "10"
// // Type conversion (explicit)
// console.log(Number("10")); // 10
// // Type coercion (implicit)
// console.log(+"10"); // 10

// // Parsing (extraction of the Number type)
// console.log(Number.parseInt("20.5px")); // 20
// // The value must start with the number to be parsed
// console.log(Number.parseInt("x20.5px")); // NaN
// console.log(Number.parseFloat("20.5px")); // 20.5
// console.log(Number.parseFloat("20.5rem")); // 20.5

// // Returns true if the value is NaN
// console.log(Number.isNaN(20)); // false
// console.log(Number.isNaN(Number.parseInt("x20.5px"))); // true

// // Returns true if the value is finite and of type Number
// console.log(Number.isFinite(20.5)); // true
// console.log(Number.isFinite("20.5")); // false
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 182. Math and Rounding
//////////////////////////////////////////////////////////////////////
// Power
2 ** 3; // 8
Math.pow(2, 3); // 8

// Square root
Math.sqrt(25); // 5
Math.sqrt(25) === 25 ** (1 / 2); // true
// Cube root
8 ** (1 / 3); // 2

Math.min(10, 6, 2, 88, 9); // 2
Math.max(10, 6, 2, 88, 9); // 88
// Does type coercion
Math.max(10, 6, 2, "88", 9); // 88

// Calculate the area of a circle with PI
Number((Math.PI * Number.parseFloat("10px") ** 2).toFixed(2));

// Remove decimals
Math.trunc(-10.123); // 10

// All roundning methods do type coercion
// Round to closest int
Math.round(10.6); // 11
Math.round("10.6"); // 11
// Round down
Math.floor(10.6); // 10
Math.floor("10.6"); // 10
Math.floor(-10.6); // -11 (more negative)
// Round up
Math.ceil(10.6); // 11
Math.ceil("10.6"); // 11
Math.ceil(-10.6); // -10 (less negative)
// Round to the specified decimal (returns the number as a string!)
(2.38).toFixed(1); // "2.4"
+(2.38).toFixed(1); // 2.4

// Return the absolute value
Math.abs(-7); // 7

// Generates a random number between min and max including
function randomIntInclusiveBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Clamping restricts ta number between a min and max value
// It returns the min value if the number is below it
// Returns the max value if the number is above is
// Or returns the number itself if it's between min and max
function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

clamp(15, 0, 10); // 10 (too big, so capped at max)
clamp(-5, 0, 10); // 0  (too small, so raised to min)
clamp(7, 0, 10); // 7  (within range, stays as is)
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 183. The Remainder Operator
//////////////////////////////////////////////////////////////////////
// Returns the remainder from dividing the first by the second number
7 % 3; // 1

// Return even vs odd numbers
const isEven = number => number % 2 === 0;
isEven(3); // false

// Cycling
let turn = 6;
const players = ["Alice", "Bob", "Clara", "Dave"];

players[(turn - 1) % players.length]; // Bob
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 184. Numeric Separators
//////////////////////////////////////////////////////////////////////
// Used to visually read long numbers more easily
// JS ignores the separator when the number gets parsed
const longNumber = 999_999_999; // 999999999999

// const q = 999__999__999; // SyntaxError
// const w = _999999999; // SyntaxError
// const e = 999999999_; // SyntaxError
// const r = 999._999._999; // SyntaxError

const aParsedString = Number("999_999_999_999"); // NaN
const anotherParsedString = parseInt("999_999"); // 999
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 185. Working with BigInt
//////////////////////////////////////////////////////////////////////
// ❌ After exceeding a certain JS only handles values of type Number until a certain limit. When , it gets rounded to the nearest representable value, leading to precision loss.
9007199254740991900719;
// => 9.007199254740992e+21

// ❌ Too big => precision loss
9007199254740991.99;
// => 9007199254740992

// ✔️ Biggest value of type Number JS can represent
9007199254740991;
// => 9007199254740991
Number.MAX_SAFE_INTEGER;
// => 9007199254740991
Number.isSafeInteger(9007199254740990); // true
Number.isSafeInteger(9007199254740991); // true
Number.isSafeInteger(9007199254740992); // false

// ✔️ BigInt can save any value size
90071992547409919007199254740991n;
// => 90071992547409919007199254740991n

// ❌ SyntaxError: BigInt literals must be int (no decimals)
// 9007199254740991.99n;

// ❌ TypeError: Can't mix BigInt and Number in calculations
// 9007199254740991900719n + 1;

// ✔️ Must use values of the same type in calculations
9007199254740991900719n + 1n;
// => 9007199254740991900720n

// ❌ Numeric literals are first parsed as a Number, causing precision loss when exceeding max safe int, before being parsed as BigInt
BigInt(9007199254740991900719);
// => 9007199254740992000000n

// ✔️ The value keeps its precision since its defined as a BigInt literal
BigInt(9007199254740991900719n);
// => 9007199254740991900719n

// ✔️ Strings (e.g. from user inputs) are parsed directly as BigInt, avoiding precision loss
BigInt("9007199254740991900719");
// => 9007199254740991900719n

// ❌ TypeError: Numbers must be of the same type for calculations
// BigInt(9007199254740991n + 1);

// ❌ TypeError: Can't stringify BigInt directly
// JSON.stringify({ x: 1n });

// ✔️ Safe after converting
JSON.stringify({ x: 1n.toString() });
JSON.stringify({ x: Number(1n) });

// Math.* only works with Number
// Operators work with values of the same type

// BigInt gets rid of decimals in divisions
5n / 3n; // 1n
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 186. Creating Dates
//////////////////////////////////////////////////////////////////////
// Current timestamp in milliseconds since 01 Jan 1970, 00:00:00 UTC
Date.now(); // 1759210503536

// Creating a new Date in the current local timezone
new Date(); // Tue Sep 23 2025 17:24:11 GMT+0200 (Mitteleuropäische Normalzeit)

// Creating a new Date from a timestamp
new Date(1759210503536);

// Only date strings in the ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) are reliably parsed
new Date("2025-09-23"); // always parsed the same way
new Date("09/23/2025"); // locale dependent, valid in some environments, invalid in others

// Using numbers skips parsing and directly sets the subparts of a date
// new Date(Year, Month (0-11), Day, Hour, Minute, Second, Millisecond);
new Date(2025, 0, 23, 15, 30, 0); // local time date
// => Thu Jan 23 2025 15:30:00 GMT+0100 (Mitteleuropäische Normalzeit)
new Date(2025, 0, 23, 15, 30, 0).toISOString();
// => 2025-01-23T14:30:00.000Z
new Date(Date.UTC(2025, 0, 23, 15, 30, 0)).toISOString();
// => 2025-01-23T15:30:00.000Z

// Ommitted arguments default to their minimum values
new Date(2025, 0);
// => Wed Jan 01 2025 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit)

// Overflowing values roll over to the next larger unit (2025 Dec 32 becomes 2026 Jan 1)
new Date(2025, 11, 31); // Dec 32 2025 => Jan 01 2026
new Date(2025, 12); // 11 = Dec // Month 12 2025 => Jan 2026

const randomDate = new Date(2025, 0, 23, 15, 30, 0);
// => Thu Jan 23 2025 15:30:00 GMT+0100 (Mitteleuropäische Normalzeit)
randomDate.toISOString(); // 2025-01-23T14:30:00.000Z (Z => always UTC)
randomDate.getTime(); // 1737642600000 (timestamp of ms since 01.01.1970 00:00:00 UTC)

// Time subpart getters (local time unless using UTC method variants)
randomDate.getFullYear(); // 2025
// Time subpart setter (returns timestamp in ms since unix epoch)
randomDate.setFullYear(2030); // 1895409000000

randomDate.getMonth(); // 0 (0 = january)
randomDate.getDate(); // 23
randomDate.getDay(); // 4 (weekday, 0 = sunday)

randomDate.getHours(); // 15 (local time)
randomDate.getUTCHours(); // 14 (UTC time)

randomDate.getMinutes(); // 30
randomDate.getSeconds(); // 0
randomDate.getMilliseconds(); // 0

console.log(new Date(2025, 12));
//#endregion
//////////////////////////////////
