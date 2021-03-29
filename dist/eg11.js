var DAYS;
(function (DAYS) {
    DAYS[DAYS["MONDAY"] = 100] = "MONDAY";
    DAYS[DAYS["TUESDAY"] = 101] = "TUESDAY";
    DAYS[DAYS["WEDNESDAY"] = 102] = "WEDNESDAY";
    DAYS[DAYS["THURSDAY"] = 103] = "THURSDAY";
    DAYS[DAYS["FRIDAY"] = 104] = "FRIDAY";
    DAYS[DAYS["SATURDAY"] = 105] = "SATURDAY";
    DAYS[DAYS["SUNDAY"] = 106] = "SUNDAY";
})(DAYS || (DAYS = {}));
;
var day = DAYS.MONDAY;
if (day == DAYS.MONDAY) {
    console.log("Today is holiday");
}
else {
    console.log("Today is working day");
}
