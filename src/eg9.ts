class Insan{
    constructor(){
        this.firstName="Shivam";
    }
    firstName:string;
    lastName:string;
    greet(){
        console.log("Hey,"+this.firstName);
    }
}
class Programmer extends Insan{
    constructor(){
         super();
        console.log("Constructor of Programmer");
    }
    greet(){
        console.log("Hello,World");
        super.greet();
    }
    greetLikeNormal(){
        console.log("Hi,there");
    }

}
var aProgrammer:Insan=new Programmer();
aProgrammer.greet();
// aProgrammer.greetLikeNormal();  wrong 