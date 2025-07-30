function test() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }
    console.log(a); // ✅ 10
    console.log(b); // ❌ ReferenceError
    console.log(c); // ❌ ReferenceError
}
test();

const a = 10;
a = 20; // ❌ Error: Assignment to constant variable

const obj = { name: "Supriyo" };
obj.surname = "Chatterjee"; // ✅ Allowed
console.log(obj);


const arr = [1, 2];
arr.push(3); // ✅ Allowed
console.log(arr); // [1, 2, 3]

var x = 5;
var x = 10; // ✅ Allowed

console.log(x);

let y = 5;
let y = 10; // ❌ Error: Identifier 'y' has already been declared

const z = 5;
const z = 10; // ❌ Error

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 3 3 3

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 0 1 2

function test() {
    x = 100; // no var/let/const
}
test();
console.log(x); // ✅ 100 (becomes global variable — bad practice!)

const x; // ❌ SyntaxError: Missing initializer
console.log(x);




