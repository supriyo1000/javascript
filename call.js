
// 1. What’s the difference between call, apply, and bind ?
//     Answer :
//     Method	Use for	Arguments Passed	Executes Immediately ?
//         call()	Function borrowing	List of arguments: fn.call(this, arg1, arg2)	✅ Yes
// apply()	Same as call	Arguments as array: fn.apply(this, [arg1, arg2])	✅ Yes
// bind()	Permanent binding	Same as call: fn.bind(this, arg1)	❌ No(returns a new function)

// ✅ 2. Practical Example: Borrowing method using call()
// Question:
// Use call() to borrow a method from another object.

// Answer:
// const user1 = {
//     name: "Alice",
//     greet: function (city,state) {
//         console.log(`Hello, I'm ${this.name} from ${city} in ${state}`);
//     }
// };

// const user2 = {
//     name: "Bob"
// };

// user1.greet.call(user2, "Mumbai","maharashtra"); // Hello, I'm Bob from Mumbai


// ✅ 3. Use apply() with Math.max
// Question:
// How do you find the max of an array using apply() ?

// Answer :

// const nums = [5, 12, 8, 20];
// const max = Math.max.apply(null, nums); // or apply(Math, nums)
// console.log(max); // 20


// ✅ 4. Fix this in a delayed function using bind()
// Question:
// Why does the following code not work as expected ? Fix it using bind().


// const person = {
//     name: "Supriyo",
//     sayHi() {
//         setTimeout(function () {
//             console.log(`Hi, I'm ${this.name}`);
//         }, 1000);
//     }
// };

// person.sayHi(); // Hi, I'm undefined
// Answer(fixed):

// sayHi() {
//     setTimeout(function () {
//         console.log(`Hi, I'm ${this.name}`);
//     }.bind(this), 1000); // ✅ binds 'this' to person
// }

// Or use arrow function (ES6):

// sayHi() {
//     setTimeout(() => {
//         console.log(`Hi, I'm ${this.name}`);
//     }, 1000);
// }


// ✅ 5. Use bind() to partially apply arguments(currying)
// Question:
// Create a multiply function and bind it to always multiply by 5.

// Answer:
// function multiply(a, b) {
//     return a * b;
// }

// const multiplyBy5 = multiply.bind(null, 5);

// console.log(multiplyBy5(2)); // 10
// console.log(multiplyBy5(4)); // 20


// ✅ 6. What is the output ?
    
// const obj = {
//     name: "Infosys",
//     show: function () {
//         console.log(this.name);
//     }
// };

// const showFn = obj.show;
// showFn(); // ?

// Answer:

// undefined
// Why ? Because this is lost when showFn is detached from obj.

// ✅ Fix:

// const boundShow = obj.show.bind(obj);
// boundShow(); // Infosys


// ✅ 7. Use call to convert arguments object to array
// Question:
// How do you convert the arguments object to a real array ?

// Answer :
    
// function demo() {
//     const args = Array.prototype.slice.call(arguments);
//     console.log(args); // real array
// }
// demo(1, 2, 3); // [1, 2, 3]


// ✅ 8. Output - based MCQ
// Question:
// What is the output of the following ?

// const greet = function (age) {
//     console.log(`${this.name} is ${age} years old`);
// };

// const user = { name: "Ravi" };

// greet.call(user, 25);
// greet.apply(user, [30]);

// const greetUser = greet.bind(user, 35);
// greetUser();
// Answer:
// pgsql
// Ravi is 25 years old
// Ravi is 30 years old
// Ravi is 35 years old


// ✅ 9. What happens if you use bind but don’t call it ?

// const obj = {
//     x: 10,
//     show() {
//         console.log(this.x);
//     }
// };

// const showFn = obj.show.bind(obj);
// showFn(); // ✅ 10

// obj.show(); // ✅ 10

// const justBind = obj.show.bind(obj);

// No output unless justBind() is called


// ✅ 10. Create a polyfill for bind()(Advanced)
// Question:
// Can you write your own version of bind() ?

// Answer :
    
// Function.prototype.myBind = function (context, ...args) {
//     const fn = this;
//     return function (...newArgs) {
//         return fn.apply(context, [...args, ...newArgs]);
//     };
// };

// // Usage:
// function say(name) {
//     console.log(`Hello, ${name}`);
// }

// const bound = say.myBind(null, "Supriyo");
// bound(); // Hello, Supriyo