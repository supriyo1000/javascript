// 1. What is a closure in JavaScript ?
// Answer :
//     A closure is a function that remembers variables from its outer lexical scope, even after the outer function has finished executing.

// Example:

// function outer() {
//     let count = 0;
//     return function inner() {
//         count++;
//         console.log(count);
//     };
// }

// const counter = outer();
// counter(); // 1
// counter(); // 2
// Here, inner() forms a closure over count.



// 2. Create a counter function using closure.
// Question:
// Write a function createCounter() that returns an increment function.

// Answer:

// function createCounter() {
//     let count = 0;
//     return function () {
//         return ++count;
//     };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2


// 3. What will be the output ?

// function makeFuncs() {
//     let funcs = [];
//     for (var i = 0; i < 3; i++) {
//         funcs.push(function () {
//             console.log(i);
//         });
//     }
//     return funcs;
// }

// const fns = makeFuncs();
// fns[0](); // ?
// fns[1](); // ?
// fns[2](); // ?

// Answer:

// 3
// 3
// 3
// Explanation: var is function-scoped, so all functions share the same i.
// Fix it using let or IIFE:


// for (let i = 0; i < 3; i++) {
//     funcs.push(() => console.log(i)); // Output: 0, 1, 2
// }



// 4. How can closures help with data privacy ?
// Answer :
// Closures allow private variables:

// function secretHolder(secret) {
//     return {
//         getSecret: function () {
//             return secret;
//         },
//         setSecret: function (newSecret) {
//             secret = newSecret;
//         }
//     };
// }

// const obj = secretHolder("abc");
// console.log(obj.getSecret()); // abc
// obj.setSecret("xyz");
// console.log(obj.getSecret()); // xyz



// 5. Write a function that delays execution using closure.
// Question:
// Make delayMsg("Hello", 1000) print "Hello" after 1 second using closure.

// Answer:

// function delayMsg(msg, delay) {
//     return function () {
//         setTimeout(() => {
//             console.log(msg);
//         }, delay);
//     };
// }

// const sayHi = delayMsg("Hello", 1000);
// sayHi(); // prints after 1 second



// 6. Can closures cause memory leaks ?
//     Answer :
//     Yes, if you create closures that reference unused DOM elements or large data, and don’t clean them up, memory can be retained unnecessarily.



// 7. Explain closure in a loop with setTimeout.

// for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }
// // Output: 3 3 3

// // Correct using closure (IIFE)
// for (var i = 0; i < 3; i++) {
//     (function (x) {
//         setTimeout(function () {
//             console.log(x);
//         }, 1000);
//     })(i);
// }
// Output: 0 1 2


// 8. How can you use closures to implement once - only functions ?
// Answer :

// function once(fn) {
//     let called = false;
//     return function (...args) {
//         if (!called) {
//             called = true;
//             return fn(...args);
//         }
//     };
// }

// const runOnce = once(() => console.log("Run!"));
// runOnce(); // ✅ Run!
// runOnce(); // ❌ Nothing



// 9. Create a function to track multiple counters independently.
// Answer:
// function createCounter(start = 0) {
//     let count = start;
//     return {
//         inc: () => ++count,
//         dec: () => --count,
//         get: () => count
//     };
// }

// const a = createCounter();
// const b = createCounter(100);
// console.log(a.inc()); // 1
// console.log(b.inc()); // 101


// 10. How are closures used in event listeners ?
// Answer :

// function setupButton(id) {
//     let clickCount = 0;
//     document.getElementById(id).addEventListener("click", function () {
//         clickCount++;
//         console.log(`Clicked ${clickCount} times`);
//     });
// }
// clickCount stays in memory due to closure