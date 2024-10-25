const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('jobs.json'); // replace with your JSON file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`JSON-Server is running on port ${PORT}`));
