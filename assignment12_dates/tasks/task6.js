/*
Write a JavaScript function to add specified minutes to a Date object.

Test Data :
console.log(add_minutes(new Date(2014,10,2), 30).toString());
Output :
"Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"
*/

// https://momentjs.com/docs/#/durations/add/

// moment.duration().add(Number, String);
// moment.duration().add(Number);
// moment.duration().add(Duration);
// moment.duration().add(Object);

// Mutates the original duration by adding time.

// The same keys and shorthands used to create durations can be used here as the second argument.

// var a = moment.duration(1, 'd');
// var b = moment.duration(2, 'd');
// a.add(b).days(); // 3

// Note that adding an invalid duration to any other duration results in an invalid duration.

import moment from "moment";

function add_minutes(date, min) {
  return moment(date).add(min, "minutes"); // isveda laika pagal kompiuterio time zone
}

console.log(add_minutes(new Date(2014, 10, 2), 30).toString());
