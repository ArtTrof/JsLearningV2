if (true) {
    var test = true; // use "var" instead of "let"
}
alert(test); // true, the variable lives after if

if (true) {
    let test = true; // use "let"
}
alert(test); // ReferenceError: test is not defined

for (var i = 0; i < 10; i++) {
    var one = 1;
    // ...
}
alert(i);   // 10, "i" is visible after loop, it's a global variable
alert(one); // 1, "one" is visible after loop, it's a global variable

function sayHi() {
    if (true) {
        var phrase = "Hello";
    }

    alert(phrase); // works
}
sayHi();
alert(phrase); // ReferenceError: phrase is not defined

var user = "Pete";
var user = "John"; // this "var" does nothing (already declared)
// ...it doesn't trigger an error

function sayHi() {
    phrase = "Hello";
    alert(phrase);
    var phrase;
}