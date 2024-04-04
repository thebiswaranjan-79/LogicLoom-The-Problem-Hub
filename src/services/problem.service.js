const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData){
             // 1. Sanitize the markdown for description 
            problemData.description = sanitizeMarkdownContent(problemData.description);

            const problem = await this.problemRepository.createProblem(problemData);

            return problem;
    }

    async getAllProblems(){
            const problems = await this.problemRepository.getAllProblems();
            return problems;
    }
}

module.exports = ProblemService;