var Person2 = /** @class */ (function () {
    function Person2(firstName, lastName, age) {
        this.lastName = "Sugandhi";
        this.firstName = "Sam";
        this.lastName = "John";
        this.age = 28;
    }
    Person2.prototype.getFullName = function () {
        return this.firstName + "," + this.lastName;
    };
    return Person2;
}());
var person2 = new Person2("Shivam", "Sugandhi", 28);
console.log(person2);
console.log(person2.getFullName());
