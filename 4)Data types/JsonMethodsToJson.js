let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};
let json = JSON.stringify(student);
console.log(typeof json);//string
console.log(json);

console.log(JSON.stringify(1)) // 1
// a string in JSON is still a string, but double-quoted
console.log(JSON.stringify('test')) // "test"
console.log(JSON.stringify(true)); // true
console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

let user = {
    sayHi() { // ignored
        console.log("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
};
console.log(JSON.stringify(user)); // {} (empty object)

let meetup = {
    title: "Conference",
    room1: {
        number: 1,
        participants: ["First", "second"]
    }
};
console.log(JSON.stringify(meetup));

let room1 = {
    number: 23
};
let meetup1 = {
    title: "Conference",
    participants: ["john", "ann"]
};
meetup1.place = room1;       // meetup references room
room1.occupiedBy = meetup1; // room references meetup
JSON.stringify(meetup); // Error: Converting circular structure to JSON

let room2 = {
    number: 23
};
let meetup2 = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room2 // meetup references room
};
room2.occupiedBy = meetup2; // room references meetup
console.log(JSON.stringify(meetup2, ['title', 'participants']));
// {"title":"Conference","participants":[{},{}]}

console.log(JSON.stringify(meetup2, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}));

console.log(JSON.stringify(meetup, null, 2));

let room3 = {
    number: 23
};
let meetup3 = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room3
};
console.log(JSON.stringify(meetup3));
/*
{
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // (1)
    "room": {"number":23}               // (2)
} 
  */

let room4 = {
    number: 23,
    toJSON() {
        return this.number;
    }
};
console.log(JSON.stringify(room4));

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let userFromData = JSON.parse(userData);

// let json = `{
//     name: "John",                     // mistake: property name without quotes
//     "surname": 'Smith',               // mistake: single quotes in value (must be double)
//     'isAdmin': false                  // mistake: single quotes in key (must be double)
//     "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
//     "friends": [0,1,2,3]              // here all fine
//   }`;

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup5 = JSON.parse(str, function (key, value) {
    if (key == 'date') return new Date(value);
    return value;
});
console.log(meetup5.date.getDate());