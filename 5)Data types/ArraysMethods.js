let arr = ["I", "go", "home", "value", "more values"];
delete arr[1];
console.log(arr[1]);//undefined
arr.splice(1, 1);//removes 1 element starting from index 1
arr.splice(0, 3, "changed", "values");//removes first 3 elements and replaces them with another
console.log(arr);

let removed = arr.splice(0, 2);//remove first 2 elements
console.log(removed);

arr.splice(2, 0, "first", "second");//remove 0 , insert from 2nd pos 
console.log(arr);

console.log(arr.slice(1, 3));//copy from 1 to 3
console.log(arr.slice(-2));//copy from -2 till the end

let arrNumbers = [1, 2];
console.log(arrNumbers.concat([3]));

arr.forEach(console.log);

console.log(arrNumbers.indexOf(1));

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];
console.log(users.findIndex(user => user.name == 'John'));//0
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

let length = arr.map(element => element.length);
console.log(length);

let arrSort = [1, 2, 15];
// the method reorders the content of arr
arrSort.sort();
console.log(arrSort);//// 1, 15, 2  The items are sorted as strings by default.
arrSort.reverse();
console.log(arrSort);

let names = "biba,boba,bubu";
let splitted = names.split(",");
console.log(splitted);
console.log('text'.split(''));// t e x t
console.log(splitted.join(';'));

let arrReduce = [1, 2, 3, 4, 5];
let result = arrReduce.reduce((sum, current) => sum + current);//15

let empty = [];
// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
empty.reduce((sum, current) => sum + current);

console.log(Array.isArray({}));//false
console.log(Array.isArray([]));//true

