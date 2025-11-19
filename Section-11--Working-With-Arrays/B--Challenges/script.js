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
//#region Coding Challenge #1
//////////////////////////////////////////////////////////////////////

// // Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// // Tasks:
// //
// // Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
// //
// // 1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// // 2. Create an array with both Julia's (corrected) and Kate's data
// // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")
// function checkDogs(dogsJulia, dogsKate) {
//   const dogsJuliaUpdated = dogsJulia.slice();

//   dogsJuliaUpdated.splice(0, 1);
//   dogsJuliaUpdated.splice(2, 2);

//   const allDogAges = dogsJuliaUpdated.concat(dogsKate);

//   allDogAges.forEach((age, index) => {
//     const maturity =
//       age > 2 ? `an adult, and is ${age} years old` : "still a puppy";

//     console.log(`Dog number ${index + 1} is ${maturity}`);
//   });
// }

// // 4. Run the function for both test datasets

// // Test data:
// //
// // - Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// // - Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const julia1 = [3, 5, 2, 12, 7];
// const kate1 = [4, 1, 15, 8, 3];

// const julia2 = [9, 16, 6, 8, 3];
// const kate2 = [10, 5, 6, 1, 4];

// console.log("__DATA_1________________________________");
// checkDogs(julia1, kate1);
// console.log("__DATA_2________________________________");
// checkDogs(julia2, kate2);
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region Coding Challenge #2
//////////////////////////////////////////////////////////////////////

// // Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// // Your tasks:

// // Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// // 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4

// // 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

// // 3. Calculate the average human age of all adult dogs

// // 4. Run the function for both test datasets

// // Test data:
// // - Data 1: [5, 2, 4, 1, 15, 8, 3]
// // - Data 2: [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age > 18)
//     .reduce(
//       (accumulator, currentAge, _, array) =>
//         accumulator + currentAge / array.length,
//       0
//     );

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region Coding Challenge #4 (old)
//////////////////////////////////////////////////////////////////////

// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little. Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite. Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// Your tasks:

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array.
// Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

// dogs.forEach(dog => (dog.recommendedFood = dog.weight ** 0.75 * 28));

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little.

// const sarahsDog = dogs.find(dog => dog.owners.includes("Sarah"));

// if (sarahsDog.curFood < sarahsDog.recommendedFood * 0.9)
//   console.log("The dog isn't eating enough.");
// else if (sarahsDog.curFood > sarahsDog.recommendedFood * 1.1)
//   console.log("The dog is eating too much.");
// else console.log("The dog is eating the right amount.");

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

// const dogsEatTooMuch = dogs.filter(
//   dog => dog.curFood > dog.recommendedFood * 1.1
// );
// const dogsEatTooLittle = dogs.filter(
//   dog => dog.curFood < dog.recommendedFood * 0.9
// );

// console.log(dogsEatTooMuch);
// console.log(dogsEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

// ownersEatTooMuch.forEach(dog => {
//   const joinOwners = dog.owners.join("'s and ");
//   console.log(`${ownersConcat}'s dogs eat too much`);
// });
// ownersEatTooLittle.forEach(dog => {
//   const joinOwners = dog.owners.join("'s and ");
//   console.log(`${ownersConcat}'s dogs eat too little`);
// });

// 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)

// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6. Log to the console whether there is any dog eating an okay amount of food (just true or false)

// console.log(
//   dogs.some(
//     dog =>
//       dog.curFood > dog.recommendedFood * 0.9 &&
//       dog.curFood < dog.recommendedFood * 1.1
//   )
// );

// 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)

// console.log(
//   dogs.filter(
//     dog =>
//       dog.curFood > dog.recommendedFood * 0.9 &&
//       dog.curFood < dog.recommendedFood * 1.1
//   )
// );

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects

// console.log(dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood));
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region Coding Challenge #4 (new)
//////////////////////////////////////////////////////////////////////

// TEST DATA:

const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
  },
  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["swimming", "fetch"],
  },
  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["digging", "fetch"],
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },
  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
  },
  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["agility", "fetch"],
  },
];

