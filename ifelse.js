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
// the only ternary operator in JS.
// Non-expressions can't be used as operands for this, so no break/continue
let age = 18;
console.log(
    age >= 21
        ? "old enough to drink and to drive (separately!)"
        : age >= 16
        ? "old enough to drive, not old enough to drink"
        : "not old enough to drink or drive"
);
