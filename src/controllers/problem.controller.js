const {StatusCodes} = require('http-status-codes'); 

function pingProblemController(req,res){
    return res.json({message : 'Problemm Controller is Up and Error is Solved'});
}


function addProlem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : ' Nnot Implemented'
    });
}

function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : ' Nnot Implemented'
    });
}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : ' Nnot Implemented'
    });
}

function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : ' Nnot Implemented'
    });
}

function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : ' Nnot Implemented'
    });
}


module.exports = {
    addProlem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController,
};


/**
 * 
 * res 
 * 
 * res.status => returns the same  response object with status property set 
 * .json => return the same response object which hass status set but this json to be returned is also set 
 */