// // This time, Julia and Kate are studying the activity levels of different dog breeds.

// // YOUR TASKS:
// // 1. Store the the average weight of a "Husky" in a variable "huskyWeight"

// const huskyWeight = breeds.find(breed => breed.breed === "Husky").averageWeight;
// const huskyWeight = breeds.reduce(
//   (acc, currVal, _, arr) => currVal.averageWeight / arr.length + acc,
//   0
// );

// // 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)

// console.log(
//   breeds.find(
//     breed =>
//       breed.activities.includes("running") && breed.activities.includes("fetch")
//   )
// );

// // 3. Create an array "allActivities" of all the activities of all the dog breeds

// const allActivities = breeds.flatMap(val => val.activities);

// // 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.

// const uniqueActivities = [...new Set(allActivities)];

// // 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".

// const swimmingAdjacent = [
//   ...new Set(
//     breeds
//       .filter(breed => breed.activities.includes("swimming"))
//       .flatMap(breed => breed.activities)
//       .filter(activity => activity !== "swimming")
//   ),
// ];

// // 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".

// console.log(breeds.every(breed => breed.averageWeight >= 10));

// // 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

// console.log(breeds.some(breed => breed.activities.length >= 3));

// // BONUS: What's the average weight of the heaviest breed that likes to fetch?

// console.log(
//   breeds
//     .filter(breed => breed.activities.includes("fetch"))
//     .reduce((previousValue, currentValue) =>
//       previousValue.averageWeight > currentValue.averageWeight
//         ? previousValue
//         : currentValue
//     ).averageWeight
// );
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region BONUS EXERCICES
//////////////////////////////////////////////////////////////////////

// // ((1)) Sum of all deposits across all accounts
// const bankDepositsSum1 = accounts.reduce(
//   (acc, curr) =>
//     acc +
//     curr.movements.reduce(
//       (secondaryAcc, movement) =>
//         movement > 0 ? secondaryAcc + movement : secondaryAcc,
//       0
//     ),
//   0
// );

// const bankDepositsSum2 = accounts
//   .flatMap(account => account.movements)
//   .reduce(
//     (accumulator, currentValue) =>
//       currentValue > 0 ? accumulator + currentValue : accumulator,
//     0
//   );

// console.log(bankDepositsSum1);
// console.log(bankDepositsSum2);

// // ((2)) Count how many deposits >= 1'000 have been made
// const bankDepositsOver1k1 = accounts
//   .flatMap(account => account.movements)
//   .filter(mov => mov >= 1000).length;

// const bankDepositsOver1k2 = accounts.reduce(
//   (counter, currentAccount) =>
//     counter +
//     currentAccount.movements.reduce(
//       (counter, currentMovement) =>
//         currentMovement >= 1000 ? counter + 1 : counter,
//       0
//     ),
//   0
// );

// const bankDepositsOver1k3 = accounts
//   .flatMap(account => account.movements)
//   .reduce(
//     (counter, currentMovement) =>
//       currentMovement >= 1000 ? counter + 1 : counter,
//     0
//   );

// console.log(bankDepositsOver1k3);

// // ((3)) Create an object that contains the sum of the deposits and the sum of the withdrawals
// let sumsObject = accounts
//   .flatMap(account => account.movements)
//   .reduce(
//     (accumulator, currentMovement) => {
//       currentMovement > 0
//         ? (accumulator.depositsSum += currentMovement)
//         : (accumulator.withdrawalsSum += currentMovement);
//       return accumulator;
//     },
//     { depositsSum: 0, withdrawalsSum: 0 }
//   );

// console.log(sumsObject);

// // ((4)) Create a function that converts any string to a title case
// function toTitleCase(string) {
//   const lowerCaseOnlyWords = [
//     "a",
//     "an",
//     "and",
//     "the",
//     "but",
//     "or",
//     "in",
//     "on",
//     "with",
//   ];

//   function capitalizeFirstLetter(str) {
//     return str.replace(str[0], str[0].toUpperCase());
//   }

