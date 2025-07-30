// Question 1. What about an example to explain all this?
// function outer(){
//   var a =10;
//   function inner(){
//     console.log(a);
//   }
//   a += 1
//   return inner;
// }

// // outer()();
// var close = outer(); // this will give you outer function
// close(); // this will give you inner function and equivalent 
// close();

// // When outer() returns, its execution context is normally destroyed,
// // but since inner() (now stored in close) still references a variable (a) declared in outer,
// // JavaScript keeps that environment alive.



// Question 2. What if var declaration is moved to Line 5, just before return statement. What will happen? Will it still be a Closure?
// function outer(){ 
//   function inner(){
//     console.log(a);
//   }
//   var a =10;
//   return inner;
// }

// var close = outer(); // this will give you outer function
// close(); // this will give you inner function and equivalent



// Question 3. What if var is replaced by let in Line 5. What will happen?
// function outer(){ 
//   function inner(){
//     console.log(a);
//   }
//   let a =10; // let instead of var
//   return inner;
// }

// var close = outer(); // this will give you outer function
// close(); // this will give you inner function and equivalent



// Question 7. What if outer() have a parameter? What happens then?
// function outer(b){ 
//   function inner(){
//     console.log(a, b); // try printing b here
//   }
//   let a =10; // let instead of var
//   return inner;
// }

// // Passing argument here 
// var close = outer("Hi Closures"); // this will give you outer function
// close(); // this will give you inner function and equivalent



// Question 8. What if outer() function is nested into another function?
// Will inner() function have access to outer() function’s environment as well?
// function outest(){
//   var c = 12; 
//   function outer(b){ 
//     function inner(){
//       console.log(a, b, c); // try printing b and c  here
//     }
//     let a =10; // let instead of var
//     return inner;
//   }
//   return outer;
// }

// // Passing argument here 
// var close = outest()("Hi Closures"); // this will give you outer function
// close(); // this will give you inner function and equivalent


// Question 9. What if we have global variable with conflicted name?
// function outest(){
//   var c = 12; 
//   function outer(b){ 
//     function inner(){
//       console.log(a, b, c); // try printing b and c  here
//     }
//     let a =10; // let instead of var
//     return inner;
//   }
//   return outer;
// }

// let a =100;
// // Passing argument here 
// var close = outest()("Hi Closures"); // this will give you outer function
// close(); // this will give you inner function and equivalent


// question 11
// function a(){
//   var x = 10, z = 20;
//   return function b(){
//    console.log(x);
//   }
// }
// var y = a();
// console.log(y);


// question 12
// function createCounter() {
//     var count = 0;

//     function counter() {
//         count++;
//         console.log(count);
//     }
//     return counter;
// }

// var increment = createCounter();

// increment(); // Output: 1

// increment(); // Output: 2

// increment(); // Output: 3


// question 13
// function outer() {
//     var x = 10;

//     function inner() {
//         var y = 5;
//         console.log(x + y);
//         x = 20;
//     }
//     return inner;
// }

// var innerFunc = outer();

// innerFunc();

// innerFunc();


// question 14
// var num = 10;
// (()=>{
//    console.log(num);
//    var num = 20;
//    console.log(num);
// })();

// // The right answer here is undefined 20.
// // This is because of the scope of the closure itself and a little feature of Javascript called hoisting.
// // When the above code is interpreted, it is converted to this

// var num = 10;
// (()=>{
//    var num;
//    console.log(num);   // undefined
//    num = 20;
//    console.log(num);   // 20
// })();


// question 15
// function myCounter() {
//     let counter = 0;
//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     }
//     return myFunction;
// }

// var increment = myCounter();

// console.log(increment()); // should print 1
// console.log(increment()); // should print 2
// console.log(increment()); // should print 3

// function myCounter() {
//     let counter = 0
//     function inner() {
//         counter = counter + 1
//         return counter
//     }
//     // return inner
// }
// var increment = myCounter()
// // console.log(increment()); // returns 1
// // console.log(increment()); // returns 1
// console.log(increment); // returns undefined


// question 16
var i;
for (i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);  
  }, 100);
}