export const DevHelper = {
    isDebugging: process.env.NODE_ENV === "development",
    log: (...message) => {
        DevHelper.isDebugging ? console.log(...message) : null
    },
    warn: (...message) => {
        DevHelper.isDebugging ? console.warn(...message) : null
    },
};