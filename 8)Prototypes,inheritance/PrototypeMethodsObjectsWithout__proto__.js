let animal = {
    eats: true
};
// create a new object with animal as a prototype
let rabbit = Object.create(animal); // same as {__proto__: animal}
alert(rabbit.eats); // true
alert(Object.getPrototypeOf(rabbit) === animal); // true
Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}
rabbit = Object.create(animal, {
    jumps: {
        value: true
    }
});
let clone = Object.create(
    Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
);