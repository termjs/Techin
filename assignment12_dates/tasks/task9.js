/*
Write a JavaScript function to get the last day of a month. 

Test Data :
console.log(lastday(2014,0)); 
console.log(lastday(2014,1)); 
console.log(lastday(2014,11));
Output :
31 
28 
31
*/

// https://momentjs.com/docs/#/displaying/days-in-month/

// moment().daysInMonth();

// Get the number of days in the current month.

// moment("2012-02", "YYYY-MM").daysInMonth() // 29
// moment("2012-01", "YYYY-MM").daysInMonth() // 31

import moment from "moment";

// nurodom metus, menesi ir gauname dienas su .daysInMonth() metodu
console.log(".daysInMonth() metodas");

function lastday(year, mo) {
  return moment(year).month(mo).daysInMonth();
}

console.log(lastday(2014, 0));
console.log(lastday(2014, 1));
console.log(lastday(2014, 11));
