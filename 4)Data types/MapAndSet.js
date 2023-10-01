let map = new Map();
map.set('1', 'str1');
map.set(2, 'num1');
map.set(true, 'bool1');
console.log(map.get('1'));
console.log(map.get(2));

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);
for (let vegetables of recipeMap.keys()) {
    console.log(vegetables);
};
for (let value of recipeMap.values()) {
    console.log(value);
};
for (let entry of recipeMap) {
    console.log(entry);
};
recipeMap.forEach((value, key) => console.log(`${key}: ${value}`));

let object = {
    name: 'John',
    age: 30
};
let mapObj = new Map(Object.entries(object));
console.log(mapObj.get('name'));

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);
// now prices = { banana: 1, orange: 2, meat: 4 }

let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
//size 3 because keeps only unique values
console.log(set.size());

let set2 = new Set(["oranges", "apples", "bananas"]);
for (let value of set2) {
    console.log(value);
};

//tasks
/* function unique(array) {
    let set = new Set();
    array.forEach(a => set.add(a));
    return set;
}; */
function unique(arr) {
    return Array.from(new Set(arr));
};

