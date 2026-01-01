"use strict";

// in JS, constructor functions are written in PascalCase by convention
const Person = function (name, birthYear) {
  (this.name = name), (this.birthYear = birthYear);
};

const max = new Person("Max", 1990);
const joe = { name: "Joe", birthYear: 1995 };

max; // { name: "Max", birthYear: 1990 }
joe; // { name: "Joe", birthYear: 1995 }

max instanceof Person; // true
joe instanceof Person; // false

// Calling a function with the new operator does the following:
// 1. Create a new empty object
// 2. Set the internal [[Prototype]] of the object to Constructor.prototype
// 3. Call the function and bind the this keyword to the newly created object
// 4. Return the created object unless the constructor explicitly returns another object

// Methods could technically be declared inside the constructor function aswell using the this keyword, but it's bad practice because of the created redundancy in each instance.

// The `prototype` property of a constructor function is the object that becomes the prototype of all instances created with the `new` operator. The `prototype` object of a constructor function also has a `constructor` property that references the constructor function and its own internal prototype link ([[Prototype]]), which is `Object.prototype` by default
Person.prototype === Object.getPrototypeOf(max); // true
Person.prototype.isPrototypeOf(max); // true
Person.prototype.isPrototypeOf(Person); // false

// While defining shared properties and methods on custom constructor prototypes is encouraged, modifying built-in prototypes such as Object.prototype and Array.prototype is bad practice. It can override existing behavior, shadow (hide) properties higher up the prototype chain, cause unexpected behavior of third party libraries, or lead to conflicts with behavior added in future JS releases
Person.prototype.planetOfOrigin = "probably earth";
// Properties defined on the prototype object of the constructor are accessible by all instances through the prototype chain, as if they were properties of the instances
max.planetOfOrigin; // "probably earth"
// Even though it doesn't live directly on the instance
max.hasOwnProperty("planetOfOrigin"); // false
max.planetOfOrigin === Person.prototype.planetOfOrigin; // true
// This applies only for instance property reads when no property with the same name is defined inside the instance, because writes create a property on the instance itself
max.planetOfOrigin = "Mars";
max.hasOwnProperty("planetOfOrigin"); // true
max.planetOfOrigin === Person.prototype.planetOfOrigin; // false
// The [[Prototype]] of the end of a prototype chain (Object.prototype.[[Prototype]]) is null. If a property can't be resolved along the chain, `undefined` is returned
max.bla; // undefined
// console.log(max.bla()); // TypeError
