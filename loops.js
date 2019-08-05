"use strict";
/* WHILE LOOPS, 
While the condition is truthy, repeat code block */
console.log("first while");
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

// since i becomes falsy when it equals 0, and stays truthy
// otherwise:
console.log("second while");
i = 3;
while (i) {
    console.log(i);
    i--;
}

/* DO WHILE LOOPS,
The same as the while loop, but it checks the condition after the
iteration. This type of loop is mainly only used when you want 
the body to execute at least once regardless of the condition
being truthy */
console.log("do while");
i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);

/* FOR LOOPS,
the for loop is more complex, but it's also the most commonly used 
loop */
console.log("for");
// Initialised a new variable here for demonstration purposes
/* In the for statement, you have three parts: 
- begin (let b = 0), runs once on entry
- condition (b < 3), checked before every iteration, if falsy, stop the loop
- step, (b++), execute after the body, before the next iteration
- body, (console.log("for: " + b)), the actual code that runs in an iteration */
for (let b = 0; b < 3; b++) {
    console.log("for:" + b);
}
// The variable b is only visible inside the loop.
// You can also omit parts of the statement, for example if you already
// have the variable declared and assigned, and the step is in the body:
console.log("omitting parts of for");
let b = 0;
for (; b < 5; ) {
    console.log(b++);
}

/* THE BREAK DIRECTIVE,
This is just a way to stop a loop in the middle of execution */
console.log("sum loop");
// This will ask the user to continue inputting numbers,
// and will continue summing them, until they stop inputting values
let sum = 0;
while (true) {
    let value = +prompt("Enter a number", "");
    if (!value) break;
    sum += value;
}
console.log(sum);

/* THE CONTINUE DIRECTIVE,
This is sort of like break. The loop will only continue the iteration 
execution if we want it to */
// This will only print if the value of odd is odd. If the condition
// evaluates to false, it will skip the whole body
// It's easier to read than a nested if function
console.log("odds only");
for (let odd = 0; odd < 10; odd++) {
    if (odd % 2 == 0) continue;
    console.log(odd);
}

/* LABELS, 
When you break, you only break out of the current loop. 
Labels allow us to break out of a specific loop. */
console.log("labels");
outer: for (
    i = 0;
    i < 3;
    i++ // outermost loop labeled outer
) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
        if (i == 1 && j == 2) break outer; // break the outer loop
    }
}
console.log("end labels");

/* Getting loopy */
console.log("getting loopy");
let o = 0;

while (o < 6) {
    let os = "oo";
    for (let x = 0; x < o; x++) {
        os += "o";
    }
    console.log("l" + os + "p");
    o++;
}
