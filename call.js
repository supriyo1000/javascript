// const user1 = {
//     name : 'Alice',
//     age: 30,
//     greet: function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const user2 = {
//     name: 'Bob',
//     age: 25,
// }

// user1.greet.call(user2); // Hello, my name is Alice and I am 30 years old.

// const num = [1, 2, 3, 4, 5];
// const max = Math.min.apply(null, num);
// console.log(max); // 5

// const person = {
//     name: "Supriyo",
//     sayHi() {
//         setTimeout(function () {
//             console.log(`Hi, I'm ${this.name}`);
//         }, 1000);
//     }
// };
// const person = {
//     name: "Supriyo",
//     sayHi() {
//         setTimeout(function () {
//             console.log(`Hi, I'm ${this.name}`)
//         }.bind(this), 1000);
//     }
// };

// person.sayHi(); // Hi, I'm undefined
// person.sayHi.bind(person)(); // Hi, I'm Supriyo


function multiply(a, b) {
    return a * b;
}

const multiplyBy5 = multiply.bind(null, 5);

console.log(multiplyBy5(2)); // 10
console.log(multiplyBy5(4)); // 20

5. Use bind() to partially apply arguments(currying)
Question:
Create a multiply function and bind it to always multiply by 5.

Answer:
js
Copy
Edit
function multiply(a, b) {
    return a * b;
}

const multiplyBy5 = multiply.bind(null, 5);

console.log(multiplyBy5(2)); // 10
console.log(multiplyBy5(4)); // 20
✅ 6. What is the output ?
    js
Copy
Edit
const obj = {
    name: "Infosys",
    show: function () {
        console.log(this.name);
    }
};

const showFn = obj.show;
showFn(); // ?
Answer:
javascript
Copy
Edit
undefined
Why ? Because this is lost when showFn is detached from obj.

✅ Fix:
js
Copy
Edit
const boundShow = obj.show.bind(obj);
boundShow(); // Infosys
✅ 7. Use call to convert arguments object to array
Question:
How do you convert the arguments object to a real array ?

    Answer :
    js
Copy
Edit
function demo() {
    const args = Array.prototype.slice.call(arguments);
    console.log(args); // real array
}
demo(1, 2, 3); // [1, 2, 3]
✅ 8. Output - based MCQ
Question:
What is the output of the following ?

    js
Copy
Edit
const greet = function (age) {
    console.log(`${this.name} is ${age} years old`);
};

const user = { name: "Ravi" };

greet.call(user, 25);
greet.apply(user, [30]);

const greetUser = greet.bind(user, 35);
greetUser();
Answer:
pgsql
Copy
Edit
Ravi is 25 years old
Ravi is 30 years old
Ravi is 35 years old
✅ 9. What happens if you use bind but don’t call it ?
    js
Copy
Edit
const obj = {
    x: 10,
    show() {
        console.log(this.x);
    }
};

const showFn = obj.show.bind(obj);
showFn(); // ✅ 10

obj.show(); // ✅ 10

const justBind = obj.show.bind(obj);
// No output unless justBind() is called
✅ 10. Create a polyfill for bind()(Advanced)
Question:
Can you write your own version of bind() ?

    Answer :
    js
Copy
Edit
Function.prototype.myBind = function (context, ...args) {
    const fn = this;
    return function (...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
    };
};

// Usage:
function say(name) {
    console.log(`Hello, ${name}`);
}

const bound = say.myBind(null, "Supriyo");
bound(); // Hello, Supriyo