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