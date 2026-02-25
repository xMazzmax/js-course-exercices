"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    const [response] = JSON.parse(this.response);
    const countriesContainer = document.querySelector(".countries");
    const countryTemplate = document.getElementById("country-template");

    const countryTemplateClone = countryTemplate.content.cloneNode(true);

    const imageElement = countryTemplateClone.querySelector(".country__img");
    const nameElement = countryTemplateClone.querySelector(".country__name");
    const regionElement =
      countryTemplateClone.querySelector(".country__region");
    const populationElement =
      countryTemplateClone.querySelector("[data-population]");
    const languageElement =
      countryTemplateClone.querySelector("[data-language]");
    const currencyElement =
      countryTemplateClone.querySelector("[data-currency]");

    imageElement.src = response.flag;
    nameElement.textContent = response.name;
    regionElement.textContent = response.region;
    populationElement.textContent = (response.population / 1000000).toFixed(1);
    languageElement.textContent = response.languages[0].name;
    currencyElement.textContent = response.currencies[0].name;

    countriesContainer.append(countryTemplateClone);

    countriesContainer.style.opacity = 1;
  });
};

getCountryData("portugal");
getCountryData("usa");
