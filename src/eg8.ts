export class Person2{
    firstName:string;
    private lastName:string="Sugandhi";
    private age:number;
    readonly name;

    constructor(firstName:string,lastName:string,age:number){
        this.firstName="Sam";
        this.lastName="John";
        this.age=28;
        this.name="abc";
    }
    getFullName(){
        return this.firstName+","+this.lastName;
    }
}

var person2:Person2=new Person2("Shivam","Sugandhi",28);
//person2.name="Shivam Sugandhi"; cannot write to a readonly property.
console.log(person2);
console.log(person2.getFullName());

