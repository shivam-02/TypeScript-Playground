function add(x, y) {
    return x + y;
}
var sum = add(1, 2);
//add(1);     JS doesn't mind having less or more number of arguments but TS does.
// sum=add('foo',3); strict type checking.
console.log(sum);
function addFlexible(x, y, z, w) {
    if (y === void 0) { y = 0; }
    return x + y + z + w;
}
addFlexible(1, 2);
addFlexible(1, 2, 3);
//addFlexible(1,2,3,4);
