let now = new Date();

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);

let dateString = new Date("2017-01-26");
// The time is not set, so it's assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in
// So the result could be
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default

// current date
let date = new Date();
console.log(date.getHours());//the hour in your current timezone
console.log(date.getUTCHours());//the hour in UTC+0

let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ...is 1st Feb 2013!

let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

let start = new Date(); // start measuring time
// do the job
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}
let end = new Date(); // end measuring time
alert(`The loop took ${end - start} ms`);

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms); // 1327611110417  (timestamp)