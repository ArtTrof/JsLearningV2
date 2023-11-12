let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() { // called once, in the beginning of for..of
        return {
            current: this.from,
            last: this.to,
            next() { // called every iteration, to get the next value
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};
for (let value of range) {
    alert(value); // 1 then 2, then 3, then 4, then 5
};

range = {
    from: 1,
    to: 5,
    [Symbol.asyncIterator]() { // (1)
        return {
            current: this.from,
            last: this.to,
            async next() { // (2)
                // note: we can use "await" inside the async next:
                await new Promise(resolve => setTimeout(resolve, 1000)); // (3)

                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};
(async () => {
    for await (let value of range) { // (4)
        alert(value); // 1,2,3,4,5
    }
})()

range = {
    from: 1,
    to: 5,
    *[Symbol.iterator]() {
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};
for (let value of range) {
    alert(value);// 1, then 2, then 3, then 4, then 5
};

async function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        // Wow, can use await!
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}
(async () => {
    let generator = generateSequence(1, 5);
    for await (let value of generator) {
        alert(value); // 1, then 2, then 3, then 4, then 5 (with delay between)
    }
})();

range = {
    from: 1,
    to: 5,
    // this line is same as [Symbol.asyncIterator]: async function*() {
    async *[Symbol.asyncIterator]() {
        for (let value = this.from; value <= this.to; value++) {
            // make a pause between values, wait for something
            await new Promise(resolve => setTimeout(resolve, 1000));
            yield value;
        }
    }
};
(async () => {
    for await (let value of range) {
        alert(value); // 1, then 2, then 3, then 4, then 5
    }
})();

async function* fetchCommits(repo) {
    let url = `https://api.github.com/repos/${repo}/commits`;
    while (url) {
        const response = await fetch(url, { // (1)
            headers: { 'User-Agent': 'Our script' }, // github needs any user-agent header
        });

        const body = await response.json();

        let nextPage = response.headers.get('Link').match(/<(.?)>; rel="next"/);
        nextPage = nextPage?.[1];

        url = nextPage;

        for (let commit of body) {
            yield commit;
        }

    }
};
(async () => {
    let count = 0;

    for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {
        console.log(commit.author.login);

        if (++count == 100) {
            break;
        }
    }
})();