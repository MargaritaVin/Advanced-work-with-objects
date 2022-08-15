"use strict";

function isWeekend(date) {
    const weekDay = new Date(date);
    const callResult = weekDay.getDay();
    const dayOff = callResult === 6 || callResult === 0;
    return dayOff;
};
console.log(isWeekend('2022-02-12')); 
console.log(isWeekend('2022-02-13')); 
console.log(isWeekend('2022-02-09')); 


const person = {
    fullName: 'Sherlock Holmes',
    address: {
        street: "Baker Street",
        city: "London",
        house: "221b"
    }
};

let clonePerson = JSON.parse(JSON.stringify(person));

const { fullName, address: {street, city, house} } = person;

const dateBirthday = new Date(1994, 4, 28);
let day = dateBirthday.getDate();
let month = `0` + (dateBirthday.getMonth() + 1);
let year = dateBirthday.getFullYear();
let strDateBirthday = `${day}.${month}.${year}`;
console.log("My birthday: " + strDateBirthday);

function getDiffDays (start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const DAY_IN_MILLISECONDS = 86400;
    if (startDate.toString() === "Invalid Date" || endDate.toString() === "Invalid Date") {
        return console.error("Error: invalid date");
    } if (startDate > endDate) {
        return console.error("Error: your start date is later than end");
    } else {
        let daysBetweenStartAndEnd = (endDate - startDate) / DAY_IN_MILLISECONDS / 1000;
        return daysBetweenStartAndEnd;
    }; 
};

console.log(getDiffDays('2020-01-01', '2020-01-17')); 
console.log(getDiffDays('2020-01-01', '2020-03-15')); 
console.log(getDiffDays('2222222222', '2020-01-17')); 
console.log(getDiffDays('2021-01-02', '2020-03-15')); 