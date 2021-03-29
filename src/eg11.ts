enum DAYS{
    MONDAY=100,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
};

var day:DAYS=DAYS.MONDAY;
if(day==DAYS.MONDAY){
    console.log("Today is holiday");
}else{
    console.log("Today is working day");
}