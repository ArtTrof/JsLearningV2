let promise = Promise.resolve();
promise.then(() => alert("promise done!"));
alert("code finished"); // this alert shows first

Promise.resolve()
    .then(() => alert("promise done!"))
    .then(() => alert("code finished"));

promise = Promise.reject(new Error("Promise Failed!"));
setTimeout(() => promise.catch(err => alert('caught')), 1000);
// Error: Promise Failed!
window.addEventListener('unhandledrejection', event => alert(event.reason));