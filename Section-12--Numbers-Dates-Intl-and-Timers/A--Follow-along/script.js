"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [
    { amount: 200, date: "2019-11-18T21:31:17.178Z" },
    { amount: 455.23, date: "2019-12-23T07:42:02.383Z" },
    { amount: -306.5, date: "2020-01-28T09:15:04.904Z" },
    { amount: 25000, date: "2020-04-01T10:17:24.185Z" },
    { amount: -642.21, date: "2020-05-08T14:11:59.604Z" },
    { amount: -133.9, date: "2020-05-27T17:01:17.194Z" },
    { amount: 79.97, date: "2025-10-14T21:36:17.929Z" },
    { amount: 1300, date: "2025-10-15T10:51:36.790Z" },
  ],
  interestRate: 1.2, // %
  pin: 1111,
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [
    { amount: 5000, date: "2019-11-01T13:15:33.035Z" },
    { amount: 3400, date: "2019-11-30T09:48:16.867Z" },
    { amount: -150, date: "2019-12-25T06:04:23.907Z" },
    { amount: -790, date: "2020-01-25T14:18:46.235Z" },
    { amount: -3210, date: "2020-02-05T16:33:06.386Z" },
    { amount: -1000, date: "2020-04-10T14:43:26.374Z" },
    { amount: 8500, date: "2020-06-25T18:49:59.371Z" },
    { amount: -30, date: "2020-07-26T12:01:20.894Z" },
  ],
  interestRate: 1.5,
  pin: 2222,
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

