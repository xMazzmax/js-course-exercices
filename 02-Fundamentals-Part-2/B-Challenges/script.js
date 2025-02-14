"use strict";
// /////////////////
// // Challenge #1
// /////////////////

// const calcAverage = (firstScore, secondScore, thirdScore) =>
//   (firstScore + secondScore + thirdScore) / 3;

// const scoreDolphins1 = calcAverage(44, 23, 71);
// const scoreKoalas1 = calcAverage(65, 54, 49);
// const scoreDolphins2 = calcAverage(85, 54, 41);
// const scoreKoalas2 = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins");
//   }
// }

// checkWinner(scoreDolphins1, scoreKoalas1);
// checkWinner(scoreDolphins2, scoreKoalas2);

// /////////////////
// // Challenge #2
// /////////////////

// const bills = [125, 555, 44];
// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// console.log(bills);
// console.log(tips);
// console.log(total);

// /////////////////
// // Challenge #3
// /////////////////

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },

//   getHigherBMI: function () {},
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// console.log(
//   mark.calcBMI() > john.calcBMI()
//     ? `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//         john.fullName
//       }'s (${john.calcBMI()})!`
//     : `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//         mark.fullName
//       }'s (${mark.calcBMI()})!`
// );

/////////////////
// Challenge #4
/////////////////

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

// console.log(bills);
// console.log(tips);
// console.log(totals);

function calcAverage(arr) {
  let arrSum = 0;

  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }

  return arrSum / arr.length;
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
