try {
    setTimeout(function () {
        noSuchVariable; // script will die here
    }, 1000);
} catch (err) {
    console.log("won't work");
};

setTimeout(function () {
    try {
        noSuchVariable; // try...catch handles the error!
    } catch {
        console.log("error is caught here!");
    }
}, 1000);

try {
    lalala; // error, variable is not defined!
} catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined
    console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)

    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    console.log(err); // ReferenceError: lalala is not defined
};

let json = "{ bad json }";
try {

    let user = JSON.parse(json); // <-- when an error occurs...
    console.log(user.name); // doesn't work

} catch (err) {
    // ...the execution jumps here
    console.log("Our apologies, the data has errors, we'll try to request it one more time.");
    console.log(err.name);
    console.log(err.message);
};

json = '{ "age": 30 }'; // incomplete data
try {

    let user = JSON.parse(json); // <-- no errors
    console.log(user.name); // no name!

} catch (err) {
    console.log("doesn't execute");
};

let error = new Error("Things happen o_O");
console.log(error.name); // Error
console.log(error.message); // Things happen o_O

try {
    JSON.parse("{ bad json o_O }");
} catch (err) {
    console.log(err.name); // SyntaxError
    console.log(err.message); // Unexpected token b in JSON at position 2
};

json = '{ "age": 30 }'; // incomplete data
try {
    let user = JSON.parse(json); // <-- no errors
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name"); // (*)
    }
    console.log(user.name);
} catch (err) {
    console.log("JSON Error: " + err.message); // JSON Error: Incomplete data: no name
}

json = '{ "age": 30 }'; // incomplete data
try {
    user = JSON.parse(json); // <-- forgot to put "let" before user
    // ...
} catch (err) {
    console.log("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
    // (no JSON Error actually)
};

json = '{ "age": 30 }'; // incomplete data
try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }
    blabla(); // unexpected error
    console.log(user.name);
} catch (err) {
    if (err instanceof SyntaxError) {
        console.log("JSON Error: " + err.message);
    } else {
        throw err; // rethrow (*)
    }
};

try {
    console.log('try');
    if (confirm('Make an error?')) BAD_CODE();
} catch (err) {
    console.log('catch');
} finally {
    console.log('finally');
};