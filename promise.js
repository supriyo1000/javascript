// 1. Basic Promise: What’s the output ?

// const p = new Promise((resolve, reject) => {
//     console.log("Promise started");
//     resolve("Resolved!");
// });

// p.then((data) => console.log(data));
// console.log("After promise");

// resolve() goes to the microtask queue → runs after synchronous code finishes.

// 2. Create a function wait(ms) that returns a Promise and resolves after ms milliseconds.

// function wait(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Waited for ${ms/1000} seconds`);
//         }, ms);
//     })
// }

// wait(2000).then((msg)=> console.log(msg)); // Waited for 2000 milliseconds

// 3. Write an async function to fetch user data from an API and log only the user's name.

// const users = new Promise((resolve, reject) => {
//     resolve([
//         { id: 1, name: "Alice" },
//         { id: 2, name: "Bob" }
//     ]);
// });

// function fetchUsers() {
//     const response = users.then((data) => {
//         return data.map(user => user.name);
//     });
//     return response;
// }

// fetchUsers().then((names) => console.log(names)); // ["Alice", "Bob"]

// 4. Given 3 APIs, fetch them: Sequentially and In parallel

// async function fetchSequentially() {
//     const res1 = await fetch("/api/user1")
//     const res2 = await fetch("/api/user2")
//     const res3 = await fetch("/api/user3")

//     return [res1, res2, res3];
// }

// // If each request takes ~1s → total ≈ 3s

// async function fetchParallel() {
//     const [r1, r2, r3] = await Promise.all([
//         fetch("/api/1"),
//         fetch("/api/2"),
//         fetch("/api/3"),
//     ]);
//     return [r1, r2, r3];
// }
// If each request takes ~1s → total ≈ 1s

// 5. Convert the below Promise code into async / await and handle errors.

// fetch("https://example.com/api")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

// async function fetchData() {
//     try {
//         const res = await fetch("https://example.com/api");
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);

//     }
// }

// 6. Write an async function that logs numbers 1, 2, 3 with a 1 - second gap between them.

// function logNumbers() {
//     // for (let i = 1; i <= 3; i++) {
//     //     setTimeout(() => {
//     //         console.log(i);
//     //     },i * 1000); // 1s, 2s, 3s
//     // }

//     let index = 1;
//     const intervalId = setInterval(() => {
//         console.log(index);
//         index++;
//         if (index === 4) {
//             clearInterval(intervalId);
//         }
//     }, 1000);
// }
// logNumbers(); // 1 2 3 (with 1s gap)

// 7. Why is this slow ? How to improve ?

// async function loadAll() {
//     for (const id of [1, 2, 3]) {
//         await fetch(`/api/user/${id}`);
//     }
// }

// async function loadAll() {
//     const responses = await Promise.all([
//         fetch(`/api/user/1`),
//         fetch(`/api/user/2`),
//         fetch(`/api/user/3`)
//     ]);

//     const users = await Promise.all(responses.map(res => res.json()));
//     return users;
// }


