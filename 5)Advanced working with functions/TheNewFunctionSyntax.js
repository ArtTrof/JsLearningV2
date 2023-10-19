let func = new Function('a', 'b', 'return a + b');
let sayHi = new Function('console.log("Hello")');

function getFunc() {
    let value = "test";
    let func = new Function('alert(value)');
    return func;
}
getFunc()(); // error: value is not defined

function getFunc() {
    let value = "test";

    let func = function () { alert(value); };

    return func;
}
getFunc()(); // "test", from the Lexical Environment of getFunc