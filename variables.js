/* USE STRICT, to use the modern JavaScript engine */
"use strict";

/* VARIABLES */
// use 'let' to declare a variable
// in non-strict mode, you don't need to declare variables
// e.g. user = "john" would work without 'let'
// 'var' isn't used much at all anymore
let user = "John",
  age = 25,
  message = "Hello";

alert(message);

// variables can be edited (to any other data type)
message = "World!";

alert(message);

/* CONSTANTS */
// use 'const' to declare a constant
const MY_BIRTHDAY = "11.09.1997";
// you can't edit this
// MY_BIRTHDAY = "01.01.2001" would cause an error
