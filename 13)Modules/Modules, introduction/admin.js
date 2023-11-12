export let admin = {
    name: "John"
};
// 📁 1.js
import { admin } from './admin.js';
admin.name = "Pete";

// 📁 2.js
import { admin } from './admin.js';
alert(admin.name); // Pete

// Both 1.js and 2.js reference the same admin object
// Changes made in 1.js are visible in 2.js

// 📁 admin.js
export let config = {};

export function sayHi() {
    alert(`Ready to serve, ${config.user}!`);
}
import { config } from './admin.js';
config.user = "Pete";
// 📁 another.js
import {sayHi} from './admin.js';
sayHi(); // Ready to serve, Pete!

import {sayHi} from 'sayHi'; // Error, "bare" module
// the module must have a path, e.g. './sayHi.js' or wherever the module is
