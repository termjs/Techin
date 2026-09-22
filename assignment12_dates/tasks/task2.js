/*
Write a JavaScript function to get the current date. 

Note : Pass a separator as an argument.
Test Data :
console.log(curday('/')); 
console.log(curday('-'));
Output :
"11/13/2014" 
"11-13-2014"
*/

// Parsing glued hour and minutes

// From version 2.11.0 parsing hmm, Hmm, hmmss and Hmmss is supported:
// moment("123", "hmm").format("HH:mm") === "01:23"
// moment("1234", "hmm").format("HH:mm") === "12:34"

import moment from "moment";

function curday(arg) {
  return moment().format(`YYYY${arg}MM${arg}DD`);
}

console.log(curday("/"));
console.log(curday("-"));
