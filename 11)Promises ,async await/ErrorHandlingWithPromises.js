fetch('https://no-such-server.blabla')
    .then(response => response.json())
    .catch(err => console.log(err));

fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    }))
    .catch(error => alert(error.message));

new Promise((resolve, reject) => {
    throw new Error("Whoops!");
}).catch(alert); // Error: Whoops
new Promise((resolve, reject) => {
    reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!

new Promise((resolve, reject) => {
    resolve("ok");
}).then((result) => {
    blabla(); // no such function
}).catch(alert); // ReferenceError: blabla is not defined

// the execution: catch -> then
new Promise((resolve, reject) => {
    throw new Error("Whoops!");
}).catch(function (error) {
    alert("The error is handled, continue normally");
}).then(() => alert("Next successful handler runs"));

// the execution: catch -> catch
new Promise((resolve, reject) => {
    throw new Error("Whoops!");
}).catch(function (error) { // (*)
    if (error instanceof URIError) {
        // handle it
    } else {
        alert("Can't handle such error");
        throw error; // throwing this or another error jumps to the next catch
    }
}).then(function () {
    /* doesn't run here */
}).catch(error => { // (**)
    alert(`The unknown error has occurred: ${error}`);
    // don't return anything => execution goes the normal way
});

new Promise(function () {
    noSuchFunction(); // Error here (no such function)
})
    .then(() => {
        // successful promise handlers, one or more
    }); // without .catch at the end!

window.addEventListener('unhandledrejection', function (event) {
    // the event object has two special properties:
    alert(event.promise); // [object Promise] - the promise that generated the error
    alert(event.reason); // Error: Whoops! - the unhandled error object
});
new Promise(function () {
    throw new Error("Whoops!");
}); // no catch to handle the error