// 1 Borrow a method using call()

// const person1 = { name: 'Alice' };
// const person2 = { name: 'Bob' };

// function greet(greeting) {
//   console.log(`${greeting}, I am ${this.name}`);
// }

// // Use person1's context to greet as person2

// greet.call(person2 , "hello")


// 2 Convert an array-like object to an array using call()
// function arrayFromArgs() {
//   // Convert 'arguments' to a real array using call()
//   const args = [].slice.call(arguments);
//   console.log(args);

// }

// arrayFromArgs(1,2,3)


// 3 Use apply() to find the max value in an array
// const nums = [3, 6, 2, 9, 1];
// // Use apply to find max using Math.max
// const max = Math.max.apply(null ,nums)
// console.log(max);


// 4 Use bind() to permanently bind a function’s this
// const myModule = {
//   x: 42,
//   getX: function () {
//     // console.log(this.x);
//     return this.x;
//   }
// };

// const unboundGetX = myModule.getX;
// const boundGetX = unboundGetX.bind(myModule);
// console.log(boundGetX()); // ✅ 42


// 5 Partial function using bind()

// function multiply(a, b) {
//   return a * b;
// }
// // Create a double() function from multiply using bind
// const double = multiply.bind(null,2);
// console.log(double(3));


// 6 Difference between call, apply, and bind (code + explanation)
// function intro(city, country) {
//   console.log(`${this.name} lives in ${city}, ${country}`);
// }

// const user = { name: 'Max' };

// // Use call, apply, bind to call intro

// intro.call( user,"kolkata" , "india")
// intro.apply(user,["kolkata" , "india"])
// const a = intro.bind(user,"kolkata" , "india")
// a()


// 7  Change context inside a loop using call()
// const user = {
//     name: 'Ava',
//     skills: ['JS', 'React', 'Node']
// };

// // Print: "Ava knows JS", "Ava knows React", etc. using call in forEach

// user.skills.forEach(function (skill) {
//     function sayskill() {
//         console.log(`${this.name} knows ${skill}`);
//     }
//     sayskill.call(user)
// })


// 8 Chain method calls using bind()

function sayName() {
  console.log(this.name);
}

const obj1 = { name: 'Sam' };
const obj2 = { name: 'Ella' };

const chained = sayName.bind(obj1).bind(obj2);
// What will this print?
chained()





