# JavaScript

## What and why?

---

JavaScript is the Web's own programming language.

It was created by Brendan Eich in 1995, at the time working at Netscape Communications. Netscape worked with Sun Microsystems to integrate their language, _Java_, into Netscape Navigator, a web browser built to compete with Internet Explorer.

Marc Andreessen (Netscape founder) thought HTML needed a "glue language" that made web pages more interactive and dynamic. Brendan Eich was hired to create it. Because it was working alongside Java in Netscape Navigator, they decided to call it JavaScript.

To prevent other languages from taking the spot before it could, Brendan wrote the first prototype of JavaScript in 10 days.

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

# The Basics

<!--
## Syntax details

---

Before we start, we should look at some of the basic details of JavaScript syntax. -->

## Variables

---

There are three ways we can declare variables.

-   **`var` declares a mutable variable.**
-   **`let` declares a mutable, block-scoped variable.**
-   **`const` declares an immutable, block-scoped variable.**

The convention for naming JavaScript variables is of course camel casing.

```js
let myVariable = "my value";
```

With `let` and `var` we can also declare variables without initialising them. These variables will be assigned the value `undefined` in the meantime.

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

## Types

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

While it's useful to know about these types, you won't usually be worrying about them because JavaScript is **dynamically-typed**. You can declare and initialize a variable without having to specifying type. Types will automatically be converted as needed during execution.

Use the `typeof` operator to get the type of value:

```js
typeof true;
```

```
>> "boolean"
```

### Truthy and Falsy?

All values in JavaScript will evaluate to `true` or `false` in a boolean context. The ones that evaluate to `true` are called _truthy_ values, and the ones that evaluate to `false` are _falsy_.

All values are truthy unless defined as falsy. The values explicitly defined to be falsy are mostly those that _feel_ empty:

-   `false`
-   `undefined`
-   `null`
-   `0`
-   `NaN`
-   `""` (an empty string)

Note that the empty array, `[]` or object, `{}` aren't in this list.

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

Explicit conversion to Boolean type can be achieved with the `Boolean()` function, implicit coercion can be triggered by using the logical operator `!` twice (this works because one `!` will turn a truthy value to `false` or a falsy value to `true`):

```js
Boolean("non-empty string"); // >> true
!!"non-empty string"; // >> true
```

## Operators

## Data Structures

## Functions
