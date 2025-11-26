"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//#region 198. Selecting, Creating, and Deleting DOM Elements
// // Creating and inserting HTML elements
// const header = document.querySelector(".header");
// const message = document.createElement("div");

// message.classList.add("cookie-message");
// message.innerHTML =
//   "We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Accept</button>";

// // Add one or more elements or strings...
// // ...inside as first child
// header.prepend(message);
// // ... inside as last child (moves the same element)
// header.append(message);
// // ... outside before element (makes a copy of the element + content)
// header.before(message.cloneNode(true));
// // ... outside after element
// header.after(message);
// // Replace element entirely with other elements or text strings
// // header.replaceWith(...nodesOrStrings);

// // Remove the element from the DOM
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", () => message.remove());

// header.insertAdjacentHTML("beforeend", "");

// // Move one existing element...
// // ...inside as first child
// header.insertAdjacentElement("afterbegin", message);
// // ... inside as last child
// header.insertAdjacentElement("beforeend", message);
// // ... outside before element
// header.insertAdjacentElement("beforebegin", message);
// // ... outside after element
// header.insertAdjacentElement("afterend", message);

// // Insert one string without parsing
// header.insertAdjacentText("afterbegin", "Some text");
// //#endregion

// // Selecting DOM elements
// //// first match
// ////// ...directly from the document
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// //////...with .querySelector()
// //////// ... by tag name
// console.log(document.querySelector("button"));
// //////// ... by id
// console.log(document.querySelector("#section--1"));
// //////// ... by class (first match)
// console.log(document.querySelector(".section--1"));

// //// all matches
// ////// .querySelectorAll() returns a NodeList[], which is a static snapshot of all elements from the DOM that match the selection => removing an element from the DOM for example keeps the element inside the node list
// console.log(document.querySelectorAll("section"));

// ////// .getElementsBy...() returns an "HTMLCollection{}" containing all elements from the DOM that match the selection. It stays in sync with the DOM => e.g. removing an element from the DOM, does the same to the collection
// //////// ... by name
// console.log(document.getElementsByName("someName"));
// //////// ... by tag
// console.log(document.getElementsByTagName("button"));
// //////// ... by class
// console.log(document.getElementsByClassName("btn"));
//#endregion

//#region 199. Styles, Attributes and Classes
// const headerImage = document.querySelector(".header__img");
// const navLinkButton = document.querySelector(".nav__link--btn");
// headerImage.style.width = "100%";

// // headerImage => <img class="header__img" src="img/hero.png" alt="Minimalist bank items" style="width: 100%;">

// // returns the inline style value
// console.log(headerImage.style.width);
// //// => "100%"

// // doesn't return the value if it's not defined inline
// console.log(headerImage.style.height);
// //// => ""

// // returns the computed style value
// console.log(getComputedStyle(headerImage).width);
// // => "298.583px"

// // parses just the float of any float value followed by a string
// console.log(Number.parseFloat(getComputedStyle(headerImage).width));
// // =>  298.583

// // change the value of any custom property
// document.documentElement.style.setProperty("--color-primary", "orangered");

// // get the value of tag standard properties directly through dot notation
// console.log(headerImage.alt);
// // => "Minimalist bank items"

// console.log(headerImage.setAttribute("creator", "Michelangelo"));

// // the dot notation doesn't work for custom properties
// console.log(headerImage.customProp);
// // => undefined

// // use .getAttribute() instead
// console.log(headerImage.getAttribute("creator"));
// // => "Michelangelo"

// // get the source or URL
// //// absolute path
// console.log(headerImage.src);
// // => http://127.0.0.1:5500/Section-13--Advanced-DOM-and-Events/img/hero.png
// //// relative path
// console.log(headerImage.getAttribute("src"));
// // => img/hero.png

// // Absolute path
// console.log(navLinkButton.href);
// //// => http://127.0.0.1:5500/index.html#
// // Relative path
// console.log(navLinkButton.getAttribute("href"));
// //// => #

// // using data attributes
// headerImage.setAttribute("data-publishing-year", "2025");
// console.log(headerImage.dataset.publishingYear);
// // => 2025

