/*
Write a JavaScript function to check whether an `input` is a date object or not. 

Test Data :
console.log(is_date("October 13, 2014 11:13:00")); 
console.log(is_date(new Date(86400000))); 
console.log(is_date(new Date(99,5,24,11,33,30,0))); 
console.log(is_date([1, 2, 4, 0]));
Output :
false 
true 
true 
false
*/

// https://momentjs.com/docs/#/query/is-a-date/

// moment.isDate(obj);

// To check if a variable is a native js Date object, use moment.isDate().

import moment from "moment";

function is_date(arg) {
  return moment.isDate(arg);
}

console.log(is_date("October 13, 2014 11:13:00")); // false
console.log(is_date(new Date(86400000))); // true
console.log(is_date(new Date(99, 5, 24, 11, 33, 30, 0))); // true
console.log(is_date([1, 2, 4, 0])); // false
