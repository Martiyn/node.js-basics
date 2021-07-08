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

