// 1 Clone an object deeply.
// const obj = { a: 1, b: { c: 2 } };
// // How would you create a deep copy of this object?

// const clone = structuredClone(obj);
// const clone2 = JSON.parse(JSON.stringify(obj));
// console.log(clone2);

// 2 Merge two objects without using Object.assign().
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// // Merge obj1 and obj2 into a new object manually

// const merged = {...obj1, ...obj2};
// console.log(merged);


// // 3 Remove properties with falsy values from an object.
// const input = { a: 0, b: null, c: 'hello', d: '', e: undefined };
// // Expected Output: { c: 'hello' }
// const results = {};
// for(let key in input){
//     if(input[key]){
//         results[key] = input[key];
//     }
// }
// console.log(results);

// 4 Convert an object to an array of key-value pairs and vice versa.
// const obj = { name: 'John', age: 30 };
// // Convert to: [['name', 'John'], ['age', 30]]
// // Then convert it back to an object

// const entries = Object.entries(obj);
// const fromentries = Object.fromEntries(entries);
// console.log(entries);
// console.log(fromentries);

// 5 Check if two objects are deeply equal.

// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { a: 1, b: { c: 3 } };
// // Write a function isEqual(obj1, obj2) -> true/false
// function isEqual(a, b) {
//     if (a === b) return true;
//     if (typeof (a) !== 'object' || typeof (b) !== 'object' || a === null || b === null) return false;
//     let keyA = Object.keys(a); let keyB = Object.keys(b)
//     console.log(keyA, keyB);
//     if (keyA.length !== keyB.length) return false;
//     for (let key of keyA) {
//         if (!isEqual(a[key], b[key])) return false;
//     }
//     return true;
// }
// console.log(isEqual(obj1, obj2));


// 6 Create a prototype chain manually (without class).

// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.speak = function() {
//   return `${this.name} makes a noise.`;
// };

// function Dog(name) {
//   Animal.call(this, name);
// }

// // Setup inheritance and add `bark()` to Dog


// 7 Explain the output of the following and fix the inheritance:
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     return `${this.name} makes a sound`;
//   }
// }

// class Dog extends Animal {
//   speak() {
//     return 'Woof!';
//   }
// }

// const d = new Dog('Rex');
// console.log(d.speak());  // Explain output


// 8 Add a method to all objects using Object.prototype.
// Add a method `describe()` to all objects that logs all key-values.
// Object.prototype.describe = function () {
//   return Object.entries(this).map(([k, v]) => `${k}: ${v}`).join(', ');
// };

// const obj = { name: "Sam", age: 25 };
// console.log(obj.describe()); // name: Sam, age: 25


// 9 Explain and correct the following behavior:

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHi = () => {
//   console.log(`Hi, I'm ${this.name}`);
// };

// const p = new Person('Alice');
// p.sayHi();  // What's wrong here? Fix it.

// // ❌ Arrow function has lexical `this`, not dynamic
// // Person.prototype.sayHi = () => {
// //   console.log(`Hi, I'm ${this.name}`);
// // };

// // ✅ Use normal function
// Person.prototype.sayHi = function() {
//   console.log(`Hi, I'm ${this.name}`);
// };


// 10 Implement a simple class hierarchy:

// Create a class `Vehicle` with `drive()` method
// Create a subclass `Car` that extends `Vehicle` and overrides `drive()`
// Add a method `fuel()` only to Car

// class Vehicle {
//     drive() {
//         console.log("driving");
//     }
// }

// class Car extends Vehicle {
//     drive() {
//         console.log("i am driving");
//     }

//     fuel() {
//         console.log("fuel ignited");

//     }
// }

// const c = new Car();
// c.drive()
// c.fuel()
