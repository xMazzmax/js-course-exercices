"use strict";
//#region 221.-224. Prototypal OOP basics
// // in JS, constructor functions are written in PascalCase by convention
// const Person = function (name, birthYear) {
//   (this.name = name), (this.birthYear = birthYear);
// };

// const max = new Person("Max", 1990);
// const joe = { name: "Joe", birthYear: 1995 };

// max; // { name: "Max", birthYear: 1990 }
// joe; // { name: "Joe", birthYear: 1995 }

// max instanceof Person; // true
// joe instanceof Person; // false

// // Calling a function with the new operator does the following:
// // 1. Create a new empty object
// // 2. Set the internal [[Prototype]] of the object to Constructor.prototype
// // 3. Call the function and bind the this keyword to the newly created object
// // 4. Return the created object unless the constructor explicitly returns another object

// // Methods could technically be declared inside the constructor function aswell using the this keyword, but it's bad practice because of the created redundancy in each instance.

// // The `prototype` property of a constructor function is the object that becomes the prototype of all instances created with the `new` operator. The `prototype` object of a constructor function also has a `constructor` property that references the constructor function and its own internal prototype link ([[Prototype]]), which is `Object.prototype` by default
// Person.prototype === Object.getPrototypeOf(max); // true
// Person.prototype.isPrototypeOf(max); // true
// Person.prototype.isPrototypeOf(Person); // false

// // While defining shared properties and methods on custom constructor prototypes is encouraged, modifying built-in prototypes such as Object.prototype and Array.prototype is bad practice. It can override existing behavior, shadow (hide) properties higher up the prototype chain, cause unexpected behavior of third party libraries, or lead to conflicts with behavior added in future JS releases
// Person.prototype.planetOfOrigin = "probably earth";
// // Properties defined on the prototype object of the constructor are accessible by all instances through the prototype chain, as if they were properties of the instances
// max.planetOfOrigin; // "probably earth"
// // Even though it doesn't live directly on the instance
// max.hasOwnProperty("planetOfOrigin"); // false
// max.planetOfOrigin === Person.prototype.planetOfOrigin; // true
// // This applies only for instance property reads when no property with the same name is defined inside the instance, because writes create a property on the instance itself
// max.planetOfOrigin = "Mars";
// max.hasOwnProperty("planetOfOrigin"); // true
// max.planetOfOrigin === Person.prototype.planetOfOrigin; // false
// // The [[Prototype]] of the end of a prototype chain (Object.prototype.[[Prototype]]) is null. If a property can't be resolved along the chain, `undefined` is returned
// max.bla; // undefined
// // console.log(max.bla()); // TypeError
//#endregion

//#region 226. ES6 Classes
// // Class declaration
// class Person {
//   constructor(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }

//   calculateAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   }
// }

// const isAdmin = true;

// // Class expression
// // useful for conditionals
// const User = isAdmin
//   ? class Guest {
//       constructor(name) {
//         this.name = name;
//       }

//       read() {}
//     }
//   : class Admin {
//       constructor(name) {
//         this.name = name;
//       }

//       read() {}
//       write() {}
//       delete() {}
//     };

// const max = new Person("Max", 1990);
// max.calculateAge();

// // Classes are NOT hoisted (unlike function declarations)
// // Classes are always executed in strict mode
// // Classes are first class citizens (can be passed into and returned from functions)
//#endregion

//#region 227. Setters and Getters
// // Every object in JS can have ´getter´ and ´setter´ properties. These properties are called "accessor properties", while regular properties are called "data properties". Setters and getters can be implemented independently of one another (e.g. defining just 1 of them).

// const account = {
//   owner: "Max",
//   movements: [100, -50, 200, 500],

//   // getter that returns the last value of the array
//   get latestMovement() {
//     return this.movements[this.movements.length - 1];
//   },

//   // setter that adds a value to the end of the array
//   // every setter needs to have exactly 1 parameter to be set
//   set latestMovement(movement) {
//     this.movements.push(movement);
//   },
// };

// // even though they contain methods, getters and setters are used like regular properties
// account.latestMovement; // gets 500
// account.latestMovement = -200; // sets -200
// account.latestMovement; // gets -200

// account.movements; // [100, -50, 200, 500, -200]

// // Since classes are fundamentally objects, they can also create getters and setters
// class Person {
//   constructor(name, birthYear, sex) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.sex = sex;
//   }

//   calculateAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   }

//   get sex() {
//     return this._sex;
//   }

//   // setters are great for validation
//   set sex(sex) {
//     sex === "m" || sex === "f"
//       ? (this._sex = sex)
//       : console.error(
//           `Error: The sex property was not set because the value "${sex}" is invalid. It must be either "m" or "f".`
//         );
//   }
// }

// const jane = new Person("Jane", 1985, "female");
// jane.sex; // undefined
// jane.sex = "f";
// jane.sex; // f
// jane; // { name: "Jane", birthYear: 1985, _sex: "f" }
//#endregion

//#region 228. Static methods
// // Static methods are methods that belong to the constructor itself and are not accessible by its instances. They're usually used for behavior that is related to the class as a whole (e.g. the built-in Array.isArray())

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   bla() {
//     console.log("Bla!");
//   }

//   static sayHiTo(name) {
//     console.log(`Hi ${name}! 🙋‍♂️`);
//   }
// }

// Person.sayHiTo("Danielle");

// const john = new Person("John");
// // Does not contain .sayHiTo()
// console.log(Object.getPrototypeOf(john));
// // {
// //   bla: function bla()
// //   constructor: class Person { constructor(name) }
// //   <prototype>: Object { … }
// // }
//#endregion

//#region 229. Object.create
// // Object.create is used to set the prototype of an object to another specific object
//
// const PersonPrototype = {
//   calculateAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   },

//   // To be able to set initial properties in a structured way programmatically, a custom init function is defined
//   initializeProperties(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   },
// };

// const mark = Object.create(PersonPrototype);
// // Setting initial properties manually
// mark.name = "Mark";
// mark.birthYear = 1970;
// mark.calculateAge();

// const cloe = Object.create(PersonPrototype);
// // Setting initial properties programmatically
// cloe.initializeProperties("Cloe", 2000);
// cloe; // { name: "Cloe", birthYear: 2000 }
// cloe.calculateAge(); // 26
//#endregion
