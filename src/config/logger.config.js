const winston = require('winston');


const allowedTransports = [];

allowedTransports.push(new winston.transports.Console({
    format : winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log  
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    )
}));

const logger = winston.createLogger({
    format : winston.format.combine(
             // First argument to the combine method is defining how we want the timestamp to  come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log  
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),

    transports: allowedTransports
});

module.exports = logger;