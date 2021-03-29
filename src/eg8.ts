class Person2{
    firstName:string;
    private lastName:string="Sugandhi";
    private age:number;

    constructor(firstName:string,lastName:string,age:number){
        this.firstName="Sam";
        this.lastName="John";
        this.age=28;
    }
    getFullName(){
        return this.firstName+","+this.lastName;
    }
}

var person2:Person2=new Person2("Shivam","Sugandhi",28);
console.log(person2);
console.log(person2.getFullName());