let user1 = {
    name: 'JOHN'
};
let descriptor = Object.getOwnPropertyDescriptor(user1, 'name');
console.log(JSON.stringify(descriptor, null, 2));
/* {
    "value": "JOHN",
    "writable": true,
    "enumerable": true,
    "configurable": true
  } */

let user2 = {};
Object.defineProperty(user2, "name", {
    value: "John"
});
descriptor = Object.getOwnPropertyDescriptor(user2, 'name');
console.log(JSON.stringify(descriptor, null, 2));
/* {
    "value": "John",
    "writable": false,
    "enumerable": false,
    "configurable": false
} */

let user3 = {
    name: 'John'
};
Object.defineProperty(user3, "name", {
    writable: false
});
user3.name = 'SomeName';// Error: Cannot assign to read only property 'name'

let user4 = {};

Object.defineProperty(user4, "name", {
    value: "John",
    // for new properties we need to explicitly list what's true
    enumerable: true,
    configurable: true
});
console.log(user4.name); // John
user4.name = "Pete"; // Error

let user5 = {
    name: "John",
    toString() {
        return this.name;
    }
};
for (let key in user5) console.log(key);//name , toString
Object.defineProperty(user, "toString", {
    enumerable: false
});
for (let key in user5) console.log(key);//name 

let user6 = {
    name: "John"
};
Object.defineProperty(user6, "name", {
    configurable: false
});
user6.name = "Pete"; // works fine
delete user6.name; // Error

Object.defineProperties(user, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    // ...
});