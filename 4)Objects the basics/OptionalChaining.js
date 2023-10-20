let user = {}; // user has no address
console.log(user?.address?.street);//undefined no error
user = null;
console.log(user?.address);//undefined
console.log(user?.address.street);//undefined

let userAdmin = {
    admin() {
        alert("I am admin");
    }
};

let userGuest = {};
userAdmin.admin?.();//I'm admin
userGuest.admin?.();//nothing happens

let key = "firstName";
let user1 = {
    firstName: "John"
};
let user2 = null;
console.log(user1?.[key]);//John
console.log(user2?.[key]);//undefined 

delete user?.name;//delete user.name if user exists

user = null;
user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"