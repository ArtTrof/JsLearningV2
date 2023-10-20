let user = {
    name: 'Test',
    age: 20
};
console.log(user.age);
user.isAdmin = true;
delete user.isAdmin;
function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
};

// function makeUser(name, age) {
//     return {
//       name, // same as name: name
//       age,  // same as age: age
//       // ...
//     };
//   }
console.log("name" in user);//true

for (let key in user) {
    console.log(key);
    console.log(user[key]);
    console.log(user.key);//undefined
}

//Tasks
let user1 = {
    name: 'John'
};
user1.surname = 'Smith';
user1.name = 'Pere';
delete user1.name;

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
};

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for (key in salaries) {
    sum += sum + salaries[key];
};

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
for(key in menu){
    if(key.typeof(Number))
    menu[key]=menu[key]*2;
}
