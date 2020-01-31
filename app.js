const server = require('./src/server').createServer();
const port = process.env.PORT || 3000;
const log = require('./src/logger')(__filename.slice(__dirname.length + 1));

server.listen(port, () => log.info(`Listening on port ${port}`));