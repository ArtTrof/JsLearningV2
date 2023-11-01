let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
    setTimeout(() => reject(new Error("whoops")), 1000);
});

promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});
// resolve runs the first function in .then
promise.then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run
);

promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});
// reject runs the second function in .then
promise.then(
    result => console.log(result), // doesn't run
    error => console.log(error) // shows "Error: Whoops!" after 1 second
);

promise = new Promise(resolve => {
    setTimeout(() => resolve("done!"), 1000);
});
promise.then(console.log); // shows "done!" after 1 second

promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});
// .catch(f) is the same as promise.then(null, f)
promise.catch(console.log); // shows "Error: Whoops!" after 1 second

// new Promise((resolve, reject) => {
//     /* do something that takes time, and then call resolve or maybe reject */
// })
//     // runs when the promise is settled, doesn't matter successfully or not
//     .finally(() => stop loading indicator)
//     // so the loading indicator is always stopped before we go on
//     .then(result => show result, err => show error)

new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
})
    .finally(() => console.log("Promise ready")) // triggers first
    .then(result => console.log(result)); // <-- .then shows "value"

new Promise((resolve, reject) => {
    throw new Error("error");
})
    .finally(() => console.log("Promise ready")) // triggers first
    .catch(err => console.log(err));  // <-- .catch shows the error

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script won t load from ${src}`));

    document.head.append(script);
};
function loadScript(src, callback) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = resolve(script);
        script.onerror = reject(new Error('Error'));
        document.append.head(script);
    })
};
promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
promise.then(
    script => console.log(`${script.src} is loaded!`),
    error => console.log(`Error: ${error.message}`)
);
promise.then(script => console.log('Another handler...'));

//TASKS
function delay(ms) {
    return new Promise(function (resolve, reject) {
        let seconds = ms / 1000;
        setTimeout(() => resolve(`runs after ${seconds} seconds`))
    })
};
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => console.log('runs after 3 seconds'));