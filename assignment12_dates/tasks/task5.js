/*
Write a JavaScript function to compare dates (i.e. greater than, less than or equal to). 

Test Data :
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
Output :
"Date1 = Date2" 
"Date1 > Date2" 
"Date2 > Date1"
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

// naudojant " - " kaip .diff() alternatyva
console.log("minusas vietoj .diff()");

function compare_dates1(date1, date2) {
  let diff = moment(date1) - moment(date2);
  if (diff > 0) return "Date1 > Date2";
  if (diff < 0) return "Date2 > Date1";
  return "Date1 = Date2";
}

console.log(
  compare_dates1(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:00")),
);
console.log(
  compare_dates1(new Date("11/14/2013 00:01"), new Date("11/14/2013 00:00")),
);
console.log(
  compare_dates1(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:01")),
);

// naudojant .diff() metoda is moment.js lib
console.log("\n.diff() variantas");

function compare_dates2(date1, date2) {
  let diff = moment(date1).diff(date2);
  if (diff > 0) return "Date1 > Date2";
  if (diff < 0) return "Date2 > Date1";
  return "Date1 = Date2";
}

console.log(
  compare_dates2(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:00")),
);
console.log(
  compare_dates2(new Date("11/14/2013 00:01"), new Date("11/14/2013 00:00")),
);
console.log(
  compare_dates2(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:01")),
);

// .isBefore ir .isAfter()
console.log("\n.isBefore ir .isAfter() variantas");

function compare_dates3(date1, date2) {
  if (moment(date2).isBefore(date1)) return "Date1 > Date2";
  if (moment(date2).isAfter(date1)) return "Date2 > Date1";
  return "Date1 = Date2";
}

console.log(
  compare_dates3(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:00")),
);
console.log(
  compare_dates3(new Date("11/14/2013 00:01"), new Date("11/14/2013 00:00")),
);
console.log(
  compare_dates3(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:01")),
);
