let animal = {
    eats: true
};
function Rabbit(name) {
    this.name = name;
};
/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/
console.log(Rabbit.prototype.constructor == Rabbit); // true
Rabbit.prototype = animal;
let rabbit = new Rabbit("Black");//  rabbit.__proto__ == animal
console.log(rabbit.eats);
let rabbit2 = rabbit.constructor("White");

function Rabbit() { }
Rabbit.prototype = {
    jumps: true
};
rabbit = new Rabbit();
console.log(rabbit.constructor === Rabbit); // false

function Rabbit() { }
// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit.prototype.jumps = true
// the default Rabbit.prototype.constructor is preserved
Rabbit.prototype = {
    jumps: true,
    constructor: Rabbit
};