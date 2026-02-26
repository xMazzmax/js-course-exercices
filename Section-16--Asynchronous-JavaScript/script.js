"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

const renderCountry = function (country, neighbor = false) {
  const countriesContainer = document.querySelector(".countries");
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

  if (neighbor) countryElement.classList.add("neighbour");
  imageElement.src = country.flag;
  nameElement.textContent = country.name;
  regionElement.textContent = country.region;
  populationElement.textContent = (country.population / 1000000).toFixed(1);
  languageElement.textContent = country.languages[0].name;
  currencyElement.textContent = country.currencies[0].name;

  countriesContainer.append(countryTemplateClone);

  countriesContainer.style.opacity = 1;
};

const getCountryAndCountryNeighborData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    const [country] = JSON.parse(request.response);
    renderCountry(country);

    const countryNeighborCode = country.borders?.[0];

    if (!countryNeighborCode) return;

    const countryNeighborRequest = new XMLHttpRequest();
    countryNeighborRequest.open(
      "GET",
      `https://restcountries.com/v2/alpha/${countryNeighborCode}`,
    );
    countryNeighborRequest.send();
    countryNeighborRequest.addEventListener("load", function () {
      const countryNeighbor = JSON.parse(countryNeighborRequest.response);
      console.log(countryNeighbor);
      renderCountry(countryNeighbor, true);
    });
  });
};

getCountryAndCountryNeighborData("Germany");
// getCountryAndCountryNeighborData("usa");