function formatMovementDate(movementDateRaw, locale) {
  const daysDiff = calcDaysPassed(movementDateRaw, new Date());

  if (daysDiff === 0) {
    return "today";
  } else if (daysDiff === 1) {
    return "yesterday";
  } else {
    // const movDate = movementDateRaw.getDate().toString().padStart(2, "0");
    // const movMonth = (movementDateRaw.getMonth() + 1)
    //   .toString()
    //   .padStart(2, "0");
    // const movYear = movementDateRaw.getFullYear();

    // return `${movDate}.${movMonth}.${movYear}`;

    const dateTimeOptions = {
      // weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    return Intl.DateTimeFormat(locale, dateTimeOptions).format(movementDateRaw);
  }
}

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? account.movements.slice().sort((a, b) => a.amount - b.amount)
    : account.movements;

  // labelDate.textContent = `${date}.${month}.${year} ${hour}:${minute}`;

  movs.forEach(function (mov, i) {
    const type = mov.amount > 0 ? "deposit" : "withdrawal";
    const displayDate = formatMovementDate(new Date(mov.date), account.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${internationalizeCurrency(
          account.locale,
          account.currency,
          mov.amount.toFixed(2)
        )}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

function internationalizeCurrency(locale, currency, value) {
  return Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
}

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov.amount, 0);
  labelBalance.textContent = internationalizeCurrency(
    acc.locale,
    acc.currency,
    acc.balance.toFixed(2)
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov.amount > 0)
    .reduce((acc, mov) => acc + mov.amount, 0);
  labelSumIn.textContent = internationalizeCurrency(
    acc.locale,
    acc.currency,
    incomes.toFixed(2)
  );

  const out = acc.movements
    .filter(mov => mov.amount < 0)
    .reduce((acc, mov) => acc + mov.amount, 0);
  labelSumOut.textContent = internationalizeCurrency(
    acc.locale,
    acc.currency,
    Math.abs(out).toFixed(2)
  );

  const interest = acc.movements
    .filter(mov => mov.amount > 0)
    .map(deposit => (deposit.amount * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = internationalizeCurrency(
    acc.locale,
    acc.currency,
    interest.toFixed(2)
  );
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
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

function calcDaysPassed(firstDate, secondDate) {
  // round movement date
  firstDate.setHours(0);
  firstDate.setMinutes(0);
  firstDate.setSeconds(0);
  firstDate.setMilliseconds(0);

  //round date today
  secondDate.setHours(0);
  secondDate.setMinutes(0);
  secondDate.setSeconds(0);
  secondDate.setMilliseconds(0);

  const diffDays = Math.abs(secondDate - firstDate) / (1000 * 60 * 60 * 24);
  const diffWeeks = Math.abs(
    Math.floor((secondDate - firstDate) / (1000 * 60 * 60 * 24 * 7))
  );
  const diffMonths = Math.abs(
    Math.floor((secondDate - firstDate) / (1000 * 60 * 60 * 24 * 30))
  );

  return diffDays;
}

///////////////////////////////////////
// Event handlers
let currentAccount;

// No login needed
// currentAccount = account1;
// containerApp.style.opacity = 100;
// updateUI(currentAccount);

function startLogoutTimer() {
  let secondsTillLogout = 300;

  function tick() {
    const minutes = Math.floor(secondsTillLogout / 60);
    const seconds = secondsTillLogout % 60;

    labelTimer.textContent = `${minutes.toString().padStart(2, 0)}:${seconds
      .toString()
      .padStart(2, 0)}`;

    if (secondsTillLogout === 0) {
      clearInterval(timerId);
      currentAccount = undefined;
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
      setTimeout(() => (labelTimer.textContent = "05:00"), 1000);
    }

    secondsTillLogout--;
  }

  tick();

  const timerId = setInterval(() => {
    tick();
  }, 1000);

  return timerId;
}

let timer;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    const dateTimeOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    // Browser locale setting
    const browsersCurrentLocale = navigator.language;

    labelDate.textContent = Intl.DateTimeFormat(
      currentAccount.locale,
      dateTimeOptions
    ).format(new Date());

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Timer setup
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

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
    currentAccount.movements.push({
      amount: -amount,
      date: new Date().toISOString(),
    });
    receiverAcc.movements.push({
      amount: amount,
      date: new Date().toISOString(),
    });

    // Update UI
    updateUI(currentAccount);
  }

  clearInterval(timer);
  timer = startLogoutTimer();
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(mov => mov.amount >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push({
      amount: amount,
      date: new Date().toISOString(),
    });

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";

  clearInterval(timer);
  timer = startLogoutTimer();
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  clearInterval(timer);
  timer = startLogoutTimer();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    clearInterval(timer);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;

  clearInterval(timer);
  timer = startLogoutTimer();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// Adding dates
const dateNow = new Date();

const date = dateNow.getDate().toString().padStart(2, "0");
const month = (dateNow.getMonth() + 1).toString().padStart(2, "0");
const year = dateNow.getFullYear();
const hour = dateNow.getHours().toString().padStart(2, "0");
const minute = dateNow.getMinutes().toString().padStart(2, "0");

// labelDate.textContent = Intl.DateTimeFormat("de-CH").format(new Date());

//////////////////////////////////////////////////////////////////////
//#region 190. Internationalizing Dates (Intl)
//////////////////////////////////////////////////////////////////////
// // @@@ Date/time parts @@@
// weekday:
// "long" => "Donnerstag"
// "short" => "Do"
// "narrow" => "D"

// era:
// "long" => "nach Christus"
// "short" => "n. Chr."
// "narrow" => "n. Chr."

// year:
// "numeric" => "2025"
// "2-digit" => "25"

// month:
// "numeric" => "1"
// "2-digit" => "01"
// "long" => "Januar"
// "short" => "Jan"
// "narrow" => "J"

// day:
// "numeric" => "23"
// "2-digit" => "23"

// hour:
// "numeric" => "16"
// "2-digit" => "16"

// minute:
// "numeric" => "30"
// "2-digit" => "30"

// second:
// "numeric" => "0"
// "2-digit" => "00"

// fractionalSecondDigits:
// 1 => "0.0"
// 2 => "0.00"
// 3 => "0.000"

// dayPeriod:
// "long" => "nachmittags"
// "short" => "nachm."
// "narrow" => "n"

// // @@@ Time zone & calendar @@@
// timeZone:
// "Europe/Zurich", "UTC"

// timeZoneName:
// "long" => "Mitteleuropäische Normalzeit"
// "short" => "MEZ"
// "longOffset" => "GMT+01:00"
// "shortOffset" => "GMT+1"
// "longGeneric" => "Mitteleuropäische Zeit"
// "shortGeneric" => "MEZ"

// // @@@ Hour format control @@@
// hour12:
// true => "4:30 nachm."
// false => "16:30"

// // @@@ Style presets @@@
// dateStyle:
// "full" => "Donnerstag, 23. Januar 2025"
// "long" => "23. Januar 2025"
// "medium" => "23.01.2025"
// "short" => "23.01.25"

// timeStyle:
// "full" => "16:30:00 Mitteleuropäische Normalzeit"
// "long" => "16:30:00 MEZ"
// "medium" => "16:30:00"
// "short" => "16:30"

// // @@@ Combined example @@@
// new Intl.DateTimeFormat("de-CH", {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
//   timeZoneName: "short",
// }).format(date);
// => "Donnerstag, 23. Januar 2025, 16:30 MEZ"
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 191. Internationalizing Numbers (Intl)
//////////////////////////////////////////////////////////////////////
// const randomNumber = 12341231.78;

// // Regular number
// new Intl.NumberFormat("en-US").format(randomNumber); // 12,341,231.78
// new Intl.NumberFormat("de-CH").format(randomNumber); // 12’341’231.78
// new Intl.NumberFormat("de-CH", { useGrouping: false }).format(randomNumber); // 12341231.78
// new Intl.NumberFormat("de-DE").format(randomNumber); // 12.341.231,78
// new Intl.NumberFormat("de-DE", { useGrouping: false }).format(randomNumber); // 12341231,78

// // Currency
// const options1 = {
//   style: "currency",
//   currency: "EUR",
// };

// new Intl.NumberFormat("en-US", options1).format(randomNumber); // €12,341,231.78
// new Intl.NumberFormat("de-CH", options1).format(randomNumber); // EUR 12’341’231.78
// new Intl.NumberFormat("de-DE", options1).format(randomNumber); // 12.341.231,78 €

// // Temperature
// const options2 = {
//   style: "unit",
//   unit: "celsius",
// };

// new Intl.NumberFormat("en-US", options2).format(40); // 40°C
// new Intl.NumberFormat("de-CH", options2).format(40); // 40 °C

// // Percentage
// new Intl.NumberFormat("en-US", {
//   style: "percent",
// }).format(0.105); // 11%
// new Intl.NumberFormat("en-US", {
//   style: "percent",
//   minimumFractionDigits: 2,
// }).format(0.1); // 10.00%
// new Intl.NumberFormat("en-US", {
//   style: "percent",
//   maximumFractionDigits: 2,
// }).format(0.10545); // 10.55%
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region 191. Internationalizing Numbers (Intl)
//////////////////////////////////////////////////////////////////////
const ingredients = ["pineapple", "olives"];

const pizzaTimer = setTimeout(
  (ingridient1, ingridient2) =>
    console.log(`Here's your pizza with ${ingridient1} and ${ingridient2}!`),
  1000,
  ...ingredients
);

if (ingredients.includes("pineapple")) clearTimeout(pizzaTimer);

function tick() {
  const time = new Date();
  console.log(time.toLocaleTimeString());
}

tick(); // runs immediately

const timeTicker = setInterval(() => {
  tick(); // first run after 1000ms, then every 1000ms after that
}, 1000);

clearInterval(timeTicker);
//#endregion
//////////////////////////////////
