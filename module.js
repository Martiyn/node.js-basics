// In this module we will create a remote logging service which serves to log messages.
// We will emulate a website that logs messages. The site sends a URL that we use to send a HTTP request to log our message to the server.
// WARNING! this is a fictitious enactment only for demonstrative purposes.

var url = 'http://loggedmessage.io/log'; // so this is our endpoint for the http request.

function log(message) {
    // here we will send the HTTP request
    console.log(message)
}

// So now want to export this function to another module. To achieve this we want to do the following:

module.exports.log = log; // we add the log method to the exports object and we set it to the function named log.

// Similarly if we want to export the url we would do the following:

module.exports.url = url; // here like before we add a method called url to the exports object and we set it to the variable url.

// We can decide how the exported variable or function will be named by naming the method itself.
// So if we want our url export to have a different name then we just do the following:

module.exports.newName = url; // now the exported url will be visible as newName in the other modules.

// Keep in mind that the url portion is better off under the hood in real life apps.
// This means that we only want to export the function for better maintainability of the code between modules.
// We can also export only a function or variable without the method.
// That means that we can perform the following export which will export only the pure function:
module.exports = log;

// So now that we have created the module it's time to learn how to load it
// Go to moduleLoad.js: