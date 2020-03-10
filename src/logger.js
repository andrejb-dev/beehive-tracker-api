const levels = ['DEBUG', 'INFO', 'WARN', 'ERROR'];

class logger{

    constructor(name){
        this.name = name;
    }
    log(message, level, ...params) {
        if (levels.indexOf(level) >= levels.indexOf(logger.level)) {
            if (typeof message !== 'string') {
                message = JSON.stringify(message);
            };
            
            console.log(new Date() + ` [${level.padStart(5)}]:${process.pid} ${this.name} ${message}`, ...params);
        }
    }
    debug(message, ...params) {
        this.log(message, 'DEBUG', ...params);
    }
    info(message, ...params) {
        this.log(message, 'INFO', ...params);
    }
    warn(message, ...params) {
        this.log(message, 'WARN', ...params);
    }
    error(message, ...params) {
        this.log(message, 'ERROR', ...params);
    }
}

if (process.env.NODE_ENV == "development") {
    logger.level = 'DEBUG';    
} else {
    logger.level = 'INFO';
}

module.exports = (loggerName) => {
    return new logger(loggerName);
}

