# JavaScript

## What and why?

---

JavaScript is the Web's own programming language.

It was created by Brendan Eich in 1995, at the time working at Netscape Communications. Netscape worked with Sun Microsystems to integrate their language, _Java_, into Netscape Navigator, a web browser built to compete with Internet Explorer.

Marc Andreessen (Netscape founder) thought HTML needed a "glue language" that made web pages more interactive and dynamic. Brendan Eich was hired to create it. Because it was working alongside Java in Netscape Navigator, they decided to call it JavaScript.

But besides a few similarities in syntax, JavaScript doesn't have much to do with Java.

“Java is to JavaScript what Car is to Carpet.” - Christian Heilmann

To prevent other languages from taking the spot before JavaScript could, Brendan wrote the first prototype in 10 days.

Since then, JavaScript has become more than a tool for interaction. It is now used in both the [front](/front-end) and [back ends](/back-end) of web apps, and even in non-web programs (see: [React Native](https://facebook.github.io/react-native/) and [Electron](https://electronjs.org/)).

## What is ECMAScript?

---

After Brendan Eich created JavaScript, it was presented by Netscape to ECMA International, who standardized it and made a specification called ECMA-262, a.k.a. ECMAScript.

It was made into a standard scripting language so that new languages could be built on top of it. The JavaScript we know today is one of those languages, a dialect of ECMAScript.

ECMAScript has other dialects too, like ActionScript and JScript.

## Play with JavaScript in your browser

---

These are some quick ways to play around with the basic concepts of JavaScript in your browser if you don't want to have to take out your IDE.

You can usually use `ctrl+shift+i` to bring out your browser's developer tools. From there, use the console to try out simple JavaScript commands.

If you want something a bit more flexible, a lot of modern browsers have little editors that will run snippets for you.

-   For Firefox, you can use [Scratchpad.](https://developer.mozilla.org/en-US/docs/Tools/Scratchpad)
-   For Chrome, you can use [Snippets.](https://developers.google.com/web/tools/chrome-devtools/javascript/snippets)

## Hello World

---

First, we must honour the [ancient traditions of our people](https://facebook.github.io/react-native/docs/tutorial#hello-world).

```js
function sayHello() {
    console.log("Hello, world!");
}

sayHello();
```

```
>> "Hello, world!"
```

# Variables

---

There are three ways we can declare variables.

-   **`var` declares a mutable variable.**
-   **`let` declares a mutable, block-scoped variable.**
-   **`const` declares an immutable, block-scoped variable.**

The convention for naming JavaScript variables is of course camel casing.

```js
let myVariable = "my value";
```

With `let` and `var` we can also declare variables without initializing them. These variables will be assigned the value `undefined` in the meantime.

```js
let myVariable;

console.log(myVariable);
```

```
>> undefined
```

`const` variables are constants, so they can't be edited later on in the code. However, if a `const` is holding an object or array, the object or array _can_ be edited.

```js
const MY_CONSTANT = "my constant value";

MY_CONSTANT = "another value";
```

```
>> TypeError
```

The code above gives an error, but the code below will not.

```js
const MY_OBJECT = { key: "value" };

MY_OBJECT.key = "otherValue";
```

# Data Types

---

-   There are seven primitive data types
    -   Boolean: `true` or `false`
    -   null: the `null` value
    -   undefined: a property can have an `undefined` value
    -   Number: any number, integer or floating point like `115` or `1.61803398875`
    -   BigInt: [arbitrary precision](https://stackoverflow.com/questions/1218149/arbitrary-precision-arithmetic-explanation) ints `999999n`
    -   String: `"A tempest must be true to it's nature"`
    -   Symbol: A type whose instances are unique and immutable.
-   and Object

While it's useful to know about these types, you won't usually be worrying about them because JavaScript is **dynamically-typed**. You can declare and initialize a variable without having to specify type. Types will automatically be converted as needed during execution.

Use the `typeof` operator to get the type of value:

```js
typeof true;
```

```
>> "boolean"
```

## Truthy and Falsy?

---

All values in JavaScript will evaluate to `true` or `false` in a Boolean context. The ones that evaluate to `true` are called _truthy_ values, and the ones that evaluate to `false` are _falsy_.

All values are truthy unless defined as falsy. The values explicitly defined to be falsy are:

-   `false`
-   `undefined`
-   `null`
-   `0`
-   `NaN`
-   `""` (an empty string)

All of these values seem to have a _feeling_ of emptiness in common, but note that the empty array, `[]` or object, `{}` aren't in this list.

## Type Conversion

---

There are a few different ways to convert between types in JavaScript. Types can be _converted_ which is the word used to describe explicit or implicit conversion, or _coerced_ which is the word used to describe only implicit conversion. _Coercion_ is when a value automatically converts type because of the context of the code.

### To String

Explicit conversion to String type can be achieved with the `String()` function, implicit coercion can be triggered by the binary `+` operator:

```js
String(115); // >> "115"
115 + ""; // >> "115"
```

### To Number

Explicit conversion to Number type can be achieved with the `Number()` function, implicit coercion can be triggered by using the _unary_ `+` operator:

```js
Number("115"); // >> 115
+"115"; // >> 115
```

### To Boolean

Explicit conversion to Boolean type can be achieved with the `Boolean()` function, implicit coercion can be triggered by using the logical `!` operator twice (this works because one `!` will turn a truthy value to `false` or a falsy value to `true`):

```js
Boolean("non-empty string"); // >> true
!!"non-empty string"; // >> true
```

# Loops

---

[DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

## `for` loops

---

JavaScript `for` loops are similar to those in Java and C.

```js
for (startHere; checkThis; updateLikeThis) {
    doThis;
}
```

-   `startHere` initializes the loop. Usually, you put a counter here and set it to a start value
-   `checkThis` is the condition that the loop checks against on every iteration. If it evaluates to `true`, continue, if it evaluates to `false`, stop.
-   Then `doThis` is carried out.
-   `updateLikeThis` describes how to update. Here is where you would iterate on a counter you initialized in `startHere`.

Here is an example:

```js
let numArr = [];

for (let i = 0; i < 10; i++) {
    numArr.push(i);
}

console.log(numArr);
```

```
>> Array(10) [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

### `for/in`

The `for/in` statement is specifically for when you want to loop over the items in an object or collection. It save you from having to write an initial counter or having to update one.

```js
let numArr = [1, 2, 3, 4, 5];
let sqrdArr = [];

for (i in numArr) {
    num = numArr[i];
    sqrdNum = num ** 2;
    sqrdArr.push(sqrdNum);
}

console.log(sqrdArr);
```

```
>> Array(5) [ 1, 4, 9, 16, 25 ]
```

The `for/in` statement is actually iterating over the objects property names, so for each `i in numArr` above, you're getting the index of the element `i`. To get to the number we want, we have to access it with `numArr[i]`.

The code below highlights this in a more clear way.

```js
let myObj = { a: 1, b: 2, c: 3 };

for (i in myObj) {
    console.log(i);
}
```

```
>> a
>> b
>> c
```

### `for/of`

The `for/of` statement does the opposite to what the `for/in` statement does. Instead of iterating over the property names, it iterates over their values:

```js
let positions = ["first", "second", "third"];

for (i of positions) {
    console.log(i);
}
```

```
>> 1
>> 2
>> 3
```

## `while` loops

---

A `while` loop will continue to execute for as long as it's condition is `true`. Once the condition becomes `false` it will stop. Here is what they look like:

```js
while (thisIsTrue) {
    doThis;
}
```

In every iteration, the condition will be checked first, before the program goes on to execute the `doThis` section.

```js
let i = 0;
let indexArr = [];

while (i < 5) {
    indexArr.push(i);
    i++;
}

console.log(indexArr);
```

```
>> Array(5) [ 0, 1, 2, 3, 4 ]
```

### `do/while`

A `do/while` loop is like a `while` loop, except the condition is checked _after_ the execution. This means that when you run a `do/while` loop, it will always execute at least once.

```js
do {
    doThis;
} while (thisIsTrue);
```

Here's an example:

```js
let i = 0;
let indexArr = [];

do {
    indexArr.push(i);
    i++;
} while (i < 5);

console.log(indexArr);
```

```
>> Array(5) [ 0, 1, 2, 3, 4 ]
```

![](https://i.imgur.com/XTsoTca.jpg)
_This picture of Roadrunner and Wile E. Coyote illustrates the dangers of a `do/while` loop used in the wrong context._

## Fine-tuning Loops

---

### `break`

You can `break` a loop in the middle of it's execution if some condition is satisfied and you don't need or want the loop to keep going. After the `break`, control is transferred to the next statement.

```js
let i = 0;

while (true) {
    i++;
    console.log(i);
    if (i == 3) {
        break;
    }
}
```

```
>> 1
>> 2
>> 3
```

### `continue`

`continue` is a way to handle how complete each iteration of a loop will be.

The `continue` statement sort of acts as a gatekeeper for the rest of the code. If `continue` is executed, the code is stopped early, and another iteration started. If you can get past `continue`, though, you can reach the rest of the code.

Below: if the condition `i % 4 != 0` is `true`, the code inside the `if` statement will run. Since that code is just a `continue` statement, the loop will just restart. To get passed the `continue` statement and reach `console.log(i)`, the `if` condition must evaluate to `false`.

```js
let i = 0;

while (i < 12) {
    i++;
    if (i % 4 != 0) {
        continue;
    }
    console.log(i);
}
```

```
>> 4
>> 8
>> 12
```

### `label`

You can use `label`s to refer to your loops (or any other statement) elsewhere in your program.

```js
myLoop: while (myCondition) {
    doThis;
}
```

Using `label`s we can `break` or `continue` a specific loops' execution, which is useful when handling nested loops.

The code below includes a loop for one array, and another loop for another array inside it. It checks to see if the index for `xArr` has exceeded the length of `yArr`, and if so, breaks the outer loop. As a result, we get a nice square matrix of coordinates printed to the console. _(However, we do have an extra 4th array at the end of the matrix held in `matrix` after the loop breaks, because it still gets a chance to initialise one during the line `matrix[ix] = []`)._

```js
let xArr = [0, 1, 2, 3, 4];
let yArr = [0, 1, 2];

let matrix = [];

outerLoop: for (ix in xArr) {
    matrix[ix] = [];
    for (iy in yArr) {
        if (ix >= yArr.length) break outerLoop;
        matrix[ix][iy] = "(" + xArr[ix] + ", " + yArr[iy] + ")";
    }
    console.log(matrix[ix]);
}
```

```
Array(3) [ "(0, 0)", "(0, 1)", "(0, 2)" ]
Array(3) [ "(1, 0)", "(1, 1)", "(1, 2)" ]
Array(3) [ "(2, 0)", "(2, 1)", "(2, 2)" ]
```

# Functions

---

We can use functions to break down our code into chunks that perform a task that we know we will need to perform more than once, perhaps with different data or in different contexts.

## Defining Functions

---

### Declarations

A declaration is the simplest way to write a function in JavaScript. This is what a simple function declaration looks like:

```js
function timesTwo(input) {
    let output = input * 2;
    return output;
}
```

First we use the `function` keyword to declare a function and give it a name: `timesTwo`. Then we name the _parameter_ it will receive, here we named it `input`. Within the function's curly brackets, we define a new variable `output` that multiplies `input` by 2. We then `return output`.

When we call the function, it will run the statements inside it, and return us it's output, which looks like this:

```js
timesTwo(3);
```

```
>> 6
```

Below, we call the function within the declaration of a variable we'll call `result`. The function's output becomes the value of our variable.

```js
let result = timesTwo(5);

console.log(result);
```

```
>> 10
```

We can simplify our function by putting the calculation expression in our return statement, performing both tasks in one line:

```js
function timesTwo(input) {
    return input * 2;
}
```

### Expressions

Function declarations are statements, but functions can be defined with expressions too. This kind of function can be _anonymous_, meaning it doesn't need to have a name in it's declaration after the `function` keyword. We can store them in variables, like below.

```js
const timesTwo = function(input) {
    return input * 2;
};
```

Functions defined using expressions and stored in variables can be called from the variables that hold them:

```js
timesTwo(4);
```

```
>> 8
```

### Hoisting

A significant sidenote about declaring functions: function declarations get hoisted to the top of a script, but function expressions don't.

This means that writing a function in this manner will allow you to call it above where you wrote it.

```js
myFunction(1); // This is fine

function myFunction(myArg) {
    console.log(myArg + 1);
}
```

```
>> 2
```

But if you use a function expression, it won't work.

```js
myFunction(1); // This will not work

const myFunction = (myArg) => {
    console.log(myArg + 1);
};
```

```
>> ReferenceError
```

### Arguments

## Calling Functions

---

## Closures

---

## Recursion

---

## Arrow Functions

---

## Generators

---

# Collections

---

# Objects

---