// // working with classes
// headerImage.classList.add("someClassName", "someOtherClassName");
// headerImage.classList.remove("someClassName", "someOtherClassName");
// headerImage.classList.toggle("someClassName");
// headerImage.classList.contains("someClassName");
//#endregion

//#region 200. Implementing Smooth Scrolling
const learnMoreButton = document.querySelector(".btn--scroll-to");
const featuresSection = document.querySelector("#section--1");

// Old browser support
learnMoreButton.addEventListener("click", () => {
  // returns the current distance from the top of the document to the top of the viewport in px
  const distanceFromBodyToViewport = window.scrollY;

  // returns the current distance from the top of the viewport to the top of the element in px
  const distanceFromViewportToFeaturesSection =
    featuresSection.getBoundingClientRect().top;

  window.scrollTo({
    top: distanceFromBodyToViewport + distanceFromViewportToFeaturesSection,
    behavior: "smooth",
  });
});

// New browser support (2020+)
learnMoreButton.addEventListener("click", () => {
  featuresSection.scrollIntoView({ behavior: "smooth" });
});

// returns the viewport width in px (excl. scrollbars)
document.documentElement.clientWidth; // 1075
// returns the viewport height in px (excl. scrollbars)
document.documentElement.clientHeight; // 633
//#endregion

//#region 201. Types of Events and Event Handlers
// //add an event listener that runs once before removing itself
// learnMoreButton.addEventListener("click", () => console.log("x"), {
//   once: true,
// });

// // add an event listener and remove it conditionally using the same callback/listener/handler reference
// const z = true;
// const callback = function () {
//   console.log("x");

//   if (z) learnMoreButton.removeEventListener("click", callback);
// };

// learnMoreButton.addEventListener("click", callback);

// // add a self-removing event listener whose handler is saved using a generic closure
// function executeCallbackAndRemoveEventListener(element, event, callback) {
//   return function handler(...args) {
//     callback(...args);

//     element.removeEventListener(event, handler);
//   };
// }

// learnMoreButton.addEventListener(
//   "click",
//   executeCallbackAndRemoveEventListener(learnMoreButton, "click", event =>
//     console.log("x", event.type)
//   )
// );
//#endregion

//#region 202. Event Propagation: Bubbling and Capturing
/*
"target" = The element where the event actually occurred (e.g., a <span> clicked inside a <button>)
"currentTarget" = The element whose listener is currently running.

There are two categories of DOM events:
1. Events that propagate (= distribute the event) through
CAPTURING => TARGET => BUBBLING

2. Events that propagate through
CAPTURING => TARGET
but DO NOT bubble (e.g. "focus", "blur", "mouseenter", "scroll")

Most events are of the 1. type. Here's how their flow works:

1. CAPTURING PHASE (TOP to BOTTOM)
The browser sends the event from the root (window) down the DOM tree through each ancestor element until it reaches the target. Event listeners only fire during this phase (instead of the last phase) if their 3rd parameter is explicitly set to true or include {capture: true}.

element.addEventListener("click", handler, true);
element.addEventListener("click", handler, {capture: true, once: true});

2. TARGET PHASE
At the target, capturing listeners run first, then bubbling listeners.

3. BUBBLING PHASE (BOTTOM to TOP)
The event "bubbles" (travels) up the DOM tree through its ancestors and default listeners fire (if they weren't already executed during capturing).

Stopping propagation (declared within a listener):

event.stopPropagation()
stops the propagation process past the current element.

event.stopImmediatePropagation()
stops the propagation process past the current element AND other listeners on the same element.
*/
//#endregion

//#region 204. Event Delegation: Implementing Page Navigation

// Simple navigation with smooth scrolling
// => creates 3 event listeners, which is unnecessary and impacts performance if there were hundreds of event listeners
// document.querySelectorAll(".nav__link").forEach(link =>
//   link.addEventListener("click", function (event) {
//     event.preventDefault();

//     const section = document.querySelector(this.getAttribute("href"));

//     // const fromBodyToViewport = window.scrollY;
//     // const fromViewportToSection = section.getBoundingClientRect().top;

//     // const fromBodyToSection = fromBodyToViewport + fromViewportToSection;

//     // window.scrollTo({ top: fromBodyToSection, behavior: "smooth" });

