const BaseError = require("../errors/base.error")
const { StatusCodes } = require('http-status-codes');


function errorHandler(err, req, res , next){
    if(err instanceof BaseError){
        return res.status(err.statusCode).json({
            success : false,
            message:err.message,
            error : err.details,
            data : {} // bcoz this is an exception , so no data s going to Provided
        });
    }

    return res.status(err.statusCode).json({
        success : false,
        message:'Something Went Wrong',
        error : err.details,
        data : {} // bcoz this is an exception , so no data s going to Provided
    });
}

module.exports = errorHandler;