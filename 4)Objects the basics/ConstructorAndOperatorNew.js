function User(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
    this.sayHi = function () {
        console.log("hello i'm " + this.name + " and i'm admin :" + this.isAdmin);
    }
};
let user = new User("Name", false);
user.sayHi();

//Tasks
//Create calculator 
function Calculator(a, b) {
    this.read = function () {
        this.a = a;
        this.b = b;
    },
        this.sum = function () {
            return this.a + this.b;
        },
        this.mul = function () {
            return this.a * this.b;
        }
};
let calculator = new Calculator(1, 2);
calculator.read();
console.log(calculator.sum());

//Create accumulator
function accumulator(stringValue) {
    this.stringValue = stringValue;
    this.read = function () {
        this.stringValue = + prompt("new value?", 0);
    }
    this.value = function () {
        return this.stringValue;
    }
};
