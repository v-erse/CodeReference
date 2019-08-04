"use strict";

/* The SWITCH block,
Basically the same as multiple ifs
A built-in way to compare variants */

// + converts to an actual number so we can compare
let age = +prompt("how old are you?");
switch (age) {
    case 16:
        console.log("old enough to drive but still too young");
        break;
    case 18:
        console.log("old enough to give consent");
        break;
    case 21:
        console.log("old enough to drink");
        break;
    default:
        console.log(
            age < 18 ? "not an adult" : "you're an adult, start acting like it!"
        );
        break;
}
