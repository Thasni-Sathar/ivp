import { Interview } from "../models/interviews";
import { InterviewService } from "../services/interview.services";

const interviewServices = new InterviewService();

export class InterviewController{
    async addInterview(req:any, res:any){
        var interview=req.body
        interviewServices.createInterview(interview)
        .then((data:any)=>{
            res.send(data);
        })
        .catch((error:any)=>{
            res.send(error);
        })
    }
}