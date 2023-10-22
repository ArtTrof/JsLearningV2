let user = {
    name: "John",
    surname: "Smith",
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};
console.log(user.fullName); // John Smith
user.fullName = "Alice Cooper";
console.log(user.name + ' ' + user.surname);//Alice Cooper

user = {
    name: "John",
    surname: "Smith"
};
Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`
    },
    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});
console.log(user.fullName); // John Smith
for (let key in user) console.log(key); // name, surname

/* // Error: Invalid property descriptor.
Object.defineProperty({}, 'prop', {
    get() {
        return 1
    },
    value: 2
}); */

user = {
    get name() {
        return this._name;
    },
    set name(value) {
        if (value.length < 4) {
            console.log("name to short ,must be at least 4 characters");
            return;
        }
        this._name = value;
    }
};
user.name = "Pete";
console.log(user.name); // Pete
user.name = ""; // Name is too short...

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    // age is calculated from the current date and birthday
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
};
let john = new User("John", new Date(1992, 6, 1));
console.log(john.birthday);
console.log(john.age);