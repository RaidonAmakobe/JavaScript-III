/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding: When "this" refers to the global scope it's value is equal to the window object
* 2. Implicit Binding: When dot notation is used to invoke a function
* 3. New Binding: When we use a constructor function
* 4. Explicit Binding: When we use either the call or the apply method
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myAge(age) {
    console.log(this)
    return age;
}
myAge(19);
// Principle 2

// code example for Implicit Binding
const getAge = {
    name: "Raidon",
    gimmeAge: function(age) {
        console.log(`${this.name} is ${age} years old`);
        console.log(this);
    }
};
getAge.gimmeAge(19);
// Principle 3

// code example for New Binding

function dunkinSweets(donut) {
    this.price = '$3.99';
    this.donut = donut;
    this.register = function() {
        console.log(`${this.donut}: ${this.price}`);
        console.log(this);
    };
}

const strawberry = new dunkinSweets('Strawberry Donut');
const chocolate = new dunkinSweets('Chocolate Donut');

//Another one

function myCar(car) {
    this.year = '2019';
    this.car = car;
    this.sale = function() {
        console.log(`My ${this.car} was made in ${this.year}`);
    };
}

const lambo = new myCar("Lambo");
const rari = new myCar("Rari");
// Principle 4

// code example for Explicit Binding

const hobby = {
    "hobby": "Working Out"
};

function myHobbies(doingThis, andThat, andThis) {
    return `My hobbies: ${this.hobby}, ${doingThis}, ${andThat}, ${andThis}`;
};

const theseThings = ["Programming", "Music", "Video Games"];
console.log(myHobbies.apply(hobby, theseThings));