"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterviewQuestionService = void 0;
const interviewQuestions_1 = require("../models/interviewQuestions");
class InterviewQuestionService {
    createInterviewQuestions(interviewQuestions) {
        var newInterviewQuestions = new interviewQuestions_1.InterviewQuestions(interviewQuestions);
        return newInterviewQuestions.save();
    }
    findQuestionsByInterviewId(interview_id) {
        return interviewQuestions_1.InterviewQuestions.findAll({
            where: {
                interview_id: interview_id
            }
        });
    }
}
exports.InterviewQuestionService = InterviewQuestionService;