//   return capitalizeFirstLetter(
//     string
//       .trim()
//       .toLowerCase()
//       .split(" ")
//       .map(substring =>
//         lowerCaseOnlyWords.includes(substring)
//           ? substring
//           : capitalizeFirstLetter(substring)
//       )
//       .join(" ")
//   );
// }

// console.log(toTitleCase("the beauty and the beast"));
// console.log(toTitleCase("PUSS IN BOOTS"));
//#endregion
//////////////////////////////////

//////////////////////////////////////////////////////////////////////
//#region Coding Challenge #5 (new)
//////////////////////////////////////////////////////////////////////
// Coding Challenge #5

// Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
  { weight: 18, curFood: 244, owners: ["Joe"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// - Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// - Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// - Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

// YOUR TASKS:
// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));

// // 2. Find Sarah's dog and log to the console whether it's eating too much or too little.
// const sarahsDog = dogs.find(dog => dog.owners.includes("Sarah"));
// console.log(
//   "Sarah's dog is eating " +
//     (sarahsDog.curFood > sarahsDog.recFood ? "too much" : "too little")
// );

// // 3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
// const ownersTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood)
//   .flatMap(dog => dog.owners);
// const ownersTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood)
//   .flatMap(dog => dog.owners);

// console.log(ownersTooMuch);
// console.log(ownersTooLittle);

// // 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// function logIt(owners, foodAmount) {
//   if (foodAmount === "too much")
//     console.log(
//       owners.reduce((previousValue, currentValue, index, array) =>
//         index !== array.length - 1
//           ? `${previousValue}'s, ${currentValue}`
//           : `${previousValue}'s, and ${currentValue}'s dogs eat too much!`
//       )
//     );
//   else
//     console.log(
//       owners.reduce((previousValue, currentValue, index, array) =>
//         index !== array.length - 1
//           ? `${previousValue}'s, ${currentValue}`
//           : `${previousValue}'s, and ${currentValue}'s dogs eat too little!`
//       )
//     );
// }

// logIt(ownersTooMuch, "too much");
// logIt(ownersTooLittle, "too little");

// // 5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// // 6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
// const dogIsEatingOkay = dog =>
//   dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1;

// console.log(dogs.every(dogIsEatingOkay));

// // 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// console.log(dogs.filter(dogIsEatingOkay));

// 8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.

// // Solution with .reduce():
// const dogGroups = dogs.reduce(
//   (prevVal, currDog) => {
//     if (currDog.curFood > currDog.recFood) prevVals.tooMuch.push(currDog);
//     else if (currDog.curFood < currDog.recFood) prevVals.tooLittle.push(currDog);
//     else prevVals.exact.push(currDog);

//     return prevVal;
//   },
//   { exact: [], tooMuch: [], tooLittle: [] }
// );

// // Solution with .groupBy():
// console.log(
//   Object.groupBy(dogs, dog => {
//     if (dog.curFood === dog.recFood) return "exact";
//     else if (dog.curFood > dog.recFood) return "tooMuch";
//     else return "tooLittle";
//   })
// );

// console.log(dogGroups);

// // 9. Group the dogs by the number of owners they have
// // Solution with .reduce():
// const dogsByNumberOfOwners = dogs.reduce((prevVals, currDog) => {
//   if (!prevVals[[`${currDog.owners.length} owners`]])
//     prevVals[`${currDog.owners.length} owners`] = [];

//   prevVals[`${currDog.owners.length} owners`].push(currDog);

//   return prevVals;
// }, {});

// // Solution with .groupBy():
// console.log(
//   Object.groupBy(dogs, dog =>
//     dog.owners.length <= 1
//       ? `${dog.owners.length} owner`
//       : `${dog.owners.length} owners`
//   )
// );

// console.log(dogsByNumberOfOwners);

// // 10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!
// const dogsSortedByRecFoodAsc = dogs.toSorted((a, b) => a.recFood - b.recFood);
// console.log(dogsSortedByRecFoodAsc === dogs); // false
//#endregion
//////////////////////////////////
