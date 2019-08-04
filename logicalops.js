"use strict";

/* Logical Operators,
The way JavaScript treats the logical operators gives them 
some special use cases */

/* || OR,
If any of its arguments is truthy, the OR operator returns true
*/
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    console.log("The office is closed"); // it's the weekend
}

/* But OR has some extra features. It actually does this:
 -  Evaluates operands from left to right
 -  For each operand, converts it to boolean. If the result 
    is true, it stops and returns the original value of that operand
 -  If all operands have been evaluated (they were all false), it
    returns the last operand

So it returns the first truthy value, or the last one if none 
are found */

// Getting the first truthy value from a list
let currentUser = null;
let defaultUser = "john";

let name = currentUser || defaultUser || "unnamed";
console.log(name);

// Short-circuit evaluation
/* The operands can be expressions that actually do things, like in 
case, assign a variable. This is sort of like doing an if
If the first operand is true, then the second one will be ignored,
if the first operand is false, then the second one evaluates, 
and x will be assigned */

let dontAssign = true;

let x;

dontAssign || (x = 1);

/* && AND,
AND returns true if both operands are truthy, and false otherwise */
hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
    console.log("The time is 12:30");
}

/* AND does the opposite of what OR does in it's evaluation process

It returns the first falsy value, or the last one if none 
are found */
console.log("player1" && "player2" && "player3");

// Here's a weird way to do an if
let player1 = true;
player1 && console.log("player 1 is in the lobby");

/* ! NOT, 
You know what this one does. It inverts the value of a boolean.
In JavaScript, if the value is not already boolean, it will be 
converted, then inverted */
console.log(!""); // this will return true, an empty string is falsy
console.log(!"a non-empty string is truthy"); // this will return false

// It also provides a quick way to convert a value to pure boolean
// by doing a double invert
console.log(!!"a truthy string"); // this will return true
