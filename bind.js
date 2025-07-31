
// 1. Why does the following code print undefined ? Fix it using bind().

// const person = {
//     name: "Supriyo",
//     greet() {
//         console.log(`Hello, I'm ${this.name}`);
//     }
// };

// setTimeout(person.greet.bind(person), 1000); // ❌ undefined

// const person = {
//     name: "Supriyo",
//     greet: function() {
//         console.log(`Hello, I'm ${this.name}`);
//     }
// };
// person.greet.bind(person)(); // Output: Hello, I'm Supriyo
// const boundGreet = person.greet.bind(person); // Bind `this` to `person`
// boundGreet(); // Output: Hello, I'm Supriyo

// person.greet()

// 2. Create a function that always adds 100 to any number passed.

// function add(a, b) {
//     return a + b;
// }

// const add100 = add.bind(null, 100);

// console.log(add100(50)); // 150
// console.log(add100(20)); // 120

// 3. Why doesn't the button click show the correct name? Fix it using bind().
        
// const app = {
//     name: "Infosys",
//     handleClick() {
//         console.log(this.name);
//     }
// };

// document.getElementById("btn").addEventListener("click", app.handleClick); // ❌ undefined