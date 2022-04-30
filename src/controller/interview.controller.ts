import { Interview } from "../models/interviews";
import { Question } from "../models/questions";
import { InterviewService } from "../services/interview.services";
import { InterviewQuestionService } from "../services/interviewQuestion.services";
import { QuestionService } from "../services/questions.service";
const interviewServices = new InterviewService();
const interviewQuestionService = new InterviewQuestionService();
const questionService = new QuestionService();

export class InterviewController{
    async addInterview(req:any, res:any){
        var interview=req.body;
        var questions=interview.question_id;
        interviewServices.createInterview(interview)
        .then((data:any)=>{
            var interview_id = data.id;
            for(var i =0;i<questions.length;i++){
                var question_id:any = interview.question_id[i];
                let interviewQuestions = {
                    interviewId:interview_id,
                    questionId:question_id
                }
                interviewQuestionService.createInterviewQuestions(interviewQuestions)
            }
            res.send(data)
            
        })
        .catch((error:any)=>{
            res.send(error);
        })

            // .then((question_id:any)=>{
            //     console.log(interview.question_id)
            //     try{
            //         interview.setinterview_questions(question_id)
            //         res.send("success")
            //     }
            //     catch(error:any){
            //         console.log("error occured")
            //         res.send(error);
                    
            //     }

                
            // })
    }

    async getQuestionsByInterviewId(req:any,res:any){
        let interviewTitle:string = req.params.interviewtitle;
            interviewServices.findByTitle(interviewTitle)
            .then((data:any) => {
            var interview = data;  
            var interview_id = interview.id;
            interviewQuestionService.findQuestionsByInterviewId(interview_id)
             .then((data:any)=>{
                // questionService.findByQuestionId(data.question_id)
                // .then((data:any)=>{
                //     console.log(data)
                //     res.send(data)
                // })
                // .catch((error:any)=>{
                //     res.send(error)
                //  })
                res.send(data) 
            })
             .catch((error:any)=>{
                res.send(error)
             })
        })
        .catch((error:any)=>{
            res.send(error)
         })
        }
}