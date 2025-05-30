"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//////////////////////////////////
//#startregion Challenge #1
//////////////////////////////////

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
//#startregion Challenge #2
//////////////////////////////////

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
