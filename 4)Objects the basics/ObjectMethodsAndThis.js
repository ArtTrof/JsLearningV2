let user = {
    name: "John",
    age: 21
};
user.sayHi = function () {
    console.log("Hi I'm " + this.name);
};
user.sayHi();

//Arrow functions don't have 'this'
//For instance, here arrow() uses this from the outer user.sayHi() method:
let user1 = {
    firstName: 'Artem',
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
}

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}
let user = makeUser();
console.log(user.ref.name); // Error: Cannot read property 'name' of undefined
//Opposite
function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}
let user = makeUser();
console.log(user.ref().name); // John

//Task
//create calculator

let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    }
}

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() { // shows the current step
        console.log(this.step);
        return this;
    }
};