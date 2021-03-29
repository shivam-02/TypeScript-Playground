"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
        this.lastName = "Sugandhi";
        this.age = 28;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + "," + this.lastName;
    };
    return Person;
}());
var person = new Person();
person.firstName = "Shivam";
console.log(person);
console.log(person.getFullName());
exports.default = Person;
