// Here we will take a look at the other built-in node modules available for use.
// The first module we will look at is the Path module.

// This module is used with the require function that we introduced earlier in moduleLoad.js
// It is recommended we store the data from the require function in a const variable like so:

const path = require('path'); // By default Node assumes this is a built-in module.

// This module has a lot of useful methods one of which is the afore mentioned path.parse() method.
// Now I will demonstrate how it can be utilized:

const pathObj = path.parse(__filename); // Now we have given the method one of the arguments from the wrapper funciton.

// Again we store it into a const variable so we can't change it's value.
// Now if we:
console.log(pathObj); // If we run this console.log in the terminal we will see:

// The root, the dir(path to the folder containing the file), the base(name of the file), the extention(.js) and the name of the file (without the extention).

// Now we are going to have a look at another module known as the OS Module.
// This module gives us information on our current operating system using it's various methods.
// The way we load this module is the same as loading all the other modules, namely with:

const os = require('os');

// Once again we store the value of the require function in a const variable.
// Now we will cal two methods for demonstrative purposes.
// The methods will check the total memory and the free memory on the machine like so:

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

// We have now called the selected methods from our OS module.
// We can console.log them to show their values on the terminal like so:

console.log(totalMemory);
console.log(freeMemory);

// This will display both the respective values of the memories, but keep in mind, that it will display only numbers.

// The next module we'll have a look at is the file system module. 

const fs = require('fs');

// In this module we have a lot of methods that allow us to work with the file system.
// Almost all the operations are synchronous or asynchronous(asynchronous is always better in real world apps).
// We will be looking over a few of them, in particular:
 
const files = fs.readdirSync('./'); // This will return all the files and folders in the current folder as a string array.
//This method is synchronous as can be seen by the "Sync" appended at the end of "readdir".
// Now we can display it on the console like so:
console.log(files);

// Now we will have a look at the asynchronous form of this method:

fs.readdir('./', function(err, files){
    if(err) console.log(err); // keep in mind this is not how we handle errors in real apps, this is for demonstrative purposes.
    else console.log(files)
});
// Now we need to understand the differences between the synchronous and asynchronous methods.
// As we can see the synchronous method is pretty simple, but it's asynchronous counterpart isn't.
// That is due to the second argument given within the "readdir" method.
// That second argument is what is known as a callback function
// In this case only one of the arguments will have a value, namely the files argument


// Now we will look at one of the core concepts of node, which is the concept of events.
// This is achieved through the use of the Event module. 
// An event is in essence a signal that something has happened in our application.
// Now let's load our event module and see what it's all about:

const EventEmitter = require('events'); // when we load the event module we get the event emitter class(we named the const like that for convenience).
// We have capitalized every first letter of every word to indicate that "EventEmitter" is a class.
// The class is a container for properties and functions, also known as methods.

// To use this event emitter we want to create a new instance of this class like so:

const emitter = new EventEmitter(); // In this instance, this emitter is an object. 

// The difference between class and object is that a class defines the behaviour of a concept
// And an object is an actual instance of that class.

// The first event emitter is a blueprint for the capabilities of the emitter.
// The second emitter is the actual object that we will be using in our application.

// The emitter has a number of methods, some of which we will look over.

// We achieve this by using the following method:

emitter.addListener('messageLogged', function(){
    console.log('Listener called')
});
// The listener method has two arguments, which are the name of the event we are tracking, and a callback function.
// The callback function is what we use to execute code when the tracked event has been registered. 

// Now we will look over the "emit" method, which we use to raise an event:

emitter.emit('messageLogged'); // The argument for this method is the name of the event we are tracking.
// With this method, you signal that an event has happened.
// Now that we have raised an event, we need it to register to the app, by using the listener above.

// NOTE: It's very important to know that the order of the methods must be like pointed above or the code won't work.
// The emitter iterates through all the listeners synchronously, thus calling them one by one.

// Usually when we raise an event we want to send data related to said event.
// We can add different identifiers, that we can return to our clients like ID or URL like so:

emitter.emit('messageLogged', {id: 1, url: 'https://'}); // We always want to encapulate our values inside an object.
// This is considered the go-to method because it makes the code neat and clean.
// We will refer to this object as "event argument"

// The event listener can also take on this object as an argument like so:

emitter.addListener('messageLogged', function(e){
    console.log('Listener called', e)
});
// We can name the object in any way we want, although most often "e" is used as it is short, and refers to event.
// When we log this instance of the listener we can see that it logs the object as well.


// It is extremely important to note that in real world apps we will pretty much never use an instance of event emitter like we have here.
// Instead what we will do is use "EventEmitter" as a parent to define our classes.
// This is how we would go about doing that:

const EventEmitter = require('events'); // We call the parent class, but now we follow up with:

class Logger extends EventEmitter {
     log(message) {
        // here we will send the HTTP request
        console.log(message)
        this.emit('messageLogged', {id: 1, url: 'https://'}); // notice how we now use "this.emit" instead of "emitter.emit"
    }
}
// To demonstrate I will use the log function from module.js
// Notice that the function keyword is missing from the log funciton. That is because, when in a class like this the function becomes a method.
// As we can see the function has been modified to have an event emitter.
// Keep in mind that the event emitter and event listener are usually never in one module
// We want to use our emitter using the class system as shown above, so we can properly emit and liten to events between modules.
// If the emitter and listener are used in the way showed previously, that creates two instances of the emitter object.
// That in turn creates dissonance between the listener and the emitter and they will not connect.
// Subsequently when we want to export this class we will do it like this:

module.exports = Logger; 

// With this simple change, now this logger class has all the properties of the parent class "EventEmitter"

// Now similarly to the changes we made to the emitter method, we can change the listener like so:

const Logger = require('./module.js') // NOTE: I am making a call to the class that is in this file, but am simulating it being in module.js.
const logger = new Logger;
// And here we want to register our listener:
logger.addListener('messageLogged', function(e){
    console.log('Listener called', e) // notice how we replaced "emitter.addListener" with "logger.addListener"
});
// This is the proper way to signal and listen for events in a real-world app.
