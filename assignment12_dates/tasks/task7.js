/*
Write a JavaScript function to test whether a date is a weekend. 

Note : Use standard Saturday/Sunday definition of a weekend.
Test Data :
console.log(is_weekend('Nov 15, 2014')); 
console.log(is_weekend('Nov 16, 2014')); 
console.log(is_weekend('Nov 17, 2014'));
Output :
"weekend" 
"weekend" 
undefined
*/

// https://momentjs.com/docs/#/get-set/day/

// moment().day(Number|String);
// moment().day(); // Number
// moment().days(Number|String);
// moment().days(); // Number

// Gets or sets the day of the week.
// This method can be used to set the day of the week, with Sunday as 0 and Saturday as 6.
// If the value given is from 0 to 6, the resulting date will be within the current (Sunday-to-Saturday) week.

import moment from "moment";

function is_weekend(date) {
  return moment(date, "MMM DD, YYYY").day() === 0 ||
    moment(date, "MMM DD, YYYY").day() === 6
    ? "weekend"
    : undefined;
}

console.log(is_weekend("Nov 15, 2014")); // 6
console.log(is_weekend("Nov 16, 2014")); // 0
console.log(is_weekend("Nov 17, 2014")); // 1
