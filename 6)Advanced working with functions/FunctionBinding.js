let user = {
    firstName: "John",
    sayHi() {
        console.log(`HELLO ${this.firstName}!`);
    }
};
setTimeout(user.sayHi, 1000);//Hello undefined 

setTimeout(function () { user.sayHi(); }, 1000);//Hello,John!
setTimeout(() => user.sayHi(), 1000); // Hello, John!
// ...the value of user changes within 1 second
user = {
    sayHi() { console.log("Another user in setTimeout!"); }
};
// Another user in setTimeout!

let user = {
    firstName: "John"
};
function func() {
    console.log(this.firstName);
}
let funcUser = func.bind(user);
funcUser(); // John

let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};
let sayHi = user.sayHi.bind(user); // (*)
// can run it without an object
sayHi(); // Hello, John!
setTimeout(sayHi, 1000); // Hello, John!
// even if the value of user changes within 1 second
// sayHi uses the pre-bound value which is reference to the old user object
user = {
    sayHi() { console.log("Another user in setTimeout!"); }
};

for (let key in user) {
    if (typeof user[key] == 'function') {
        user[key] = user[key].bind(user);
    }
};

function mul(a, b) {
    return a * b;
}
let double = mul.bind(null, 2);
console.log(double(3)); // = mul(2, 3) = 6
console.log(double(4)); // = mul(2, 4) = 8
console.log(double(5)); // = mul(2, 5) = 10

function partial(func, ...argsBound) {
    return function (...args) { // (*)
        return func.call(this, ...argsBound, ...args);
    }
}
// Usage:
let user = {
    firstName: "John",
    say(time, phrase) {
        console.log(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};
// add a partial method with fixed time
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
user.sayNow("Hello");
// Something like:
// [10:00] John: Hello!