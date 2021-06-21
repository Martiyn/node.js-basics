// module system
/* The core node modules are the OS, FS, events and http, own modules can be created. */

// global objects
console.log(); // global object, part of the global scope, can be accesed from anywhere.

setTimeout(); // part of the standard js, is used to call a function after a set amount of time.
clearTimeout(); // used to stop the above timeout, part of standard js.

setInterval(); // used to repeatedly call a function after a given delay, part of standard js.
clearInterval(); // used to cease the calling of the function from setInterval, part of standard js.

window // this is an object used in the browser to define the global scope of objects and functions.
// in node.js the v8 engine prefixes this command so:
window.console.log() = console.log() // in node.js

// functions from line 5 to 11 belong to the window object, meaning they are global in nature.

// similarly, variables can inherit this trait, but only variables with the "var" keyword as it is used to declare global vars
// meaning that:

var message = "";
// can be seen as:
window.message

// in node.js we don't have a window object, instead we have global, meaning that:
global.console.log() = console.log()
// but ofcourse it is always better and more efficient to write your code without prefixing the global object

// The global scope runs into the issue that if you declare a function named sayHello, it is available in all files
// and if in any other file you declare a function with the same name it overrides the first function.
// That creates a confusion is the file system and ultimately throws errors in your code.
// The above issue can be circumvented using what is known as modularity:
// We create modules within which we declare our variables and functions, with the goal of not letting them override one another.
// Every file in a node.js app is considered to be a separate module.
// If you want to use a variable or function from a different module, then you have to explicitly export it and make it public.

// Now to move on to a practical application we will create a module to further elaborate:
// Go to module.js
