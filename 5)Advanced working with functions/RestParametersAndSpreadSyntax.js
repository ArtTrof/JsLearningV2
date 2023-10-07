function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
};
function showName(firstName, lastName, ...titles) {
    console.log(firstName, lastName);
    console.log(titles.length);
};

let arr = [3, 5, 1];
console.log(Math.max(...arr)); // 5 (spread turns array into a list of arguments)

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log(Math.max(...arr1, ...arr2)); // 8
console.log(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25

let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];
let merged = [0, ...arr3, 2, ...arr4];// 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

let str = "Hello";
console.log(...str);// H,e,l,l,o

let ar = [1, 2, 3, 4];
let arCopy = [...arr];

// do the objects have the same contents?
console.log(JSON.stringify(ar) === JSON.stringify(arCopy)); // true
// are the objects equal?
console.log(ar === arCopy); // false (not same reference)
// modifying our initial object does not modify the copy:
obj.d = 4;
console.log(JSON.stringify(ar)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(arCopy)); // {"a":1,"b":2,"c":3}