interface People{
    firstName:string,
    lastName:string,
    age:number,
    isMarried:boolean
    getFullName(a,b):string;
}

class Foo implements People{
    firstName:string;
    lastName:string;
    age:number;
    isMarried:boolean;
    getFullName(a,b):string{
        return a+","+b;
    }
}

let aPeople:People=new Foo();

let obj={
    firstName:"shivam",
    lastName:"sugandhi",
    age:28,
    isMarried:false,
    salary:15,
    getFullName:(a,b)=>{
        return a+","+b;
    }
    };

 aPeople=obj; // No error, follows duck typing.   
 //aPeople.salary; extra property salary is not a part of Person interface so cannot access
 