class Person{
    firstName:string;
    private lastName:string="Sugandhi";
    private age:number;
    constructor(){
        this.age=28;
    }
    getFullName(){
        return this.firstName+","+this.lastName;
    }
}

var person:Person=new Person();
person.firstName="Shivam";
console.log(person);
console.log(person.getFullName());