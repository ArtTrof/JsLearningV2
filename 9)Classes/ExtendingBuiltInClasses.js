// add one more method to it (can do more)
class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
}
let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false
let filteredArr = arr.filter(item => item >= 10);
console.log(filteredArr); // 10, 50
console.log(filteredArr.isEmpty()); // false

class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
    // built-in methods will use this as the constructor
    static get [Symbol.species]() {
        return Array;
    }
}
arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false
// filter creates new array using arr.constructor[Symbol.species] as constructor
filteredArr = arr.filter(item => item >= 10);
// filteredArr is not PowerArray, but Array
console.log(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function