let john = { name: "John" };
let array = [john];
john = null; // overwrite the reference
// the object previously referenced by john is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]

let map = new Map();
map.set(john, "...");
john = null; // overwrite the reference
// john is stored inside the map,
// we can get it by using map.keys()

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok");//works fine (obj key)
weakMap.set("not ok", "really");//Error,because first param is not obj

let object = { name: "object" };
let weakMap2 = new WeakMap();
weakMap2.set(object, "...");
object = null;//overwrite the reference => object is removed from memory

// 📁 visitsCount.js
let visitsCountMap = new Map(); // map: user => visits count
// increase the visits count
function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
};
// 📁 visitsCount.js
let visitsCountMap = new WeakMap(); // weakmap: user => visits count
// increase the visits count
function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}
// 📁 main.js
let ben = { ben: "Ben" };
countUser(john); // count his visits
// later ben leaves us
ben = null;

// 📁 cache.js
let cache = new WeakMap();

// calculate and remember the result
function process(obj) {
    if (!cache.has(obj)) {
        let result = /* calculate the result for */ obj;

        cache.set(obj, result);
        return result;
    }

    return cache.get(obj);
}
// 📁 main.js
let obj = {/* some object */ };
let result1 = process(obj);
let result2 = process(obj);
// ...later, when the object is not needed any more:
obj = null;
// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well

let visitedSet = new WeakSet();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again
// visitedSet has 2 users now
// check if John visited?
alert(visitedSet.has(john)); // true
// check if Mary visited?
alert(visitedSet.has(mary)); // false
john = null;
// visitedSet will be cleaned automatically
