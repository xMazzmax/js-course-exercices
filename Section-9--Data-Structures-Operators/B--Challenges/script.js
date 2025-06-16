"use strict";

//////////////////////////////////
//#region Challenge #1
//////////////////////////////////

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// We're building a football betting app.
// Suppose we get data from a web service about a certain game. In this challenge we're gonna work with that data.

// Tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')

// const [players1, players2] = game.players;
// console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// const [gk, ...fieldplayers] = game.players[0];
// console.log(gk, fieldplayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

// const players1Final = [...game.players[0], "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// const { team1, x: draw, team2 } = game.odds;
// or more challenging solution
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// Test data: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// function printGoals(...players) {
//   let allPlayers = "";

//   for (let i = 0; i < players.length; i++) {
//     allPlayers += `${players[i]}, `;
//   }

//   console.log(`${allPlayers}scored a total of ${players.length} goals`);
// }

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

// game.odds.team1 < game.odds.team2 &&
//   console.log(`${game.team1} is more likely to win`);
// game.odds.team1 > game.odds.team2 &&
//   console.log(`${game.team2} is more likely to win`);
//#endregion
//////////////////////////////////

//////////////////////////////////
//#region Challenge #2
//////////////////////////////////

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// Let's continue with our football betting app! Keep using the 'game' variable from before.

// Tasks:

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// for (const [index, player] of Object.values(game.scored).entries())
//   console.log(`Goal ${index + 1}: ${player}`);

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// let startingValue = 0;

// console.log(
//   Number(
//     (
//       Object.values(game.odds).reduce((accumulatedValue, currentValue) => accumulatedValue + currentValue, startingValue)
//       / Object.values(game.odds).length
//     ).toFixed(2)
//   )
// );

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:

//   Odds of victory Bayern Munich: 1.33
//   Odds of draw: 3.25
//   Odds of victory Borrussia Dortmund: 6.5

// for (const [savedLabel, odd] of Object.entries(game.odds)) {
//   let printedLabel = game[savedLabel] ? `victory ${game[savedLabel]}` : "draw";

//   console.log(`Odds of ${printedLabel}: ${odd}`);
// }

// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names

// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:

// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }

// let scorers = { Lewandowski: 0 };

// for (const player of game.scored) {
//   Object.hasOwn(scorers, player) ? scorers[player]++ : (scorers[player] = 1);

//   // sample solution
//   // scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log(scorers);

// scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//#endregion
//////////////////////////////////

//////////////////////////////////
//#region Coding Challenge #3
//////////////////////////////////

// Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// Your tasks:

// 1. Create an array 'events' of the different game events that happened (no duplicates)

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

// gameEvents.delete(64);
// console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//   [FIRST HALF] 17: ⚽ GOAL

// for (const [timestamp, event] of gameEvents) {
//   const half = console.log(
//     `${
//       timestamp <= 45 ? "[FIRST HALF]" : "[SECOND HALF]"
//     } ${timestamp}: ${event}`
//   );
// }
//#endregion
//////////////////////////////////

//////////////////////////////////
//#region Coding Challenge #4
//////////////////////////////////

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

// Test data (pasted to textarea, including spaces):
/*
underscore_case 
first_name 
Some_Variable  
calculate_AGE 
delayed_departure 
*/

// Should produce this output (5 separate console.log outputs):
/*
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   let text = document.querySelector("textarea").value;

//   const substrings = text
//     // Formats to lower case
//     .toLowerCase()
//     // Replaces all linebreaks by commas
//     .replaceAll("\n", ",")
//     // Makes an array of substrings with the commas as their separator
//     .split(",");

//   const cleanedSubstrings = [];

//   for (const [index, value] of substrings.entries()) {
//     cleanedSubstrings.push(
//       value
//         // Removes all whitespace before and after the variable name
//         .trim()
//         // Replaces the underscores and the following character by the character in upper case
//         .replaceAll(
//           value.slice(value.indexOf("_"), value.indexOf("_") + 2),
//           value
//             .slice(value.indexOf("_") + 1, value.indexOf("_") + 2)
//             .toUpperCase()
//         )
//         // Adds whitespace until max length (20 char) of the whole string is reached
//         .padEnd(20) +
//         // Adds the emoji times the index number of the array entry + 1
//         "✅".repeat(index + 1)
//     );
//   }

//   for (const camelCaseVariable of cleanedSubstrings)
//     console.log(camelCaseVariable);
// });

// // Sample solution
// document.querySelector("button").addEventListener("click", function () {
//   let text = document.querySelector("textarea").value;

//   const substrings = text
//     // Formats to lower case
//     .toLowerCase()
//     // Makes an array of substrings with the linebreaks as their separator
//     .split("\n");

//   for (const [index, value] of substrings.entries()) {
//     // Removes all whitespace before and after the variable name and splits it into two string using _ as their separator
//     const [firstSubstring, secondSubstring] = value.trim().split("_");

//     // Replaces the first character of the second substring by the same character in upper case
//     const variableInCamelCase = `${firstSubstring}${secondSubstring.replace(
//       secondSubstring[0],
//       secondSubstring[0].toUpperCase()
//     )}`;

//     // Adds whitespace until max length (20 char) of the whole string is reached
//     // Adds the emoji times the index number of the array entry + 1
//     console.log(`${variableInCamelCase.padEnd(20)} ${"✅".repeat(index + 1)}`);
//   }
// });

//#endregion
//////////////////////////////////
