// Q1.What will be the output ?
    
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((n) => {
//     if (n % 2 === 0) return n * 2;
// });
// console.log(result);

// Q2.Convert array of strings to capitalized form

// const strings = ["hello", "world"];
// const capitalized = strings.map((str) => str[0].toUpperCase()+ str.slice(1));
// console.log(capitalized); // ["Hello", "World"]

// 3. Sum only even numbers using reduce
// const numbers = [1, 2, 3, 4, 5];

// const sumEven = numbers.reduce((acc, n) => {
//     return n % 2 === 0 ? acc + n : acc;
// }, 0); // Initial value is 0

// console.log(sumEven); // 6 (2 + 4)

// Q4.Remove duplicates

// const arr = [1, 2, 2, 3, 4, 4, 5];

// const uniqueArr = arr.filter((item, i)=> arr.indexOf(item) === i);
// console.log(uniqueArr); // [1, 2, 3, 4,

// Q3.Write a Debounce function

// function debounce(func, delay) {
//     let timerId;

//     return function () {
//         // Clear any previously set timer
//         clearTimeout(timerId);

//         // Start a new timer
//         timerId = setTimeout(() => {
//             func();
//         }, delay);
//     };
// }

// function sayHello() {
//     console.log("Hello after pause!");
// }

// const debouncedHello = debounce(sayHello, 1000);

// // Simulate user calling the function many times quickly
// debouncedHello();
// debouncedHello();
// debouncedHello();

// 👉 Only ONE "Hello after pause!" will print after 1 second
//    and only if no further calls happen in that time.

// Q4.Write a Throttle function
function throttle(fn, interval) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= interval) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

window.addEventListener("scroll", throttle(() => {
    console.log("Throttled scroll!");
}, 200));

