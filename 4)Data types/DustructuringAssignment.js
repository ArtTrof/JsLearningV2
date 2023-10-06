let arr = ["John", "Smith"];
// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstname, lastname] = arr;

let [firstName, lastname] = "John Smith".split(' ');
// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

let [a, b, c] = "abc"; // ["a", "b", "c"]

let [one, two, three] = new Set([1, 2, 3]);

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

let user = {
    name: "John",
    age: 30
};
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`);
};

let user = new Map();
user.set("name", "John");
user.set("age", "30");
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}}`);
};

let guest = "Jane";
let admin = "Pete";
// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

//Only 2 first elements will be taken => all other are ignored
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
rest.length;//2

let [firstName, lastname] = [];
console.log(firstName);//undefined

// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];
console.log(name);    // Julius (from array)
console.log(surname); // Anonymous (default used)

// runs only prompt for surname
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];
console.log(name);    // Julius (from array)
console.log(surname); // whatever prompt gets

let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let { title, width, height } = options;
console.log(title);  // Menu
// changed the order in let {...}
let { height, width, title } = { title: "Menu", height: 200, width: 100 };
// { sourceProperty: targetVariable }
let { width: w, height: h, title } = options;
// width -> w
// height -> h
// title -> title

let options = {
    title: "Menu"
};
let { width = 100, height = 200, title } = options;
console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

let { width = prompt("width?"), title = prompt("title?") } = options;
// only extract title as a variable
let { title } = options;

let options = {
    title: "Menu",
    height: 200,
    width: 100
};
// title = property named title
// rest = object with the rest of properties
let { title, ...rest } = options;
// now title="Menu", rest={height: 200, width: 100}
console.log(rest.height);  // 200
console.log(rest.width);   // 100
// error in this line
{ title, width, height } = { title: "Menu", width: 200, height: 100 };
// okay now
({ title, width, height } = { title: "Menu", width: 200, height: 100 });

let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};
let { size: {
    width,
    height },
    items: [item1, item2],
    title = "Menu"
} = options;
console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut

function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
    // ...
};
// undefined where default values are fine
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"]);

// we pass object to function
let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
    // title, items – taken from options,
    // width, height – defaults used
    alert(`${title} ${width} ${height}`); // My Menu 200 100
    alert(items); // Item1, Item2
}
showMenu(options);
function showMenu({
    title = "Untitled",
    width: w = 100,  // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2] // items first element goes to item1, second to item2
}) {
    alert(`${title} ${w} ${h}`); // My Menu 100 200
    alert(item1); // Item1
    alert(item2); // Item2
};
showMenu({}); // ok, all values are default
showMenu(); // this would give an error
//We can fix this by making {} the default value for the whole object of parameters:
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
    alert(`${title} ${width} ${height}`);
};