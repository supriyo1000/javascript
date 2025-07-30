// 1. What is the output of the following code?
// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // for (let i = 0; i < 10; i++) {
// //   setTimeout(() => console.log(b[i]), 1000);
// // }

// for (let i = 0; i < 10; i++) {
//     (function(j) {
//       setTimeout(() => console.log(b[j]), 1000);
//     })(i);
//   }


// 2. In JavaScript, how do you turn an Object into an Array []?
// let obj = { id: "1", name: "user22", age: "26", work: "programmer" };
// // console.log(Object.keys(obj));
// // console.log(Object.values(obj));
// // console.log(Object.entries(obj));
// console.log(Object.entries(obj).map(([key,value])=>({key : value})));



// 3. Write the code to find the vowels
// const letter = ['a', 'm', 'c', 'i', 'g']

// const findVowels = (arr) => {
//     let totalvowels = [];
//     const vowels = ['a', 'e', 'i', 'o', 'u']

//     for (let char of arr) {
//         if (vowels.includes(char)) {
//             totalvowels.push(char);
//         }
//     }
//     return totalvowels
// }

// console.log(findVowels(letter));


// 4. Write the code given If two strings are anagrams of one another, then return true.

// function findAnagrams(a,b) {
//     const x = a?.toLowerCase().split("").sort().join();
//     const y = b?.toLowerCase().split("").sort().join();
//     console.log(x);
//     console.log(y);
//     if(x===y){
//         // console.log(true); return undefined if not return
//         return true
//     }
//     else{
//         // console.log(false); returns undefined if not return
//         return false
//     }
// }

// console.log(findAnagrams("throw" , "worth"));


// 6. Implement a function that returns an updated array with r right rotations on an array of integers a .
// Example:

// Given the following array: [2,3,4,5,7]
// Perform 3 right rotations:
// First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]

// return [4,5,7,2,3]

// const array = [2,3,4,5,7];

// function rotation(arr , rott){
//     for(let i = 0; i < rott; i++){
//         let e = arr.pop();
//         arr.unshift(e);
//         console.log(arr);   
//     }
//     return array
// }

// console.log(rotation(array,3));

// 8
// (function(a){
//     return (function(){
//       console.log(a);
//       a = 23;
//       console.log(a);
//     })()
//   })(45);

// 9

// function add(a){
//     return function(){
//         console.log(a);
//         a = 23
//     }
// }
// add(5) does not return anything
// add(5)() return 5

// 10
// function createcounter(){
//     let count = 0
//     return function(){
//         count++
//         console.log(count);
//     }
// }
// const c1 = createcounter()
// c1()
// c1()
// c1()

// 11

// Each time bigFunc is called, an array of size 700 is being created,
// Modify the code so that we don't create the same array again and again

// function bigFunc(element){
//   let newArray = new Array(700).fill('♥');
//   return newArray[element];
// }

// console.log(bigFunc(599)); // Array is created
// console.log(bigFunc(670)); // Array is created again

// Create the array once and reuse it
// const bigArray = new Array(700).fill('♥');

// function bigFunc(element) {
//   return bigArray[element];
// }

// console.log(bigFunc(599)); // Array is used
// console.log(bigFunc(670)); // Same array is used again

// 12
// / The following code outputs 2 and 2 after waiting for one second
// // Modify the code to output 0 and 1 after one second.

// function randomFunc(){
//   for(var i = 0; i < 2; i++){
//     setTimeout(()=> console.log(i),1000);
//   }
// }
// randomFunc();

// function randomFunc(){
//   for(let i = 0; i < 2; i++){
//     // console.log(i);
//     setTimeout(()=> console.log(i),1000);
//   }
// }
// randomFunc();

// function randomFunc() {
//   for (var i = 0; i < 2; i++) {
//     (function(j) {
//       setTimeout(() => console.log(j), 1000);
//     })(i);
//   }
// }
// randomFunc();

// 13
// let hero = {
//     powerLevel: 99,
//     getPower() {
//         return this.powerLevel;
//     }
// }

// let getPower = hero.getPower();

// let hero2 = { powerLevel: 42 };
// console.log(getPower);
// console.log(getPower.apply(hero2));

//   immediately calls hero.getPower() and stores the result(a number), not the function.
// So: getPower is not a function anymore.
// It's now just the number 99, because hero.getPower() returns 99.

// Because getPower is 99, and 99.apply(...) is not valid — it's not a function.

// 14
// const a = function(){
//     // console.log('a',this); indecate global
  
//     const b = {
//       func1: function(){
//         // console.log('b',this); indecate func1
//       }  
//     }
  
//     const c = {
//       func2: ()=>{
//         // console.log('c',this); indecate global
//       }
//     }
  
//     b.func1();
//     c.func2();
//   }
  
//   a();

// 15
// const b = {
//     name:"Vivek",
//     f: function(){
//       var self = this;
//       console.log(this.name);
//       (function(){
//         console.log(this.name);
//         console.log(self.name);
//       })();
//     }
//   }
//   b.f();

// 16
// var x = 23;

// (function(){
//   var x = 43;
//   (function random(){
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })(); 

// 17
// let x= {}, y = {name:"Ronny"},z = {name:"John"};
// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};
// console.log(x[y]);

// let x = new Map();
// let y = { name: "Ronny" };
// let z = { name: "John" };

// x.set(y, { name: "Vivek" });
// x.set(z, { name: "Akki" });

// console.log(x.get(y)); // ✅ { name: "Vivek" }

// 18
// function runFunc(){
//   console.log("1" + 1);
//   console.log("A" - 1);
//   console.log(2 + "-2" + "2");
//   console.log("Hello" - "World" + 78);
//   console.log("Hello"+ "78");
// }
// runFunc();

// 19
// let a = 0;
// let b = false;
// console.log((a == b));
// console.log((a === b));

// 20
function func1(){
  setTimeout(()=>{
    console.log(x);
    console.log(y);
  },3000);

  var x = 2;
  let y = 12;
}
func1();






