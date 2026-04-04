"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
//////////////////////////////////////////////////////////////////////
// #region 260. Our First AJAX Call: XMLHttpRequest
/////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   // request type + API URL
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     // AJAX requests return the response in JSON format
//     const [data] = JSON.parse(this.responseText);
//     // => { name: "Portugal", alpha2Code: "PT", alpha3Code: "PRT", ... }

//     const countryTemplate = document.getElementById("country-template");

//     const countryTemplateClone = countryTemplate.content.cloneNode(true);

//     const imageElement = countryTemplateClone.querySelector(".country__img");
//     const nameElement = countryTemplateClone.querySelector(".country__name");
//     const regionElement =
//       countryTemplateClone.querySelector(".country__region");
//     const populationElement =
//       countryTemplateClone.querySelector("[data-population]");
//     const languageElement =
//       countryTemplateClone.querySelector("[data-language]");
//     const currencyElement =
//       countryTemplateClone.querySelector("[data-currency]");

//     imageElement.src = data.flag;
//     nameElement.textContent = data.name;
//     regionElement.textContent = data.region;
//     populationElement.textContent = (data.population / 1000000).toFixed(1);
//     languageElement.textContent = data.languages[0].name;
//     currencyElement.textContent = data.currencies[0].name;

//     countriesContainer.append(countryTemplateClone);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("Portugal");
// #endregion
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// #region 262. Welcome to Callback Hell
///////////////////////////////////
// const renderCountry = function (
//   country,
//   { isNeighboringCountry = false } = {},
// ) {
//   const countryTemplate = document.getElementById("country-template");

//   const countryTemplateClone = countryTemplate.content.cloneNode(true);

//   const countryElement = countryTemplateClone.querySelector(".country");
//   const imageElement = countryTemplateClone.querySelector(".country__img");
//   const nameElement = countryTemplateClone.querySelector(".country__name");
//   const regionElement = countryTemplateClone.querySelector(".country__region");
//   const populationElement =
//     countryTemplateClone.querySelector("[data-population]");
//   const languageElement = countryTemplateClone.querySelector("[data-language]");
//   const currencyElement = countryTemplateClone.querySelector("[data-currency]");

//   if (isNeighboringCountry) countryElement.classList.add("neighbour");

//   imageElement.src = country.flag;
//   nameElement.textContent = country.name;
//   regionElement.textContent = country.region;
//   populationElement.textContent = (country.population / 1000000).toFixed(1);
//   languageElement.textContent = country.languages[0].name;
//   currencyElement.textContent = country.currencies[0].name;

//   countriesContainer.append(countryTemplateClone);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighboringCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const [country] = JSON.parse(request.response);
//     renderCountry(country);

//     const countryNeighborCode = country.borders?.[0];

//     if (!countryNeighborCode) return;

//     const countryNeighborRequest = new XMLHttpRequest();
//     countryNeighborRequest.open(
//       "GET",
//       `https://restcountries.com/v2/alpha/${countryNeighborCode}`,
//     );
//     countryNeighborRequest.send();
//     countryNeighborRequest.addEventListener("load", function () {
//       const countryNeighbor = JSON.parse(countryNeighborRequest.response);
//       renderCountry(countryNeighbor, { isNeighboringCountry: true });
//     });
//   });
// };

// getCountryAndNeighboringCountryData("Germany");

// // Callback hell example of a callback based async task chain that's not AJAX
// setTimeout(() => {
//   console.log("1 second has passed");
//   setTimeout(() => {
//     console.log("2 seconds have passed");
//     setTimeout(() => {
//       console.log("3 seconds have passed");
//       setTimeout(() => {
//         console.log("4 seconds have passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// console.log("This gets logged before all timeouts");
// #endregion
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// #region 264. Consuming Promises
///////////////////////////////////
// const renderCountry = function (
//   country,
//   { isNeighboringCountry = false } = {},
// ) {
//   const countryTemplate = document.getElementById("country-template");

