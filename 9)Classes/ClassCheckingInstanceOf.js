class Rabbit { }
let rabbit = new Rabbit();
// is it an object of Rabbit class?
console.log(rabbit instanceof Rabbit); // true

// instead of class
function Rabbit() { }
console.log(new Rabbit() instanceof Rabbit); // true

/* 
works for	returns
typeof	primitives	string
{}.toString	primitives, built-in objects, objects with Symbol.toStringTag	string
instanceof	objects	true/false 
*/