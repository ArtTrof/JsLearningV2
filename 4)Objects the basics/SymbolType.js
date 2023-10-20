// id is a symbol with the description "id"
let id = Symbol("id");
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2); // false
console.log(id);// TypeError: Cannot convert a Symbol value to a string
console.log(id.toString());// Symbol(id), now it works

let user = { // belongs to another code
    name: "John"
};
user[id] = 1;
console.log(user[id]); // we can access the data using the symbol as the key

let id4 = Symbol("id");
let user = {
    name: "John",
    [id4]: 123 // not "id4": 123
};
for (let key in user) console.log(key);//name , no symbols
let clone = Object.assign({}, user);
console.log(clone[id]);//123

// read from the global registry
let id5 = Symbol.for("id"); // if the symbol did not exist, it is created
// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");
console.log(id5==idAgain);//true

let sym = Symbol.for("sum");
let sym2 = Symbol.for("id");
console.log(Symbol.keyFor(sym));//name

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");
console.log( Symbol.keyFor(globalSymbol) ); // name, global symbol
console.log( Symbol.keyFor(localSymbol) ); // undefined, not global
console.log(localSymbol.description);