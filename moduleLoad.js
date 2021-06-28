// Now we want to load our exported function from module.js
// To achieve this we would do the following:

require('./module'); // this is the require function, it can be used only in node.js. It takes one argument, the name of the module we want to load.
// We have imported the module aptly named module.js, node.js automaticly adds the .js extention which is why we haven't added it in the require funciton.
// The require function returns the exported object/s from the module.
// This connects to what I mentioned in module.js about exporting only the most important objects in order to maintain a clean code.

// Keep in mind that the require function is best utilized by storing it's value in a variable.
// We want the variable to be immune to overriding which is why we will use the "const" declaration like so:

const messenger = require('./module'); // now the value of "messenger" equals that of the imported module.
// If we try to override "messenger" with another value like let's say "1", then we would get an error in compile time due to the const declaration.

// Let's say we want to load our exported function.
// If we have declared a method like we saw in module.js then it would look like this:
messenger.log('message'); // this is an exported object
// Notice the .log method is present here because it has been declared in the exports.

// And if we want to load our exported function where the method was not declared it would look like this:
messenger('message'); // this is an exported function
// Notice how the .log method is missing because we didn't declare it. 
