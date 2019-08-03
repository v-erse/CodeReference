"use strict";

// Alerts show a message on the screen
// Execution is paused until the user clicks ok
alert("Welcome!");

// Prompts are like alerts but they have an input field
// The second argument is a placeholder
let name = prompt("What's your name?", "name");

// Confirm alerts are will return true if ok is pressed and false otherwise
let confirmed = confirm(`Are you sure you want to set your name to ${name}?`);

if (confirmed) {
    console.log(`The users name has been set to ${name}`);
    alert(`Great, your name has been set to ${name}`);
} else {
    console.log("The users name has not been set");
    alert("Okay, your name has not been set");
}
