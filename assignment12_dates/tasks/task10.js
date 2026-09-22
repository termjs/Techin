/*
Write a JavaScript function to calculate 'yesterday day'.

Test Data :
console.log(yesterday('Nov 15, 2014')); 
console.log(yesterday('Nov 16, 2015')); 
console.log(yesterday('Nov 17, 2016'));
Output :
"Fri Nov 14 2014 00:00:00 GMT+0530 (India Standard Time)"
"Sun Nov 15 2015 00:00:00 GMT+0530 (India Standard Time)" 
"Wed Nov 16 2016 00:00:00 GMT+0530 (India Standard Time)"
*/

// https://momentjs.com/docs/#/durations/subtract/

// moment.duration().subtract(Number, String);
// moment.duration().subtract(Number);
// moment.duration().subtract(Duration);
// moment.duration().subtract(Object);

// Mutates the original duration by subtracting time.

//momentjs.com/docs/#/displaying/as-javascript-date/

// moment().toDate();

// To get a copy of the native Date object that Moment.js wraps, use moment#toDate.
// This will return a copy of the Date that the moment uses, so any changes to that Date will not cause moment to change. If you want to change the moment Date, see moment#manipulate or moment#set.

// https://momentjs.com/docs/#/displaying/as-string/

// moment().toString();

// Returns an english string in a similar format to JS Date's .toString().
// moment().toString() // "Sat Apr 30 2016 16:59:46 GMT-0500"

import moment from "moment";

function yesterday(dateString) {
  return moment(dateString, "MMM DD, YYYY")
    .subtract(1, "d") // atima tiksliai 1 diena is nurodytos datos
    .toDate() // pavercia moment objekta i standartini js Date objekta
    .toString(); // pavercia i teksta, kuris automatiskai prideda laiko juosta
}

console.log(yesterday("Nov 15, 2014"));
console.log(yesterday("Nov 16, 2015"));
console.log(yesterday("Nov 17, 2016"));
