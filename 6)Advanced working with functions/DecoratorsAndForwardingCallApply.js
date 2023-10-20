function slow(x) {
    //some a heavy CPU-intensive job here
    console.log(`Called with ${x}`);
    return x;
};

function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func(x);
        cache.set(x, result);
        return res
    };
};
slow = cachingDecorator(slow);
console.log(slow(1));// slow(1) is cached and the result returned
alert("Again: " + slow(1)); // slow(1) result returned from cache
alert(slow(2)); // slow(2) is cached and the result returned
alert("Again: " + slow(2)); // slow(2) result returned from cache

// we'll make worker.slow caching
let worker = {
    someMethod() {
        return 1;
    },
    slow(x) {
        // scary CPU-heavy task here
        alert("Called with " + x);
        return x * this.someMethod(); // (*)
    }
};
// same code as before
function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func(x); // (**)
        cache.set(x, result);
        return result;
    };
};
alert(worker.slow(1)); // the original method works
worker.slow = cachingDecorator(worker.slow); // now make it caching
alert(worker.slow(2)); // Whoops! Error: Cannot read property 'someMethod' of undefined

function sayHi() {
    alert(this.name);
};
let user = { name: "John" };
let admin = { name: "Admin" };
// use call to pass different objects as "this"
sayHi.call(user); // John
sayHi.call(admin); // Admin
function say(phrase) {
    alert(this.name + ': ' + phrase);
}
let user1 = { name: "John" };
// user becomes this, and "Hello" becomes the first argument
say.call(user1, "Hello"); // John: Hello

let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        alert("Called with " + x);
        return x * this.someMethod(); // (*)
    }
};
function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func.call(this, x); // "this" is passed correctly now
        cache.set(x, result);
        return result;
    };
}
worker.slow = cachingDecorator(worker.slow); // now make it caching
alert(worker.slow(2)); // works
alert(worker.slow(2)); // works, doesn't call the original (cached)

let worker = {
    slow(min, max) {
        return min + max; // scary CPU-hogger is assumed
    }
};
// should remember same-argument calls
worker.slow = cachingDecorator(worker.slow);

let worker = {
    slow(min, max) {
        alert(`Called with ${min},${max}`);
        return min + max;
    }
};
function cachingDecorator(func, hash) {
    let cache = new Map();
    return function () {
        let key = hash(arguments); // (*)
        if (cache.has(key)) {
            return cache.get(key);
        }
        let result = func.call(this, ...arguments); // (**)
        cache.set(key, result);
        return result;
    };
}
function hash(args) {
    return args[0] + ',' + args[1];
}
worker.slow = cachingDecorator(worker.slow, hash);
alert(worker.slow(3, 5)); // works
alert("Again " + worker.slow(3, 5)); // same (cached)

let wrapper = function () {
    return func.apply(this, arguments);
};

function hash() {
    alert(arguments.join()); // Error: arguments.join is not a function
};

function hash() {
    alert([].join.call(arguments)); // 1,2
};

//Tasks
/* Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.
Every call is saved as an array of arguments.
For instance:
function work(a, b) {
  alert( a + b ); // work is an arbitrary function or method
}
work = spy(work);
work(1, 2); // 3
work(4, 5); // 9
for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
P.S. That decorator is sometimes useful for unit-testing. Its advanced form is sinon.spy in Sinon.JS library. */
function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(...args);
        return func.apply(this, args);
    }
    wrapper.calls = [];
    return wrapper;
}