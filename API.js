// In this section we will learn how to create API's using node
// Unlike in otherModules.js here we will look at the API's from the scope of building real-world apps
// That being said these API's will be much more complicated
// In this section we will be using a framework called "Express"
// This framework is made for building web applications 
// We can install it using NPM as shown in the "npm.js" file

// There are four key HTTP methods, them being:
// GET: for getting data
// POST: for posting data
// PUT: for putting data
// DELETE: for deleting data

// Examples for each of these methods can be with a HTTP request for them

// For GET /api/customers: in this way we get the full list of customers in the form of an array of customer objects
// If we want to get a certain customer then we just need to indicate said customer with a number like 1 or 2

// If we want to update the customer we want to do it with the PUT method
// PUT /api/customers/1: we want to specify the customer we have in mind so we can change only his data
// The customer object needs to be added to the request to further specify what we want to change
// With this request the server will update the customer with the corresponding ID with the new values

// To delete a customer we want to send a request with the DELETE method
// DELETE /api/customers/1: here we don't need to include the customer object because we can delete him with only the ID

// Now to create a customer we want to use the POST method
// POST /api/customers: since we are posting a new customer to customers we don't need to specify an ID
// The customer object needs to be included in the body of the request

// These four methods are what is known as the RESTful convention, which is most widely used

// Express will give us a proper code structure to maintain our reusability
// Here we will create our first web server using Express

const express = require('express')//: here we call the express module that we have installed

const app = express()//This is an object of type express which is a function. We will store it in a const "app"
// This app object has some very useful methods which we will look over Below
// Starting with:

app.get()
app.post()
app.put()
app.delete()
// These correspond with the four HTTP methods that were listed above which allow us to freely manipulate data

// Now for simplicity we want to work with the get method
// We want to implement some endpoints that respond to a http get request
// The method takes two arguments, them being, the target URL and a callback function
// Let's have a look:

app.get('/', (req, res) => {
    res.send("Hello There");
})// I will use ES6 arrow function for the callback
// This is how we define a route, we have defined a URL, and a callback function which serves as a route handler
// We can define a second route pretty much the same way:

app.get('/api/customers', (req, res) => {
    res.send([1, 2, 3])
})

// We also need to listen on a given port like so:

app.listen(3000, () => console.log("I'm listening"))// Here we have defined a listener
// The listener is set to listen on port 3000 and has an added optional callback function
// VERY IMPORTANT to note that if we listen on just port 3000 we will display the first get request
// But if we listen on port 3000/api/customers then we will display the second get request
// Notice how here we don't use any if statements, thus making our code clean and maintainable
// With this structure, the bigger our app gets we won't have problems shifting the code even to other files
// Express gives our application a structure that we can work around

// Now we will have a look at a node package known as nodemon
// The purpose of this package is to simplify a process that I will now explain 
// To load up your app you need to do so using the terminal by targeting the file you wish to start
// It is essentially done like so:

// IN TERMINAL: node (target file, for example index.js)
// It is important to keep in mind that this command runs the code
// But if any changes are made to the code then the process must be stopped using ^C
// That creates the need to restart the app with the node command
// As you can guess, that isn't very convenient, and is what nodemon essentially changes
