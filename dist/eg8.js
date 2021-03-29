"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person2 = void 0;
var Person2 = /** @class */ (function () {
    function Person2(firstName, lastName, age) {
        this.lastName = "Sugandhi";
        this.firstName = "Sam";
        this.lastName = "John";
        this.age = 28;
        this.name = "abc";
    }
    Person2.prototype.getFullName = function () {
        return this.firstName + "," + this.lastName;
    };
    return Person2;
}());
exports.Person2 = Person2;
var person2 = new Person2("Shivam", "Sugandhi", 28);
//person2.name="Shivam Sugandhi"; cannot write to a readonly property.
console.log(person2);
console.log(person2.getFullName());
