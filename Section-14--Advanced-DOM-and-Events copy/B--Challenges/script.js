"use strict";

//////////////////////////////////////////////////////////////////////
//#region Coding Challenge #1
//////////////////////////////////////////////////////////////////////
// // 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h.
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// // 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.
// Car.prototype.accelerate = function () {
//   this.speed = parseInt(this.speed) + 10 + " km/h";
//   console.log(this.speed);
// };

// // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console.
// Car.prototype.brake = function () {
//   this.speed = parseInt(this.speed) - 5 + " km/h";
//   console.log(this.speed);
// };

// // 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
// const bmw = new Car("BMW", "120 km/h");
// const mercedes = new Car("BMW", "95 km/h");

// // Test data:
// // - Data car 1: 'BMW' going at 120 km/h
// // - Data car 2: 'Mercedes' going at 95 km/h

// console.log("----- BMW -----");
// console.log(bmw);
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

// console.log("----- Mercedes -----");
// console.log(mercedes);
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();
//#endregion

//////////////////////////////////////////////////////////////////////
//#region Coding Challenge #2
//////////////////////////////////////////////////////////////////////
// // 1. Use a class to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
// // 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
// // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console
// // 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   get speedUS() {
//     console.log(parseInt(this.speed) / 1.6 + " mph");
//   }

//   set speedUS(_speed) {
//     this.speed = parseInt(_speed) * 1.6 + " km/h";
//   }

//   accelerate() {
//     this.speed = parseInt(this.speed) + 10 + " km/h";
//     console.log(this.speed);
//   }

//   brake() {
//     this.speed = parseInt(this.speed) - 5 + " km/h";
//     console.log(this.speed);
//   }
// }

// const ford = new Car("Ford", "120 km/h");

// // Test data:
// // - Data car 1: 'Ford' going at 120 km/h

// console.log("----- Ford -----");
// console.log(ford);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// console.log(ford.speedUS);
// ford.speedUS = "125 mph";
// console.log(ford.speed);
//#endregion

//////////////////////////////////////////////////////////////////////
//#region Coding Challenge #3
//////////////////////////////////////////////////////////////////////
// // 1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = parseInt(this.speed) + 10 + " km/h";
//   console.log(this.speed);
// };

// Car.prototype.brake = function () {
//   this.speed = parseInt(this.speed) - 5 + " km/h";
//   console.log(this.speed);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// // 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'
// EV.prototype.chargeBattery = function (chargeTo) {
//   if (parseFloat(this.charge) < chargeTo) this.charge = `${chargeTo}%`;
// };

// // 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
// EV.prototype.accelerate = function () {
//   this.speed = `${parseInt(this.speed) + 20} km/h`;
//   this.charge = `${parseFloat(this.charge) - 1}%`;

//   console.log(
//     `${this.make} going at ${this.speed}, with a charge of ${this.charge}`
//   );
// };

// // 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism
// // Test data:
// // -  Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
// const ev = new EV("Tesla", "120 km/h", "23%");
// console.log(ev); // { make: "Tesla", speed: "120 km/h", charge: "23%" }
// ev.accelerate(); // Tesla going at 140 km/h, with a charge of 22%
// ev.brake(); // 135 km/h
// ev.chargeBattery(80);
// console.log(ev); // { make: "Tesla", speed: "135 km/h", charge: "80%" }
//#endregion
