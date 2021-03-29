var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function (a, b) {
        return a + "," + b;
    };
    return Foo;
}());
var aPeople = new Foo();
var obj = {
    firstName: "shivam",
    lastName: "sugandhi",
    age: 28,
    isMarried: false,
    salary: 15,
    getFullName: function (a, b) {
        return a + "," + b;
    }
};
aPeople = obj; // No error, follows duck typing.   
//aPeople.salary; extra property salary is not a part of Person interface so cannot access
