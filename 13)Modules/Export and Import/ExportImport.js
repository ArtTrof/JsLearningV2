export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const MODULES_BECAME_STANDARD_YEAR = 2015;

export class User {
    constructor(name) {
        this.name = name;
    }
}

export function sayHi(user) {
    alert(`Hello, ${user}!`);
}  // no ; at the end
function sayBye(user) {
    alert(`Bye, ${user}!`);
}

export {sayHi, sayBye};
export {sayHi as hi, sayBye as bye};

export default class User { // just add "default"
    constructor(name) {
        this.name = name;
    }
}

export default class { // no class name
    constructor() {
    }
}
export default function (user) { // no function name
    alert(`Hello, ${user}!`);
}
// export a single value, without making a variable
export default ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export class { // Error! (non-default export needs a name)
    constructor() {
    }
}

function sayHi(user) {
    alert(`Hello, ${user}!`);
}
// same as if we added "export default" before the function
export {sayHi as default};

export default class User {
    constructor(name) {
        this.name = name;
    }
}
export function sayHi(user) {
    alert(`Hello, ${user}!`);
}

