for (let char of 'text') {
    console.log(char);
};

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};
let arr = Array.from(arrayLike);
console.log(arr.pop());//World method 

let arr1 = [1, 2, 3, 4, 5];
let from = Array.from(arr1, num => num * num);
console.log(from);

let str = 'some text';
let chars = [];
for (let char of str) {
    chars.push(char);
};
console.log(chars);
