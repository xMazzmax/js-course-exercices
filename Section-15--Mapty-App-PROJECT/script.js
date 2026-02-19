"use strict";

class Workout {
  id;
  #date;

  constructor(coords, distance, duration) {
    this.#date = new Date();
    this.id = this.#date.getTime();

    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.#date.getMonth()]
    } ${this.#date.getDate()}`;
  }
}

class Running extends Workout {
  type = "running";
  pace;

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);

    this.pace = (duration / distance).toFixed(1);
    this.cadence = cadence;

    this._setDescription();
  }
}

class Cycling extends Workout {
  type = "cycling";
  speed;

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);

    this.speed = ((distance / duration) * 60).toFixed(1);
    this.elevationGain = elevationGain;
    this._setDescription();
  }
}

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();
    this._getLocalStorage();

    form.addEventListener("submit", this._newWorkout.bind(this));
    inputType.addEventListener("change", this._toggleElevationField);
    this._toggleElevationField();
    containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));
  }
  getWorkouts() {
    return this.#workouts;
  }

  _getPosition() {
    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => {
      alert("Couldn't get location.");
    });
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;

    this.#map = L.map("map").setView([latitude, longitude], this.#mapZoomLevel);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", this._showForm.bind(this));

    const localStorageWorkouts = JSON.parse(localStorage.getItem("workouts"));
    if (localStorageWorkouts?.length > 0) {
      localStorageWorkouts.forEach(workout => {
        this._renderMarker(workout);
      });
    }
  }

  _showForm(mapEv) {
    this.#mapEvent = mapEv;

    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _hideForm() {
    form.style.transition = "none";
    form.offsetHeight;
    form.classList.add("hidden");
    form.offsetHeight;
    form.removeAttribute("style");
  }

  _toggleElevationField() {
    const isRunningWorkout = inputType.value === "running";
    const isCyclingWorkout = inputType.value === "cycling";

    inputCadence
      .closest(".form__row")
      .classList.toggle("form__row--hidden", isCyclingWorkout);
    inputElevation
      .closest(".form__row")
      .classList.toggle("form__row--hidden", isRunningWorkout);
  }

  _newWorkout(event) {
    event.preventDefault();

    // Data collection
    const { lat, lng } = this.#mapEvent.latlng;
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;

    // Data validation
    function allNumbers(...values) {
      return values.every(value => Number.isFinite(value));
    }

    function allPositive(...values) {
      return values.every(value => value > 0);
    }

    // Create running object
    if (type === "running") {
      const cadence = +inputCadence.value;

      if (
        !allNumbers(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert("All inputs must be a positive number.");
      }

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // Create cycling object
    if (type === "cycling") {
      const elevation = +inputElevation.value;
      if (
        !allNumbers(distance, duration, elevation) ||
        !allPositive(distance, duration)
      ) {
        return alert(
          "All inputs must be a number, and distance and duration must be positive.",
        );
      }

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    this.#workouts.push(workout);

    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        "";

    this._renderMarker(workout);
    this._renderWorkout(workout);
    this._hideForm();
    this._setLocalStorage(workout);
  }

  _renderMarker(workout) {
    const popupContent = `${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${
      workout.description
    }`;

    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup("Workout", {
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`,
      })
      .setPopupContent(popupContent)
      .openPopup();
  }

  _renderWorkout(workout) {
    if (workout.type === "running") {
      const runningTemplateClone = document
        .getElementById("running-card-template")
        .content.cloneNode(true);

      // Get elements
      const workoutElement = runningTemplateClone.querySelector("[data-id]");
      const workoutTitleValueElement =
        runningTemplateClone.querySelector(".workout__title");
      const [
        distanceValueElement,
        durationValueElement,
        paceValueElement,
        cadenceValueElement,
      ] = runningTemplateClone.querySelectorAll(".workout__value");

      // Set values
      workoutElement.setAttribute("data-id", workout.id);
      workoutTitleValueElement.textContent = workout.description;
      distanceValueElement.textContent = workout.distance;
      durationValueElement.textContent = workout.duration;
      paceValueElement.textContent = workout.pace;
      cadenceValueElement.textContent = workout.cadence;

      containerWorkouts.append(runningTemplateClone);
    } else if (workout.type === "cycling") {
      const cyclingTemplateClone = document
        .getElementById("cycling-card-template")
        .content.cloneNode(true);

      // Get elements
      const workoutElement = cyclingTemplateClone.querySelector("[data-id]");
      const workoutTitleValueElement =
        cyclingTemplateClone.querySelector(".workout__title");
      const [
        distanceValueElement,
        durationValueElement,
        speedValueElement,
        elevationValueElement,
      ] = cyclingTemplateClone.querySelectorAll(".workout__value");

      // Set values
      workoutElement.setAttribute("data-id", workout.id);
      workoutTitleValueElement.textContent = workout.description;
      distanceValueElement.textContent = workout.distance;
      durationValueElement.textContent = workout.duration;
      speedValueElement.textContent = workout.speed;
      elevationValueElement.textContent = workout.elevationGain;

      form.after(cyclingTemplateClone);
    }
  }

  _moveToPopup(event) {
    const workoutElement = event.target.closest(".workout");

    if (!workoutElement) return;

    const workout = this.#workouts.find(currentWorkout => {
      return currentWorkout.id == workoutElement.dataset.id;
    });
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: { duration: 0.5 },
    });
  }

  _getLocalStorage() {
    const localStorageWorkouts = JSON.parse(localStorage.getItem("workouts"));

    if (!localStorageWorkouts || localStorageWorkouts.length === 0) return;

    this.#workouts = localStorageWorkouts;

    this.#workouts.forEach(workout => {
      this._renderWorkout(workout);
    });
  }

  _setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this.#workouts));
  }
}

const app = new App();
