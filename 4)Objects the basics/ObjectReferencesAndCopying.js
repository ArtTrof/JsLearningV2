let user = { name: "John" };
let admin = user; // copy the reference
admin.name = 'Pete'; // changed by the "admin" reference
console.log(user.name); // 'Pete', changes are seen from the "user" reference

let a = {};
let b = a; // copy the reference
console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

const user1 = {
    name: "John"
};
user1.name = "Pete";
console.log(user1.name); // Pete

//To clone 
let clone = {}
for (key in user) {
    clone[key] = user[key];
};

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

let clone1 = Object.assign({}, user);

let user2 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};
let clone3 = Object.assign({}, user);
console.log(user2.sizes === clone3.sizes); // true, same object
// user and clone share sizes
user2.sizes.width = 60;    // change a property from one place
console.log(clone3.sizes.width); // 60, get the result from the other one
//To fix it use structuredClone();
let clone4 = structuredClone(user2);

