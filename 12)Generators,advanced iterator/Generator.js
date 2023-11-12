function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}
let generator = generateSequence();
let one = generator.next();
alert(JSON.stringify(one)); // {value: 1, done: false}
let two = generator.next();
alert(JSON.stringify(two)); // {value: 2, done: false}
let three = generator.next();
alert(JSON.stringify(three)); // {value: 3, done: true}

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
};
generator = generateSequence();
for (let value of generator) {
    alert(value);//1, then 2 
}
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
};
generator = generateSequence();
for (let value of generator) {
    alert(value);//1, 2 , 3
};
let sequence = [0..toExponential.generateSequence()];
alert(sequence);// 0, 1, 2, 3

let range = {
    from: 1,
    to: 5,
    *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};

function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}
function* generatePassword() {
    //0..9
    yield* generateSequence(46, 57);
    //A..Z
    yield generateSequence(65, 90);
    //a..z
    yield* generateSequence(97, 122);
};
let str = '';
for (let code of generatePassword()) {
    str += String.fromCharCode(code);
};

function* gen() {
    // Pass a question to the outer code and wait for an answer
    let result = yield "2 + 2 = ?"; // (*)
    alert(result);
};
generator = gen();
let question = generator.next().value;// <-- yield returns the value
generator.next(4);// --> pass the result into the generator
// resume the generator after some time
setTimeout(() => generator.next(4), 1000);

function* gen() {
    let ask1 = yield "2 + 2 = ?";
    alert(ask1); // 4
    let ask2 = yield "3 * 3 = ?"
    alert(ask2); // 9
}
generator = gen();
alert(generator.next().value); // "2 + 2 = ?"
alert(generator.next(4).value); // "3 * 3 = ?"
alert(generator.next(9).done); // true

function* gen() {
    try {
        let result = yield "2 + 2 = ?"; // (1)
        alert("The execution does not reach here, because the exception is thrown above");
    } catch (e) {
        alert(e); // shows the error
    }
}
generator = gen();
question = generator.next().value;
generator.throw(new Error("The answer is not found in my database")); // (2)

function* generate() {
    let result = yield "2 + 2 = ?"; // Error in this line
}
generator = generate();
question = generator.next().value;
try {
    generator.throw(new Error("The answer is not found in my database"));
} catch (e) {
    alert(e); // shows the error
}

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}
const g = gen();
g.next();        // { value: 1, done: false }
g.return('foo'); // { value: "foo", done: true }
g.next();        // { value: undefined, done: true }

//TASKS
function* pseudoRandom(num) {
    let value = num;
    while (true) {
        value = value * 16807 % 2147483647;
        yield value;
    }
}
generator = pseudoRandom(1);
alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073
//same as
function pseudoRandom(seed) {
    let value = seed;
    return function () {
        value = value * 16807 % 2147483647;
        return value;
    }
}