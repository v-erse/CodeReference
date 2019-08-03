"use strict";

/* DATA TYPES and OPERATORS */
// JS is dynamically typed
// NUMBERS
// The 'number' type represents both integer and floating point numbers
let n = 1;
n = 1.2;
// special numeric values include NaN and Infinity
n = Infinity;
n = -Infinity;

// STRINGS
// there's no difference between "this" and 'this'
let str = "Hello";
// strings between backticks are 'extended functionality',
// they allow us to embed variables like below
let phrase = `${str}, World!`;
// concatenate them
let concat = "con" + "cat";

// BOOLEANS, true or false
console.log(4 > 1);

// NULL and UNDEFINED
// null is the normal empty value, undefined is what
// JavaScript returns when a value hasn't been assigned to a variable

// typeof, used to check type
console.log(typeof n);

/* TYPE CONVERSIONS */
// ToString
let numToStr = String(30);
console.log(`numToStr is now a ${typeof str}`);

// ToNumber also exists
console.log("toNumber using Number: " + Number(true));
// You can also convert something to a number with a unary '+'
console.log("toNumber using unary +: " + +true);

// In addition, if one term is a string, they all become strings
console.log(1 + "1"); // this logs '11'

// ToBoolean
// Empty strings, 0, NaN, null, undefined will return false
console.log(Boolean(0), Boolean(""));
// Everything else will return true

// Note about the = operator
// It returns a value
let x = 1;
console.log((x = 2)); // this will return 2

// Note about increment and decrement operators
// ++variable will return new value of variable
// varible++ will return old value of variable
let oldVal = 1;
let newVal = oldVal++; // returns 1 (old value)
console.log(newVal);
newVal = ++oldVal; // returns 3 (new value)
console.log(newVal);
