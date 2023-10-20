let arr1 = new Array();
let arr2 = [];
let arr3 = ['Apple', { name: 'John' }, true, function () { alert('hello'); }];
console.log(arr3.at(0));
arr3.pop();//removes last elem
arr3.push('push');//adds push to the end of arr
arr3.shift();//removes first elem
arr3.unshift('Apple');//returns it

let fruits = new Array('Apple', 'Pear', 'Banana');
for (let fruit of fruits) {
    console.log(fruit);
};

let arr = [1, 2, 3, 4, 5];
arr.length = 2; // truncate to 2 elements
console.log(arr); // [1, 2]