//   const countryTemplateClone = countryTemplate.content.cloneNode(true);

//   const countryElement = countryTemplateClone.querySelector(".country");
//   const imageElement = countryTemplateClone.querySelector(".country__img");
//   const nameElement = countryTemplateClone.querySelector(".country__name");
//   const regionElement = countryTemplateClone.querySelector(".country__region");
//   const populationElement =
//     countryTemplateClone.querySelector("[data-population]");
//   const languageElement = countryTemplateClone.querySelector("[data-language]");
//   const currencyElement = countryTemplateClone.querySelector("[data-currency]");

//   if (isNeighboringCountry) countryElement.classList.add("neighbour");

//   imageElement.src = country.flag;
//   nameElement.textContent = country.name;
//   regionElement.textContent = country.region;
//   populationElement.textContent = (country.population / 1000000).toFixed(1);
//   languageElement.textContent = country.languages[0].name;
//   currencyElement.textContent = country.currencies[0].name;

//   countriesContainer.append(countryTemplateClone);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// btn.addEventListener("click", () => getCountryData("Poland"));
// #endregion
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// #region 265. Chaining Promises
///////////////////////////////////
// const renderCountry = function (
//   country,
//   { isNeighboringCountry = false } = {},
// ) {
//   const countryTemplate = document.getElementById("country-template");

//   const countryTemplateClone = countryTemplate.content.cloneNode(true);

//   const countryElement = countryTemplateClone.querySelector(".country");
//   const imageElement = countryTemplateClone.querySelector(".country__img");
//   const nameElement = countryTemplateClone.querySelector(".country__name");
//   const regionElement = countryTemplateClone.querySelector(".country__region");
//   const populationElement =
//     countryTemplateClone.querySelector("[data-population]");
//   const languageElement = countryTemplateClone.querySelector("[data-language]");
//   const currencyElement = countryTemplateClone.querySelector("[data-currency]");

//   if (isNeighboringCountry) countryElement.classList.add("neighbour");

//   imageElement.src = country.flag;
//   nameElement.textContent = country.name;
//   regionElement.textContent = country.region;
//   populationElement.textContent = (country.population / 1000000).toFixed(1);
//   languageElement.textContent = country.languages[0].name;
//   currencyElement.textContent = country.currencies[0].name;

//   countriesContainer.append(countryTemplateClone);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighboringCountryCode = data[0].borders?.[0];

//       if (!neighboringCountryCode) return;

//       return fetch(
//         `https://restcountries.com/v2/alpha/${neighboringCountryCode}`,
//       );
//     })
//     .then(response => response.json())
//     .then(neighboringCountry =>
//       renderCountry(neighboringCountry, { isNeighboringCountry: true }),
//     );
// };

// btn.addEventListener("click", () => getCountryData("Russia"));
// #endregion
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// #region 266. Handling Rejected Promises
///////////////////////////////////
// const renderCountry = function (
//   country,
//   { isNeighboringCountry = false } = {},
// ) {
//   const countryTemplate = document.getElementById("country-template");

//   const countryTemplateClone = countryTemplate.content.cloneNode(true);

//   const countryElement = countryTemplateClone.querySelector(".country");
//   const imageElement = countryTemplateClone.querySelector(".country__img");
//   const nameElement = countryTemplateClone.querySelector(".country__name");
//   const regionElement = countryTemplateClone.querySelector(".country__region");
//   const populationElement =
//     countryTemplateClone.querySelector("[data-population]");
//   const languageElement = countryTemplateClone.querySelector("[data-language]");
//   const currencyElement = countryTemplateClone.querySelector("[data-currency]");

//   if (isNeighboringCountry) countryElement.classList.add("neighbour");

//   imageElement.src = country.flag;
//   nameElement.textContent = country.name;
//   regionElement.textContent = country.region;
//   populationElement.textContent = (country.population / 1000000).toFixed(1);
//   languageElement.textContent = country.languages[0].name;
//   currencyElement.textContent = country.currencies[0].name;

