"use strict";

const btnShowModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnHideModal = document.querySelector(".close-modal");

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", function () {
    showModal();
  });
}

btnHideModal.addEventListener("click", function () {
  hideModal();
});

// overlay.addEventListener("click", function () {
//   hideModal();
// });

document.addEventListener("keydown", function (e) {
  if (
    (e.key === "Escape" && !modal.classList.contains("hidden")) ||
    !overlay.classList.contains("hidden")
  ) {
    hideModal();
  }
});