//     console.log(section);
//     section.scrollIntoView({ behavior: "smooth" });
//   })
// );

// Navigation with event delegation
document
  .querySelector(".nav__links")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const section = document.querySelector(event.target.getAttribute("href"));

    section?.scrollIntoView({ behavior: "smooth" });
  });
//#endregion

//#region 205. DOM Traversing
// const heroHeading = document.querySelector("h1");
// const heroSubheading = document.querySelector("h4");

// // Querying downwards
// //// First element match down the DOM tree
// heroHeading.querySelector(".highlight");
// //// All element matches down the DOM tree (NodeList)
// heroHeading.querySelectorAll(".highlight");
// //// All child elements (live HTMLCollection)
// heroHeading.children;
// //// First child element
// heroHeading.firstElementChild;
// //// Last child element
// heroHeading.lastElementChild;

// // Querying upwards
// //// Closest ancestor element match (including itself)
// heroHeading.closest(".header");
// //// Parent element
// heroHeading.parentElement;

// // Querying sideways
// //// Previous sibling element
// heroSubheading.previousElementSibling;
// //// Next sibling element
// heroSubheading.nextElementSibling;
// //// All siblings (Array)
// [...heroSubheading.parentElement.children].filter(
//   child => child !== heroSubheading
// );
//#endregion

//#region 206. Building a Tabbed Component
const operations = document.querySelector(".operations");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", event => {
  const clickedTab = event.target.closest(".operations__tab");

  // Stop the callback if clicked inside the tabs container but outside and tab
  if (!clickedTab) return;

  // Remove the active state classes from all tabs and tab contents
  tabs.forEach(tab => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach(tabContent =>
    tabContent.classList.remove("operations__content--active")
  );

  // Add the active state classes to the clicked tab and correspondent tab content
  clickedTab.classList.add("operations__tab--active");
  operations
    .querySelector(`.operations__content--${clickedTab.dataset.tab}`)
    .classList.add("operations__content--active");
});
//#endregion

//#region 207. Passing Arguments to Event Handlers
const navigation = document.querySelector(".nav");

const navLinkMousePassHandler = function (event) {
  // Stop the callback if the hovered through element is not a .nav__link
  if (!event.target.classList.contains("nav__link")) return;

  const currentLink = event.target;
  const navListLinks = currentLink
    .closest(".nav")
    .querySelectorAll(".nav__link");
  const logo = event.target.closest(".nav").querySelector(".nav__logo");

  navListLinks.forEach(link => {
    if (link !== currentLink) link.style.opacity = this.opacity;
  });
  logo.style.opacity = this.opacity;
};

// the first argument of .bind() becomes the "this" value of the callback function
// any arguments defined after that are inserted before the event object
// the event object is always passed automatically
// since no arguments are defined (besides the "this" value) in the examples below,
// the "event" parameter of navLinkMousePassHandler becomes the event object by default
// => thisValue?, ...boundArgs?, eventObject
navigation.addEventListener(
  "mouseover",
  navLinkMousePassHandler.bind({ backgroundColor: "orangered", opacity: 0.5 })
);
navigation.addEventListener(
  "mouseout",
  navLinkMousePassHandler.bind({ backgroundColor: "orangered", opacity: 1 })
);
//#endregion

//#region 208. Implementing a Sticky Navigation: The Scroll Event
document.addEventListener("scroll", () => {
  if (
    window.scrollY >=
    window.scrollY + featuresSection.getBoundingClientRect().top
  )
    navigation.classList.add("sticky");
  else navigation.classList.remove("sticky");
});
//#endregion

//#region 209. A Better Way of Implementing a Sticky Navigation: The Intersection Observer API
const header = document.querySelector(".header");
const headerObserverCallback = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) navigation.classList.add("sticky");
  else navigation.classList.remove("sticky");
};
const headerObserverOptions = {
  // viewport as root
  root: null,
  threshold: 0,
  rootMargin: `-${navigation.getBoundingClientRect().height}px`,
};
const headerObserver = new IntersectionObserver(
  headerObserverCallback,
  headerObserverOptions
);
headerObserver.observe(header);
//#endregion
