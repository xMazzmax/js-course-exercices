// // Values and variables
// let country = "Switzerland";
// let continent = "Europe";
// let population = 9;

// console.log("// Values and variables");

// console.log("country: " + country);
// console.log("continent: " + continent);
// console.log("population: " + population);
// /* -------------------------------------------- */

// // Data types
// let isIsland = false;
// let language;

// console.log();
// console.log("// Data types");

// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);
// /* -------------------------------------------- */

// // let, const and var
// language = "German";

// const constCountry = "Switzerland";
// const constContinent = "Europe";
// const constIsIsland = false;
// /* -------------------------------------------- */

// // Basic Operators
// const description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;

// console.log();
// console.log("// Basic Operators");

// console.log(population / 2);
// console.log(population++);
// console.log(population > 6);
// console.log(population > 33);
// console.log(description);
// /* -------------------------------------------- */

// // The switch statement

const day = "sunday";

// switch (day) {
//   case "monday":
//     console.log("Do meetings");
//     break;
//   case "tuesday":
//   case "wednesday":
//     console.log("Code");
//     break;
//   case "thursday":
//     console.log("Test");
//     break;
//   case "friday":
//     console.log("Deploy");
//     break;
//   case "saturday":
//     console.log("Chill");
//     break;
//   case "sunday":
//     console.log("Plan the upcoming week");
//     break;
//   default:
//     console.log("Input is not a valid day");
//     break;
// }

if (day === "monday") {
  console.log("Do meetings");
} else if (day === "tuesday" || day === "wednesday") {
  console.log("Code");
} else if (day === "thursday") {
  console.log("Test");
} else if (day === "friday") {
  console.log("Deploy");
} else if (day === "saturday") {
  console.log("Chill");
} else if (day === "sunday") {
  console.log("Plan the upcoming week");
} else {
  console.log("Input is not a valid day");
}
