let group = {
    title: "SomeTitle",
    students: ["1st", "2nd"],

    showList() {
        this.students.forEach(
            student => console.log(this.title + ":" + student)
        )
    }
    /*     showList() {
            this.students.forEach(function (student) {
                // Error: Cannot read property 'title' of undefined
                alert(this.title + ': ' + student);
            });
        } */
};
group.showList();

function defer(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}
/* function defer(f, ms) {
    return function(...args) {
      let ctx = this;
      setTimeout(function() {
        return f.apply(ctx, args);
      }, ms);
    };
  } */
function sayHi(who) {
    console.log('Hello, ' + who);
}
let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds