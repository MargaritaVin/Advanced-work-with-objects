"use strict";

function isWeekend(date) {
    const weekDay = new Date(date);
    if (weekDay.getDay() === 6 || weekDay.getDay() === 0) {
        return true ;
    } else {
        return false;
    }
};
console.log(isWeekend('2022-02-12')); 
console.log(isWeekend('2022-02-13')); 
console.log(isWeekend('2022-02-09')); 