// 1.Write a function that takes an array of strings and returns a new array with only the unique strings.
// function unique(array){
//     const un = [];
//     for(let arr of array){
//         if(un.includes(arr)){
//             continue
//         }else{
//             un.push(arr)
//         }
//     }
//     return un;
// }

// const a = ['a', 'b' , 'c' , 'd' , 'a' , 'd' ,'e']

// const u = unique(a);
// console.log(u);


// 2.Write a function that takes an array of objects and
// returns a new array with only the objects that have a certain property.

// function getObjectWithProperty(arr, property) {
//   let objectsWithProperty = [];
//   //function iterates over each object in the array
//   for (let obj of arr) {
//     //if it has the specified property using the hasOwnProperty method
//     if (obj.hasOwnProperty(property)) {
//       //if it has property, it gets added to the end of the
//       //objectsWithProperty array using the push method
//       objectsWithProperty.push(obj);
//     }
//   }
//   //returns the objectsWithProperty array with only the objects
//   //that have the specified property in it.
//   return objectsWithProperty;
// }
// //Here's an example of how you can use this function:
// const arr = [
//   { name: "Jhon", age: 32 },
//   { name: "Jane", age: 25, city: "New York" },
//   { name: "Sidra", age: 32, city: "Lahore" },
//   { name: "Sara", age: 35 },
// ];

// const filteredArray = getObjectWithProperty(arr, "city");
// console.log(filteredArray);


// 3. Sorted Numbers
// Write a function that takes an array of numbers and returns a new array with the numbers sorted in descending order.

// function sorted(array) {
//     return array.sort((a, b) => b - a);
// }

// const num = [1, 2, 6, 7, 3, 4];
// console.log(sorted(num)); // [7, 6, 4, 3, 2, 1]


// 4. Sum and Average
// Write a function that takes an array of numbers and returns the sum of all the numbers.
// function sum(arr) {
//     let total = 0;
//     for(let a of arr){
//         total += a;
//     }
//     return total
// }
// const num = [1, 2, 6, 7, 3, 4];
// console.log(sum(num));

// function sum(arr) {
//     return arr.reduce((acc , curr)=> acc+ curr , 0);
// }
// const num = [1, 2, 6, 7, 3, 4];
// console.log(sum(num));


// 5. Longest and Shortest Strings
// Write a function that takes an array of strings and returns the longest string in the array.
// function longest(array) {
//     let longest = array[0];
//     for(let i=0; i< array.length;i++){
//         if(array[i].length > longest.length){
//             longest = array[i]
//         }
//     }
//     return longest
// }

// const words = ["apple", "banana", "kiwi", "pineapple", "pear"];

// console.log(longest(words));


// 6. Largest and Smallest Numbers
// Write a function that takes an array of numbers and returns the largest number in the array.
// function longest(array) {
//     let longest = array[0];
//     for(let i=0; i< array.length;i++){
//         if(array[i] > longest){
//             longest = array[i]
//         }
//     }
//     return longest
// }

// const num = [2,11,41,45,54,78,45,65];

// console.log(longest(num));


// 7. Even and Odd Numbers
// Write a function that takes an array of numbers and returns a new array with only the even numbers.
// function longest(array) {
//     let even = [];
//     for(let i=0; i< array.length;i++){
//         if((array[i]%2)===0){
//             even.push(array[i])
//         }
//     }
//     return even
// }

// const num = [2,11,41,45,54,78,45,65];

// console.log(longest(num));


// 8. Values of a Key in an Array of Objects
// Write a function that takes an array of objects and a key,
// and returns a new array with the values of the specified key in each object.
// function extractvalue(arr , key){
// const val = [];
// for (let obj of arr) {
//     if(key in obj){
//         val.push(obj[key])
//     }
// }
// return val
// }

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob" },
//   { name: "Charlie", age: 30 }
// ];

// console.log(extractvalue(users, "age")); // Output: [25, 30]
// console.log(extractvalue(users, "name")); // Output: ["Alice", "Bob", "Charlie"]


