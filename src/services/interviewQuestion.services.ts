import { InterviewQuestions } from "../models/interviewQuestions";
import { Question } from "../models/questions";


export class InterviewQuestionService{

    createInterviewQuestions(interviewQuestions:any){
        var newInterviewQuestions = new InterviewQuestions(interviewQuestions);
        return newInterviewQuestions.save();
    }

    findQuestionsByInterviewId(interview_id:any){
        return InterviewQuestions.findAll({
            where:{
                interview_id:interview_id
            }
        })
    }

}