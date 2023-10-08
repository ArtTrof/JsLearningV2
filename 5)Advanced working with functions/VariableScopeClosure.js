{
    // do some job with local variables that should not be seen outside
    let message = "Hello"; // only visible in this block
    console.log(message); // Hello
};
console.log(message);//Error:message not defined

if (true) {
    let phrase = "Hello";
    console.log(phrase);//Hello
};
console.log(phrase);//Error:no such variable

function sayHiBye(firstName, lastName) {
    function getFullName() {
        return firstName + lastName;
    };
    console.log("Hello" + getFullName());
    console.log("Bye" + getFullName());
};

function f() {
    let value = Math.random();

    return function () { console.log(value); };
}
// 3 functions in array, every one of them links to Lexical Environment
// from the corresponding f() run
let arr = [f(), f(), f()];
let g = f(); // while g function exists, the value stays in memory
g = null; // ...and now the memory is cleaned up