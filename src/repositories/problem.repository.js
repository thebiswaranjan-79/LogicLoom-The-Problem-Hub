const logger = require('../config/logger.config');
const {Problem} = require('../models')

class  ProblemRepository{

    async createProblem(problemData){
        try {
            const problem = await Problem.create({
                title : problemData.title,
                description : problemData.description,
                testCases : (problemData.testCases) ? problemData.testCases : []
            });

            return problem;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id){
        try {
            const problem  = await Problem.findById(id);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id) {
        try {
            const deletedProblem = await Problem.findByIdAndDelete(id);
            if(!deletedProblem) {
                logger.error(`Problem with id : ${id} Not Found ID`);
                throw new NotFound("problem", id);
            }
            return deletedProblem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = ProblemRepository;