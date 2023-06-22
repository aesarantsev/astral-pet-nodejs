const winston = require('winston');


export const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.File({filename: process.env.ERROR_LOGS_FILE_PATH, level: 'error'}),
        new winston.transports.File({filename: process.env.INFO_LOGS_FILE_PATH, level: 'info'}),
    ],
});

