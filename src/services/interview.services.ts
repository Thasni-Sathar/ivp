import { Interview } from "../models/interviews"


export class InterviewService{

    createInterview(interview:any){
        var newInterview = new Interview(interview);
        return newInterview.save();
    }

}