# Front end component of my full stack app

## Summary

// This app renders input fields for login and signup to a page with instagram like functionality.
// If someone signs up, they have an entry added to a MongoDB database, with their password stored hashed by bcrypt, with the intensity of salting being 8.
// Signing up requires both a unique username and email.
// Once signed up the user gains access to 
// The login function checks their username against the hashed password in the database. If the login is successful, they're given a page dynamically unique to their username and given access to the images and their authors. 

## Design and testing
//
// This page was designed in React and has been tested succesfully against localhost routes, with a server built in express.js. 

## Deployment
//
// https://nimble-eclair-93babf.netlify.app/ for deployment of the site, although functionality fluctuates.
