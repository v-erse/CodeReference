"use strict";

/* FUNCTIONS */
let username; // global variable declaration

/* FUNCTION DECLARATION,
A function declaration creates a globally available function that 
is initialized on startup. The function can be used on line 1 of this
file, for example, even though its declared on line 10 */
function setUsername(name) {
    // The outer variable is edited within the function
    // If another variable called username was declared in
    // the function it would be limited to the functions use
    username = name;
}

setUsername("Abbey");

console.log(username);

// We can specify a default value for text, as below
// You can specify the default to another function, which only
// runs if the text is left empty
function sendMessage(from, text = handleEmptyMessage()) {
    // capitalise first letter
    text = text.charAt(0).toUpperCase() + text.slice(1);
    console.log(from + ": " + text);
}

function handleEmptyMessage() {
    let message = prompt("Please enter text for the message");
    return message || "Message not delivered.";
}

sendMessage(username, "Hey!");
sendMessage(username, "What's up?");
sendMessage("You");

/* FUNCTION EXPRESSIONS,
A function expression is when a function is declared as part of another
statement. For example on the right side of an = sign. This funciton is 
only available after this line has executed */
let greet = function() {
    console.log("Hey dude!");
};

let gender = "female";
// Function expressions allow us to declare a function conditionally.
// The body of the greet function now adapts to the gender of the user
greet =
    gender == "male"
        ? function() {
              console.log("Hey dude!");
          }
        : gender == "female"
        ? function() {
              console.log("Hey dudette!");
          }
        : function() {
              console.log("Hey..?");
          };

greet();

// Function expressions are also the basis of callback functions
// A callback function is like a function that's given to another function
// in a variable, so that it can be used if needed

let backup = function() {
    console.log("to the rescue");
};

// Any function could be placed in the callback parameter
function mainFunction(callback) {
    if ("we need backup") {
        callback();
    }
}

mainFunction(backup);

// There are also ANONYMOUS FUNCTIONS
// These are functions that don't have any name and are just declared
// on the spot in the block they're needed in the form of a function expression
// and then disposed of
mainFunction(function() {
    console.log(
        "I am an anonymous function, and I will be forgotten immediately"
    );
});

/* ARROW FUNCTIONS,
Arrow functions are a quick way of filling out the declaration in a function
expression */
let arrowFunc = text => console.log("Text from arrow function: '" + text + "'");

arrowFunc("-> -> ->");

// with multiple parameters
console.log("-");
arrowFunc = (txt1, txt2) => {
    console.log("txt1: " + txt1);
    console.log("txt2: " + txt2);
};
arrowFunc("hello", "world");

// with no parameters
console.log("-");
arrowFunc = () => console.log("Look Ma! No parameters!");
arrowFunc();

// arrow functions make function expressions way easier and cleaner
// here's the anonymous function we wrote earlier
// before it was 5 lines, now it's just 1!
console.log("-");
mainFunction(() => console.log("I am an anonymous arrow function"));
