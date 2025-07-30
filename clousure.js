// function counter() {
//     let count = 0;

//     return function() {
//         count += 1;
//         return count;
//     };
// }

// const increment = counter();
// console.log(increment()); // 1
// console.log(increment()); // 2

// const anotherIncrement = counter();
// console.log(anotherIncrement()); // 1

// function makeFuncs() {
//     let funcs = [];
//     for (let i = 0; i < 3; i++) {
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

// function delayfn(ms) {
//     return function () {
//         setTimeout(()=> console.log(`Delayed message after ${ms/1000} sec`), ms);
//     }
// }

// const delayed = delayfn(2000);
// delayed(); // Logs "Delayed message" after 1 second

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
// // Output: 0 1 2

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

// function createCounter(start = 0) {
//     let count = start;
//     return function() {
//         return {
//             inc : ()=> ++count,
//             dec: () => --count,
//             get: () => count,
//             reset: () => count = start
//         }
//     };
// }

// const a = createCounter(10);
// console.log(a().inc()); // 10
// console.log(a().inc()); // 11
// console.log(a().dec()); // 10
// const b = createCounter(5);
// console.log(b().get()); // 5
// console.log(b().inc()); // 6
// console.log(b().reset()); // 5


function setupButton(id) {
    let clickCount = 0;
    document.getElementById(id).addEventListener("click", function () {
        clickCount++;
        console.log(`Clicked ${clickCount} times`);
    });
}
// clickCount stays in memory due to closure



