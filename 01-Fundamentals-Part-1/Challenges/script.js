// /////////////////
// // Challenge #1
// /////////////////

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHigherBMI = BMIMark > BMIJohn;

// console.log("Mark's BMI: " + BMIMark);
// console.log("John's BMI: " + BMIJohn);
// console.log("Mark's BMI is higher than John's: " + markHigherBMI);

// /////////////////
// // Challenge #3
// /////////////////
// let scoreDolphins = (97 + 112 + 101) / 3;
// let scoreKoalas = (109 + 95 + 106) / 3;

// let test = prompt("What's your name?");

// if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy");
// } else if (
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100 &&
//   scoreDolphins == scoreKoalas
// ) {
//   console.log("Both win the trophy");
// } else {
//   console.log("No one wins");
// }

/////////////////
// Challenge #4
/////////////////
const bill = 200;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
