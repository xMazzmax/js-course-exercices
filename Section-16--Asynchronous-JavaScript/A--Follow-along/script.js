"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
//////////////////////////////////////////////////////////////////////
// #region 260. Our First AJAX Call: XMLHttpRequest
/////////////////////////////////
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  // request type + API URL
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    // AJAX requests return the response in JSON format
    const [data] = JSON.parse(this.responseText);
    // => { name: "Portugal", alpha2Code: "PT", alpha3Code: "PRT", ... }

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

    imageElement.src = data.flag;
    nameElement.textContent = data.name;
    regionElement.textContent = data.region;
    populationElement.textContent = (data.population / 1000000).toFixed(1);
    languageElement.textContent = data.languages[0].name;
    currencyElement.textContent = data.currencies[0].name;

    countriesContainer.append(countryTemplateClone);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("Portugal");
// #endregion
//////////////////////////////////////////////////////////////////////
