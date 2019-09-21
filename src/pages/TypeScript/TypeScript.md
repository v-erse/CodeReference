# TypeScript

## What is it?

---

A quick google search will tell you that TypeScript is a typed superset of JavaScript. What does this mean? TypeScript is a language that basically wants to be an _extended_ version of JavaScript. Essentially, _**it's JavaScript, and then some**_.

All the JavaScript you've written is valid TypeScript, and after compilation, TypeScript just looks like normal JavaScript. This means it supports all the concepts and features of the latest version of JavaScript.

What TypeScript adds is **types**. TypeScript has (optional) static typing, as opposed to dynamic typing like normal JavaScript. If you define your code to have types, TypeScript will throw errors when the code doesn't follow those rules.

## Why do we want types?

---

I think a lot of people that are used to dynamic languages will come to this kind of environment and think they have lost some freedom. But having started my programming career by learning a typed language (Java), I think there are only good things that come with static type checking.

Here are some reasons to like static typing in TypeScript:

-   It's optional
-   It makes code easier to read and understand
-   It makes it easier to implement
-   It makes it easier to refactor
-   It reduces the chances of bugs, and makes it a lot harder to make silly little mistakes.
-   And all of this pretty much guarantees a more robust codebase, that will be much harder to break and much easier to maintain

Types will improve workflow and make the development process smoother and stronger, which is why TypeScript is made for the construction of large apps.

# Getting Started

## Installation

---

You will need to have [Node.js](https://nodejs.org/en/) installed.

```console
> npm install -g typescript
```

Before you start, you should run `tsc --init` to get the compiler to set up a `tsconfig.json` file:

```console
> tsc --init
```

## Compiling

---

When you install TypeScript you also get the compiler, `tsc`. Running `tsc myTypeScript.ts` will compiler it into `myTypeScript.js` which will contain the equivalent JavaScript.

This compiler will catch errors and inconsistencies in your code. For example, if you first declare a variable of type string:

```ts
let myStr: string;
```

And then try to assign it a value of a different type:

```ts
myStr = 1;
```

The compiler will not be happy:

```console
error TS2322: Type '1' is not assignable to type 'string'.
```

If you are going to keep making changes to one file, you can get the compiler to watch for changes and run every time there is a change in that file using `tsc myTypeScript.ts -w`.

## Defining Types

---

### Basic Types

So, as we've mentioned above, we can declare variables of certain types. If you declare a variable of a certain type, and the value it is assigned is not of that type, the TypeScript compiler will throw an error.

```ts
let myStr: string = "string";
let myNum: number = 10;
let myBool: boolean = true;
let myVar: any = "any type"; // assign this variable any type of value
```

Why would we have an `any` type if we could just declare a variable without specifying a type and achieve the same thing? Because it is way more readable. If you can see it has been assigned the `any` type, you can be sure of exactly what is going on.

### Arrays

Here is an example of a variable that is typed as an array of strings:

```ts
let stringArray: string[] = ["just", "like", "java"];
```

You can achieve the same result by writing:

```ts
let stringArray: Array<string> = ["just", "like", "java"];
```

### Tuples

Specify tuple types:

```ts
let myTuple: [string, string, number] = ["that's", "the", 1];
```
