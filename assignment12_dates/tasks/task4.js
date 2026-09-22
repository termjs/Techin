/*
Write a JavaScript function to get the month name from a particular date. 

Test Data :
console.log(month_name(new Date("10/11/2009"))); 
console.log(month_name(new Date("11/13/2014")));
Output :
"October" 
"November"
*/

// https://momentjs.com/docs/#/displaying/format/

// moment().format();
// moment().format(String);

// This is the most robust display option. It takes a string of tokens and replaces them with their corresponding values.

// moment().format();                                // "2014-09-08T08:02:17-05:00" (ISO 8601, no fractional seconds)
// moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
// moment().format("ddd, hA");                       // "Sun, 3PM"
// moment().format("[Today is] dddd");               // "Today is Sunday"
// moment('gibberish').format('YYYY MM DD');         // "Invalid date"

import moment from "moment";

function month_name(date) {
  return moment(date).format("MMMM");
}

console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
