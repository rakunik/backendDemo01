import color from 'colors';
var colors = require('colors');

const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.info(`[${getTimeStamp()}]`, '[' + 'INFO'.green + ']', `[` + `${namespace}`.cyan + `] ${message}`, object);
    } else {
        console.info(`[${getTimeStamp()}]`, '[' + 'INFO'.green + ']', `[` + `${namespace}`.cyan + `] ${message}`);
    }
};

const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.warn(`[${getTimeStamp()}]`, '[' + 'WARN'.yellow + ']', `[` + `${namespace}`.cyan + `] ${message}`, object);
    } else {
        console.warn(`[${getTimeStamp()}]`, '[' + 'WARN'.yellow + ']', `[` + `${namespace}`.cyan + `] ${message}`);
    }
};

const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.error(`[${getTimeStamp()}]`, '[' + 'ERROR'.red + ']', `[` + `${namespace}`.cyan + `] ${message}`, object);
    } else {
        console.error(`[${getTimeStamp()}]`, '[' + 'ERROR'.red + ']', `[` + `${namespace}`.cyan + `] ${message}`);
    }
};

const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.debug(`[${getTimeStamp()}]`, '[' + 'DEBUG'.blue + ']', `[` + `${namespace}`.cyan + `] ${message}`, object);
    } else {
        console.debug(`[${getTimeStamp()}]`, '[' + 'DEBUG'.blue + ']', `[` + `${namespace}`.cyan + `] ${message}`);
    }
};

const getTimeStamp = (): string => {
    return new Date().toISOString();
};

export default {
    info,
    warn,
    error,
    debug
};