//   countriesContainer.append(countryTemplateClone);
// };

// const renderError = function (errorMessage) {
//   countriesContainer.insertAdjacentText("beforeend", errorMessage);
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       return response.json();
//     })
//     .then(countries => {
//       const countryNeighborCode = countries[0].borders?.[0];

//       renderCountry(countries[0]);

//       if (!countryNeighborCode) return;
//       return fetch(`https://restcountries.com/v2/alpha/${countryNeighborCode}`);
//     })
//     .then(response => response.json())
//     .then(countryNeighbor =>
//       renderCountry(countryNeighbor, { isNeighboringCountry: true }),
//     )
//     .catch(error => {
//       console.error(error);
//       renderError(`Error: ${error.message}`);
//     })
//     // Always executes after the chain above it is settled, regardless of whether fulfilled or rejected
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", () => getCountryData("Poland"));
// #endregion
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// #region 267. Throwing Errors Manually
///////////////////////////////////

const renderCountry = function (
  country,
  { isNeighboringCountry = false } = {},
) {
  const countryTemplate = document.getElementById("country-template");

  const countryTemplateClone = countryTemplate.content.cloneNode(true);

  const countryElement = countryTemplateClone.querySelector(".country");
  const imageElement = countryTemplateClone.querySelector(".country__img");
  const nameElement = countryTemplateClone.querySelector(".country__name");
  const regionElement = countryTemplateClone.querySelector(".country__region");
  const populationElement =
    countryTemplateClone.querySelector("[data-population]");
  const languageElement = countryTemplateClone.querySelector("[data-language]");
  const currencyElement = countryTemplateClone.querySelector("[data-currency]");

  if (isNeighboringCountry) countryElement.classList.add("neighbour");

  imageElement.src = country.flag;
  nameElement.textContent = country.name;
  regionElement.textContent = country.region;
  populationElement.textContent = (country.population / 1000000).toFixed(1);
  languageElement.textContent = country.languages[0].name;
  currencyElement.textContent = country.currencies[0].name;

  countriesContainer.append(countryTemplateClone);
};

const renderError = function (errorMessage) {
  countriesContainer.insertAdjacentText("beforeend", errorMessage);
};

// // get data with regular fetch() and .then() methods
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Error: ${response.status} Country not found`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const codeOfNeighboringCountry = data[0].borders?.[0];
//       return fetch(
//         `https://restcountries.com/v2/alpha/${codeOfNeighboringCountry}`,
//       );
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(
//           `Error: ${response.status} Neighboring country not found`,
//         );
//       return response.json();
//     })
//     .then(neighboringCountry =>
//       renderCountry(neighboringCountry, { isNeighboringCountry: true }),
//     )
//     .catch(error => {
//       console.error(error);
//       renderError(`${error.message}`);
//     })
//     // Executes a callback when the Promise is settled (fulfilled or rejected)
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const fetchDataAndReturnJSON = function (url, errorMessage) {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(`Error: ${response.status} ${errorMessage}`);

    return response.json();
  });
};

// get data with a DRY helper function
const getCountryData = function (country) {
  fetchDataAndReturnJSON(
    `https://restcountries.com/v2/name/${country}`,
    "Country not found",
  )
    .then(data => {
      const countryNeighborCode = data[0].borders?.[0];
      renderCountry(data[0]);

      if (!countryNeighborCode)
        throw new Error("Neighboring country not found.");

      return fetchDataAndReturnJSON(
        `https://restcountries.com/v2/name/${countryNeighborCode}`,
        "Neighboring country not found",
      );
    })
    .then(countryNeighbor =>
      renderCountry(countryNeighbor[0], { isNeighboringCountry: true }),
    )
    .catch(error => {
      console.error(error);
      renderError(`${error.message}`);
    })
    // Executes a callback when the Promise is settled (fulfilled or rejected)
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", () => getCountryData("Brazil"));
// #endregion
//////////////////////////////////////////////////////////////////////
