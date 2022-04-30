import { Interview } from "../models/interviews";
import { Question } from "../models/questions";
import { InterviewService } from "../services/interview.services";

const interviewServices = new InterviewService();

export class InterviewController{
    async addInterview(req:any, res:any){
        var interview=req.body
        console.log(interview)
        interviewServices.createInterview(interview)
        .then((data:any)=>{
            var interviewId = data.id
            console.log(interviewId)
            res.send(data);
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
}