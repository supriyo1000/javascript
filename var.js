// 1. What is the difference between var, let, and const?
// Answer:

//         Feature	var let	const
//             Scope	Function-scoped	Block - scoped	Block - scoped
// Re - declaration	Allowed	Not allowed	Not allowed
// Re - assignment	Allowed	Allowed	Not allowed
// Hoisting	Hoisted(value is undefined)	Hoisted(TDZ applies)	Hoisted(TDZ applies)

Example:


// function test() {
//     if (true) {
//         var a = 10;
//         let b = 20;
//         const c = 30;
//     }
//     console.log(a); // ✅ 10
//     console.log(b); // ❌ ReferenceError
//     console.log(c); // ❌ ReferenceError
// }
// test();


// 2. What is the Temporal Dead Zone(TDZ) ?
// Answer :
//     TDZ is the time between the entering of scope and the actual declaration of let or const variable.Accessing the variable before declaration will throw a ReferenceError.

//         Example:

// console.log(a); // ❌ ReferenceError (TDZ)
// let a = 5;

// console.log(b); // ✅ undefined (due to hoisting)
// var b = 10;


// 3. Can you reassign a const variable?What about objects?
// Answer:
// You cannot reassign a const primitive, but you can modify the contents of a const object or array.

// Example:

// const a = 10;
// a = 20; // ❌ Error: Assignment to constant variable

// const obj = { name: "Supriyo" };
// obj.name = "Chatterjee"; // ✅ Allowed

// const arr = [1, 2];
// arr.push(3); // ✅ Allowed



// 4. What happens if you declare the same variable twice using var, let, or const?
// Answer:

// var x = 5;
// var x = 10; // ✅ Allowed

// let y = 5;
// let y = 10; // ❌ Error: Identifier 'y' has already been declared

// const z = 5;
// const z = 10; // ❌ Error




// 5. Which one should you use and why ?
// Answer :

// Use const by default (immutability is safer).

// Use let only if you need to reassign the variable.

// Avoid var — it's outdated and leads to scope bugs.



// 6. What will be the output of the following code ?

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100);
// }
// // Output: 3 3 3

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100);
// }
// // Output: 0 1 2
// Explanation:

// var is function-scoped, so the same i is shared in each iteration.

// let creates a new binding for each iteration(block - scoped).
    
    

// 7. Can you access a var, let, or const before it's declared?
// Answer:
// console.log(a); // undefined
// var a = 10;

// console.log(b); // ❌ ReferenceError (TDZ)
// let b = 20;

// console.log(c); // ❌ ReferenceError (TDZ)
// const c = 30;



// 8. What happens when you declare a variable without any keyword ?
// Answer :

// function test() {
//     x = 100; // no var/let/const
// }
// test();
// console.log(x); // ✅ 100 (becomes global variable — bad practice!)
// Avoid this.Always use let or const.



// 9. What's the difference between block scope and function scope?
// Answer:

// var is function scoped: visible throughout the function.

// let and const are block scoped: only inside { }.

// Example:

// function example() {
//     if (true) {
//         var a = 1;
//         let b = 2;
//     }
//     console.log(a); // ✅ 1
//     console.log(b); // ❌ ReferenceError
// }



// 10. Can a const variable be declared without assigning a value?
//     Answer:

// const x; // ❌ SyntaxError: Missing initializer
// You must initialize const at declaration.