let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};
rabbit.__proto__ = animal;// sets rabbit.[[Prototype]] = animal
console.log(rabbit.eats);

animal = {
    eats: true,
    walk() {
        console.log("ANIMAL WALK -_-");
    }
};
rabbit = {
    jumps: true,
    __proto__: animal
};
rabbit.walk();//ANIMAL WALK -_-
let LongEar = {
    earLength: 10,
    __proto__: rabbit
};
LongEar.walk();//ANIMAL WALK
console.log(LongEar.jumps);//true

rabbit = {
    __proto__: animal
};
rabbit.walk = function () {
    console.log("Rabbit! Bounce-bounce!");
};

let user = {
    name: "John",
    surname: "Smith",
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};
let admin = {
    __proto__: user,
    isAdmin: true
};
alert(admin.fullName); // John Smith (*)
// setter triggers!
admin.fullName = "Alice Cooper"; // (**)
alert(admin.fullName); // Alice Cooper, state of admin modified
alert(user.fullName); // John Smith, state of user protected

animal = {
    walk() {
        if (!this.isSleeping) {
            alert(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};
rabbit = {
    name: "White Rabbit",
    __proto__: animal
};
rabbit.sleep();
alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)

// Object.keys only returns own keys
alert(Object.keys(rabbit));
// for..in loops over both own and inherited keys
for (let prop in rabbit) alert(prop);

for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
    if (isOwn) {
        alert(`Our: ${prop}`); // Our: jumps
    } else {
        alert(`Inherited: ${prop}`); // Inherited: eats
    }
}

//tasks
/* The task has two parts.
Given the following objects:
let head = {
  glasses: 1
};
let table = {
  pen: 3
};
let bed = {
  sheet: 1,
  pillow: 2
};
let pockets = {
  money: 2000
};
Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed. */
let head = {
    glasses: 1
};
let table = {
    pen: 3,
    __proto__:head
};
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table
};
let pockets = {
    money: 2000,
    __proto__:bed
};