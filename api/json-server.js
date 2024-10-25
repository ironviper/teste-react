const jsonServer = require('json-server');
const path = require('path');

// Create the server instance
const server = jsonServer.create();

// Use the local jobs.json file inside the api directory
const router = jsonServer.router(path.join(__dirname, 'jobs.json'));  // Now pointing to jobs.json inside 'api'

// Default middlewares
const middlewares = jsonServer.defaults();

// Use the middlewares and router
server.use(middlewares);
server.use(router);

// Export the server to be used as a Vercel serverless function
module.exports = server;