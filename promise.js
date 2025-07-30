// Question 1: Basic Promise without API

// Task:
// 1. Create a basic Promise that simulates an asynchronous task using setTimeout.
// 2. It should resolve after 1 second with a success message or reject with an error message.
// 3. Handle the result using .then() and .catch().


// const myPromise = new Promise((resolve , reject) => {
//     const success = false;
//     if(success){
//         setTimeout(() => {
//             resolve("promise success");
//         }, 1000);
//     }
//     else{
//         reject("promise failed")
//     }
// })

// myPromise.then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })


// Question 2: Promise with async/await (no API)

// Task:
// 1. Create a function that returns a Promise which resolves after 1 second with a message.
// 2. Use an async function to await the Promise and print the result using try...catch.


// const myPromise = () => {
//     const success = false;
//     return new Promise((resolve, reject) => {
//         if (success) {
//             setTimeout(() => {
//                 resolve("promise success")
//             }, 1000);
//         } else {
//             reject("promise failed")
//         }
//     })
// }

// async function result() {

//     try {
//         const response = await myPromise();
//         console.log(response);
//     } catch (error) {
//         console.log(error);

//     }

// }

// result();


// Question 4: Simulated Login with Retry (No API)

// Task:
// 1. Create a function loginUser(username, password) that returns a Promise.
// 2. It should resolve after 2 seconds if the username is "admin" and password is "1234". Otherwise, reject.
// 3. Create an async function startLogin() that:
//    - Tries to login up to 3 times.
//    - Waits 1 second between retries.
//    - Logs success or logs failure after 3 failed attempts.

function loginUser(username, password){
    return new Promise((resolve, reject) => {
        if(username === "admin" && JSON.stringify(password) === "1234"){
            setTimeout(()=>{
                resolve("login successfull")
            },2000)
        } else{
            reject("invalid login details!!")
        }
    })
}

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function startLogin(uname, pass, retries, delayMs) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await loginUser(uname, pass);
      console.log(`✅ Attempt ${attempt}: ${response}`);
      return; // Exit if successful
    } catch (error) {
      console.warn(`❌ Attempt ${attempt}: ${error}`);
      if (attempt < retries) {
        console.log(`⏳ Retrying in ${delayMs}ms...`);
        await wait(delayMs); // Delay before next retry
      } else {
        console.error("❌ All attempts failed.");
      }
    }
  }
}

startLogin("admin",1234,3,1000)





