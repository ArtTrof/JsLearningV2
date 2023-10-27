class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name + ' hello');
    }
};
let user = new User('Biba');
console.log(typeof User);

// 1. Create constructor function
function User(name) {
    this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it
// 2. Add the method to prototype
User.prototype.sayHi = function () {
    console.log(this.name);
};
// Usage:
user = new User("John");
user.sayHi();


function makeClass(phrase) {
    // declare a class and return it
    return class {
        sayHi() {
            console.log(phrase);
        }
    };
}
// Create a new class
let User = makeClass("Hello");
new User().sayHi(); // Hello

class User {
    constructor(name) {
        // invokes the setter
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}
user = new User("John");
console.log(user.name); // John
user = new User(""); // Name is too short.

class User {
    ['say' + 'Hi']() {
        console.log("Hello");
    }
}
new User().sayHi();

class Button {
    constructor(value) {
        this.value = value;
    }
    click() {
        console.log(this.value);
    }
}
let button = new Button("hello");
setTimeout(button.click, 1000); // undefined

class Button {
    constructor(value) {
        this.value = value;
    }
    click = () => {
        console.log(this.value);
    }
}
button = new Button("hello");
setTimeout(button.click, 1000); // hello