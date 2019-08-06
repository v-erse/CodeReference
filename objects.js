"use strict";

/* OBJECTS */
// Object literals are the most common way to initialize an
// object. Objects hold 'key: value' properties
let user = {
    name: "Abbey",
    age: 21
};

// Property values are accessible using dot notation
console.log(user.name);

// And can also be added or modified with dot notation
user.isAdmin = true;

// We can delete a property with the delete operator
delete user.age;

// You can also have multiword property names but this makes them
// hard to use with dot notation
user = {
    name: "Abbey",
    age: 21,
    "is a nerd": true
};

// We can access user square brackets to access the property instead
console.log(user["is a nerd"]);

// Square brackets are more powerful because we can put a variable that
// holds the key name in there as well
let propertyName = "is a nerd";
console.log(propertyName + ": " + user["is a nerd"]);

// Square brackets allow for computed properties
let fruit = prompt("Which fruit?", "apple");
let numFruit = +prompt("How many?", 5);
let bag = {
    [fruit + "Computers"]: numFruit
};

console.log(bag);

// Property value shorthand
// Below, instead of writing "name: name, age: age, gender: gender"
// we can just write "name, age gender"
function makeUser(name, age, gender, job) {
    return {
        name,
        age,
        gender,
        job: job || "unemployed"
    };
}

user = makeUser("Abbey", 21, "male");
console.log(user);

// Existence checks
// The in operator allows us to check to see if a property exists
// in an object
console.log("job" in user);

/* For...in loops */
// a special kind of for loop that loops over object properties
console.log("for...in loops");
for (let prop in user) {
    console.log(prop + " holds " + user[prop]);
}

// Variables hold a reference to an object, not the object itself
let obj = {
    thing1: 1,
    thing2: 2
};

// both obj and objcopy hold references to the same one object
let objCopy = obj;

objCopy.thing1 = 3;

console.log(obj.thing1); // will be 3

// To clone an object, we need to use object.assign
let objClone = {};
Object.assign(objClone, obj);
console.log(objClone);
objClone.thing2 = 4;
console.log(obj);

// Comparison: two objects are only equal if they are the same object
// Two separate objects cannot be equal even if they hold the same data
let a = {};
let b = {};
console.log(a == b); //false

/* OBJECT FUNCTIONS */
user = {
    name: "John",
    age: 30,
    // Objects can have their own functions like this
    // 'this' refers to this object, of course
    sayHi() {
        console.log(this.name + ": " + "Hi!");
    }
};

// In JavaScript 'this' is not bound
let abbey = { name: "Abbey" };
let admin = { name: "Admin" };

function sayName() {
    // this 'this' is not bound, it will adapt to
    // whatever object it finds itself in
    console.log(this.name);
}

abbey.sayName = sayName;
admin.sayName = sayName;

abbey.sayName(); // this == abbey, so will return 'Abbey'
admin.sayName(); // this == admin, so will return 'Admin'

/* REFERENCE TYPES */
let hi = user.sayHi;
// hi(); this won't work, because there is no 'this'

/* The reason for this is that when you call an object function, it
doesn't just get called. 

In a function call like:
user.sayHi()

once JS reads user.sayHi, it returns a REFERENCE TYPE, not a function,
but a reference to it. 

The reference type looks like this: (base, name, strict)
 - base: the object 
 - name: the property name
 - strict: if use strict is active

JS needs the reference type to handle the 'this'. 
Then it adds the (), to run the function.

When you do:
let hi = user.sayHi;

You're just grabbing the content of the function, and putting it in
the variable 'hi'. Now, there is no object, so no reference type, so 
nowhere for 'this' to look.
*/
