/*
import {sayHi, sayBye} from "./ExportImport";

sayHi('John');
sayBye('John');
*/

import * as say from './ExportImport'

say.sayHi('John');
say.sayBye('John');

import {sayHi as hi, sayBye as bye} from './ExportImport';

hi('John'); // Hello, John!
bye('John'); // Bye, John!

import * as say from './ExportImport';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!

import User from './ExportImport'; // not {User}, just User

new User('John');

import {default as User, sayHi} from './ExportImport';

new User('John');

import * as user from './ExportImport';

let User = user.default; // the default export
new User('John');

import {User} from './ExportImport';
// import {MyUser} won't work, the name must be {User}

import User from './ExportImport'; // works
import MyUser from './ExportImport'; // works too
// could be import Anything... and it'll still work

import User from './user.js';
import LoginForm from './loginForm.js';
import func from '/path/to/func.js';

// 📁 auth/index.js

// import login/logout and immediately export them
import {login, logout} from './helpers.js';
export {login, logout};
// import default as User and export it
import User from './user.js';
export {User};

// 📁 auth/index.js
// re-export login/logout
export {login, logout} from './helpers.js';
// re-export the default export as User
export {default as User} from './user.js';