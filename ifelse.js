"use strict";

// IF STATEMENTS
if ("is this true?") {
    console.log("yup");
}

// 0, null, undefined, NaN are all 'falsy'
if (0) {
    console.log("that was falsy");
}

// other values are 'truthy'
if (1) {
    console.log("that's truthy");
}
if ("anything") {
    console.log("that's also truthy");
} else if (null) {
    console.log("not truthy");
    // but even if it was truthy it wouldn't show up, because the
    // first part of the if was already true, this is just the else part
}

// THE CONDITIONAL (QUESTION MARK) OPERATOR
// the only ternary operator in JS
let age = 16;
let oldEnough =
    age > 18 ? console.log("old enough") : console.log("not old enough");
