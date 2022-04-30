"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterviewController = void 0;
const interview_services_1 = require("../services/interview.services");
const interviewServices = new interview_services_1.InterviewService();
class InterviewController {
    addInterview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var interview = req.body;
            console.log(interview);
            interviewServices.createInterview(interview)
                .then((data) => {
                var interviewId = data.id;
                console.log(interviewId);
                res.send(data);
            })
                .catch((error) => {
                res.send(error);
            });
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
        });
    }
}
exports.InterviewController = InterviewController;
