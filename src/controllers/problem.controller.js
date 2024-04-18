const NotImplemented = require('../errors/notImplemented.error');
const {ProblemService} = require('../services');
const {ProblemRepository}  = require('../repositories');
const { StatusCodes } = require('http-status-codes');


const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req,res){
    return res.json({message : 'Problemm Controller is Up and Error is Solved'});
}


async function addProblem(req, res, next) {
    try {
       const newProblem = await problemService.createProblem(req.body);
       return res.status(StatusCodes.CREATED).json({
        success : true,
        message : 'Successfully Created a New Problem', 
        error : {},
        data : newProblem
       })
    } catch (error) {
        next(error);
    }
}

async function getProblem(req, res, next) {
    try {
       const problem = await problemService.getProblem(req.params.id);
       return res.status(StatusCodes.OK).json({
        success : true,
        error : {},
        message : "Successfuly Fetched a Problem",
        data : problem
       })
    } catch (error) {
        next(error);
    }
}

async function getProblems(req, res, next) {
    try {
        const response = await problemService.getAllProblems();

        res.status(StatusCodes.OK).json({
            success : true,
            message : "Successfuly Fetched all the Problems",
            error : [],
            data : response
        });

    } catch (error) {
        next(error);
    }
}


async function deleteProblem(req, res, next) {
    try {
        const deletedProblem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully deleted the problem',
            error: {},
            data: deletedProblem
        });
    } catch(error) {
        next(error);
    }
}

function updateProblem(req, res,next) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : ' Nnot Implemented'
    });
}


module.exports = {
    addProblem,
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