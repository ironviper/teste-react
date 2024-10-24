const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('jobs.json'); // Path to your JSON file
const middlewares = jsonServer.defaults();

// Vercel exposes the API at /api/json-server
server.use(middlewares);
server.use(router);

module.exports = server;