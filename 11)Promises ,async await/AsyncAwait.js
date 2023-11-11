async function f() {
    return 1;
}
f().then(alert); // 1

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise; // wait until the promise resolves (*)
    alert(result); // "done!"
};

async function showAvatar() {
    // read our JSON
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    img.remove();
    return githubUser;
}

// we assume this code runs at top level, inside a module
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();
console.log(user);
(async () => {
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
})();

class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        alert(resolve);
        // resolve with this.num*2 after 1000ms
        setTimeout(() => resolve(this.num * 2), 1000); // (*)
    }
}
async function f() {
    // waits for 1 second, then result becomes 2
    let result = await new Thenable(1);
    alert(result);
}
f();

class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}
new Waiter()
    .wait()
    .then(alert); // 1 (this is the same as (result => alert(result)))

async function f() {
    await Promise.reject(new Error("Whoops!"));
}
// …is the same as this:
async function f() {
    throw new Error("Whoops!");
}

async function f() {
    try {
        let response = await fetch('http://no-such-url');
    } catch (err) {
        alert(err); // TypeError: failed to fetch
    }
}

async function f() {
    let response = await fetch('http://no-such-url');
}
// f() becomes a rejected promise
f().catch(alert); // TypeError: failed to fetch // (*)

// wait for the array of results
let results = await Promise.all([
    fetch(url1),
    fetch(url2),
]);