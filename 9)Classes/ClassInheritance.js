class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(this.name + " stands still");
    }
}
let animal = new Animal("Boba");

class Rabbit extends Animal {
    hide() {
        console.log(this.name + " hides!");
    }
};
let rabbit = new Rabbit("Carrot");
rabbit.run(5);
rabbit.hide();
class Rabbit extends Animal {
    stop() {
        // ...now this will be used for rabbit.stop()
        // instead of stop() from class Animal
    }
}


function f(phrase) {
    return class {
        sayHi() { console.log(phrase); }
    };
}
class User extends f("Hello") { }
new User().sayHi(); // Hello

class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}
class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
}
class Rabbit extends Animal {
    stop() {
        setTimeout(() => super.stop(), 1000); // call parent stop after 1sec
    }
}

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    // ...
}
class Rabbit extends Animal {
    constructor(name, earLength) {
        this.speed = 0;
        this.name = name;
        this.earLength = earLength;
    }
    // ...
}
// Doesn't work!
rabbit = new Rabbit("White Rabbit", 10); // Error: this is not defined.

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    // ...
}
class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }
    // ...
}
// now fine
rabbit = new Rabbit("White Rabbit", 10);
console.log(rabbit.name); // White Rabbit
console.log(rabbit.earLength); // 10

class Animal {
    name = 'animal';
    constructor() {
        console.log(this.name); // (*)
    }
}
class Rabbit extends Animal {
    name = 'rabbit';
}
new Animal(); // animal
new Rabbit(); // animal

class Animal {
    showName() {  // instead of this.name = 'animal'
        console.log('animal');
    }
    constructor() {
        this.showName(); // instead of console.log(this.name);
    }
}
class Rabbit extends Animal {
    showName() {
        console.log('rabbit');
    }
}
new Animal(); // animal
new Rabbit(); // rabbit
