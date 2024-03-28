class BaseError extends Error {
    constructor(name, statusCode, description, details){
        super(description);
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;

    }
}
module.exports = BaseError;

//Creates a .stack property on targetObject, which when accessed returns a string representing the location in the code at which Error.captureStackTrace() was called.