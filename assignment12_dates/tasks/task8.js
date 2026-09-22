/*
Write a JavaScript function to get difference between two dates in days. 

Test Data :
console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
Output :
216 
-28
*/

// https://momentjs.com/docs/#/displaying/difference/
// To get the difference in milliseconds, use moment#diff like you would use moment#from.

// var a = moment([2007, 0, 29]);
// var b = moment([2007, 0, 28]);
// a.diff(b) // 86400000

// An easy way to think of this is by replacing .diff( with a minus operator.

//           // a < b
// a.diff(b) // a - b < 0
// b.diff(a) // b - a > 0

import moment from "moment";

// date2 - date1
console.log("variantas minusuojant didesni is mazesnio");

const DATE_FORMAT = "MM/DD/YYYY";

function date_diff_indays1(date1, date2) {
  return (
    moment(date2, DATE_FORMAT).dayOfYear() -
    moment(date1, DATE_FORMAT).dayOfYear()
  );
}

console.log(date_diff_indays1("04/02/2014", "11/04/2014"));
console.log(date_diff_indays1("12/02/2014", "11/04/2014"));

// randam skirtuma naudojant .diff() nurodant objekta
console.log("\nvariantas su .diff() ir objektais");

function date_diff_indays2(date1, date2) {
  // lyginame du moment objektus tiesiogiai ir nurodome "days"
  return moment(date2, DATE_FORMAT).diff(moment(date1, DATE_FORMAT), "days");
}

console.log(date_diff_indays2("04/02/2014", "11/04/2014"));
console.log(date_diff_indays2("12/02/2014", "11/04/2014"));
