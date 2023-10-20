function sayHi(phrase, who) {
    console.log(phrase + ',' + who);
}
setTimeout(sayHi, 1000, "Hello", "John");

// wrong!
setTimeout(sayHi(), 1000);

let timerId = setTimeout(() => console.log("never happens"), 1000);
console.log(timerId); // timer identifier
clearTimeout(timerId);
console.log(timerId); // same identifier (doesn't become null after canceling)

let timer = setInterval(() => console.log('tick'), 2000);
setTimeout(() => { clearInterval(timer); console.log('stop'); }, 5000);

/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/
let timerId2 = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick, 2000);
}, 2000);

let delay = 5000;
let timerId3 = setTimeout(function request() {
    //   ...send request...
    //   if (request failed due to server overload) {
    //     // increase the interval to the next run
    //     delay *= 2;
    //   }
    timerId3 = setTimeout(request, delay);
}, delay);

let i = 1;
setInterval(function () {
    func(i++);
}, 100);
setTimeout(function run() {
    func(i++);
    setTimeout(run, 100);
}, 100);

setTimeout(() => alert("World"));
alert("Hello");//zero delay

//Tasks
/* Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
Make two variants of the solution.
Using setInterval.
Using nested setTimeout. */

function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(function () {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000)
};
function printNumbers(from, to) {
    let current = from;
    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000)
};