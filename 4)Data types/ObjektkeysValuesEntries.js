let user = {
    name: "John",
    age: 30
};
//   Object.keys(user) = ["name", "age"]
//   Object.values(user) = ["John", 30]
//   Object.entries(user) = [ ["name","John"], ["age",30] ]
for (let val of Object.values(user)) {
    console.log(val);
};

let prices = {
    banana: 1,
    apple: 2,
    pear: 3
};
let doublePrices = Object.fromEntries(
    // convert prices to array, map each key/value pair into another pair
    // and then fromEntries gives back the object
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);
console.log(prices.apple);

//Tasks
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
let sumSalaries = function (object) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum; // 650
};

let countKeys = function (object) {
    let count = 0;
    for (let keys in Object.keys(object)) {
        count += 1;
    }
    return count;
    // return Object.keys(obj).length;
}