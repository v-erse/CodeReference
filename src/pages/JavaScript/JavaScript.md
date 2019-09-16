# JavaScript

## What and why?

---

JavaScript is the Web's own programming language.

It was created by Brendan Eich in 1995, at the time working at Netscape Communications. Netscape worked with Sun Microsystems to integrate their language, _Java_, into Netscape Navigator, a web browser built to compete with Internet Explorer.

Marc Andreessen (Netscape founder) thought HTML needed a "glue language" that made web pages more interactive and dynamic. Brendan Eich was hired to create it. Because it was working alongside Java in Netscape Navigator, they decided to call it JavaScript.

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

![](https://i.imgur.com/6hghCJB.jpg)
_This picture of Roadrunner and Wile E. Coyote illustrates the dangers of a `do/while` loop used in the wrong context._

# Functions

---

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

# Collections

---

# Objects

---
