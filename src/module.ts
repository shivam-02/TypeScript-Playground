let trackingNumber:string="FC2084348";
let inventoryType:string="Furniture";
let displayName:string="Standing Desk";
let createdDate:Date=new Date();
let originalCost:number=425 ;

type Cost= number|string;

let myCost:Cost=455;

interface InventoryItem{
    readonly trackingNumber:string,
    inventoryType:string,
    displayName:string,
    createdDate:Date,
    originalCost?:Cost,
    addNote:(note:string)=>string
}

interface keyValuePair<Tkey,TString>{
    key:Tkey,
    value:TString,
}

var myKeyValuePair:keyValuePair<number,string>={key:1,value:"5"};



function getInventoryItem<T>(trackingNumber:T):T{
    return null;

}

function saveInventoryItem(item:InventoryItem):void{


}

let item=getInventoryItem(trackingNumber);

//item.createdDate=new Date();

