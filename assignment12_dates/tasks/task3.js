/*
Write a JavaScript function to get the number of days in a month.

Test Data :
console.log(getDaysInMonth(1, 2012)); 
console.log(getDaysInMonth(2, 2012)); 
console.log(getDaysInMonth(9, 2012)); 
console.log(getDaysInMonth(12, 2012)); 
Output :
31 
29 
30 
31
*/

// https://momentjs.com/docs/#/displaying/days-in-month/

// moment().daysInMonth();

// Get the number of days in the current month.

import moment from "moment";

function getDaysInMonth(mo, year) {
  return moment(`${year}-${mo}`, "YYYY-MM").daysInMonth();
}

console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));
