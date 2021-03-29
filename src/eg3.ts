function add(x:number,y:number):number{
    return x+y;
}

var sum:number=add(1,2);
//add(1);     JS doesn't mind having less or more number of arguments but TS does.
// sum=add('foo',3); strict type checking.
console.log(sum);


function addFlexible(x:number,y:number=0,z?:number,w?:number):number{  // optional arguments.(Can only be at end)
    return x+y+z+w;
}

addFlexible(1,2);
addFlexible(1,2,3);
//addFlexible(1,2,3,4);