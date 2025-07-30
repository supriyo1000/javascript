//1 let a =1, b=2;
// // swap using destructuring

// [a,b]=[b,a]

// console.log(a,b);

// 2
// const arr = [1,2,3,4]
// // only get the 1st and 3rd value
// const [a,b,c,d] = arr
// console.log(a,c);

// 3 Destructure the object to extract isDark and assign a default value "light" to a theme variable if it's not present in config.
// const config = { isDark: true };
// const { isDark, theme = "light" } = config;
// console.log(isDark); // true
// console.log(theme);  // "light"

//  4 Destructure to get the first and third elements into variables firstColor and thirdColor.
// const colors = ["red", "green", "blue"];
// const [firstColor ,sc, thirdColor] = colors;
// console.log(firstColor,thirdColor);

// 5 Destructure to extract city into a variable.
// const person = {
//   name: "Anita",
//   address: {
//     city: "Mumbai",
//     pin: 400001
//   }
// };

// const {name , address : {city,pin}} = person
// console.log(city);

// 6 Destructure to assign id to productId and title to productTitle.
// const product = { id: 101, title: "Laptop" };
// const { id: productId, title: productTitle } = product;

// console.log(productId,productTitle);

// 7 Write a function getUser that returns [ "Alice", 25 ], and use destructuring to get name and age.
// const getUser=()=>{
//     return [ "Alice", 25 ]
// }
// const [name , age]= getUser()

// console.log(name,age);

// 8 Destructure to get user and the second mark (92) into variables.
// const response = {
//   user: "Ravi",
//   marks: [85, 92, 78]
// };

// const {user , marks:[a,b,c]}= response

// console.log(user,b);

// 9 Destructure to get language, and set a default of "light" for theme (which may or may not exist).

const settings = {
  preferences: {
    language: "English"
  }
};

const {preferences:{language, theme = "light"}} = settings
console.log(language, theme);







