var cluster = require('cluster');
const server = require('./src/server');
const port = process.env.PORT || 3000;
const log = require('./src/logger')(__filename.slice(__dirname.length + 1));

if (cluster.isMaster) {
    // Fork workers.
    const numCPUs = require('os').cpus().length;
    log.info(`Master cluster (pid:${process.pid}) is setting up ${numCPUs} workers...`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function (worker, code, signal) {
        log.warn('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        log.warn('Starting a new worker');
        cluster.fork();
    });
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    server
        .createInstance()
        .listen(port, () => log.info(`Worker [${cluster.worker.id}](pid:${process.pid}) listening on port ${port}`));
}