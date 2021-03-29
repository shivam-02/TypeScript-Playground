var a = 10;
var b = true;
var c = "string";
// Implicit typing 
/*
a=false;  Error boolean is not assingable to number
b="abac";
*/
function greet() {
    return "Good Morning";
}
var greeting = greet();
// greeting=5;  Implcit typing only when assigned while declaring.
var greeting2;
greeting2 = greet();
greeting2 = 4;
