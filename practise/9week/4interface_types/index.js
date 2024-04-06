"use strict";
//implementing interface
class Intern {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const x = new Intern("Fayaz", 56);
console.log(x);
function printId(id) {
    console.log(`Your ID is: ${id}`);
}
printId("TYPESCRIPT");
printId(67452);
function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([3, 5, 8, 9]));
function filteredUsers(users) {
    return users.filter(x => x.age >= 18);
}
let data = filteredUsers([{
        firstName: "fayaz",
        lastName: "shaik",
        age: 24
    }, {
        firstName: "Harry",
        lastName: "Potter",
        age: 30
    }]);
