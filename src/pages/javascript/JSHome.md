# JavaScript

## What and why?

---

JavaScript is the Web's own programming language.

It was created by Brendan Eich in 1995, at the time working at Netscape Communications. Netscape worked with Sun Microsystems to include their language, _Java_ in Netscape Navigator, a web browser built to compete with Internet Explorer.

Marc Andreessen (Netscape founder) thought HTML needed a "glue language" that made web pages more interactive and dynamic. Brendan Eich was hired to create it. Because it was working alongside Java in Netscape Navigator, they decided to call it JavaScript.

To prevent other languages from taking the spot before it could, Brendan wrote the first prototype of JavaScript in 10 days.

Since then, JavaScript has become more than a tool for interaction. It is now used in both the [front](/front-end) and [back ends](/back-end) of web apps, and even in non-web programs (see: [React Native](https://facebook.github.io/react-native/) and [Electron](https://electronjs.org/)).

## What is ECMAScript?

---

After Brendan Eich created JavaScript, it was presented by Netscape to Ecma International, who standardized it and made a specification called ECMA-262, a.k.a. ECMAScript.

It was made into a standard scripting language so that new languages could be built on top of it. The JavaScript we know today is one of those languages, a dialect of ECMAScript.

ECMAScript has other dialects too, like ActionScript and JScript.

## Play with JavaScript in your browser

---

These are some quick ways to play around with the basic concepts of JavaScript without having to take out your IDE.

You can usually use `ctrl + shift + i` to bring out your browser's developer tools. From there, use the console to try out simple JavaScript commands.

If you want something a little more powerful, a lot of modern browsers have little editors that will run snippets for you.

-   For Firefox, you can use [Scratchpad.](https://developer.mozilla.org/en-US/docs/Tools/Scratchpad)
-   For Chrome, you can use [Snippets.](https://developers.google.com/web/tools/chrome-devtools/javascript/snippets)

## A simple Hello, world!

---

```js
function sayHello(name) {
    console.log("Hello, " + name + "!");
}

sayHello("Abbey");
```

```
>> "Hello, Abbey!"
```
