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
exports.QuestionController = void 0;
const questions_service_1 = require("../services/questions.service");
const categories_service_1 = require("../services/categories.service");
const questionService = new questions_service_1.QuestionService();
const categoriesService = new categories_service_1.CategoryService();
class QuestionController {
    /* To get the list of all categories */
    getQuestionList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            questionService.getAllQuestions()
                .then((data) => {
                res.status(200).send({ message: "Questions retrieved successfully", data });
            })
                .catch((error) => {
                console.log(error);
            });
        });
    }
    //     async addQuestion(req:any,res:any){
    //         let question:any = req.body;
    //         questionService.createQuestion(question)
    //             .then((data:any)=>{
    //                 res.status(200).send({message:"category created",data});
    //         })
    //             .catch((error:string) => {
    //             console.log(error);
    // });
    //     }
    addQuestion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            categoriesService.findByName(req.body.categoryName)
                .then((data) => {
                var category = data;
                console.log(category);
                let Questiondb = {
                    question: req.body.question,
                    status: req.body.status,
                    category_id: category.id
                };
                questionService.createQuestion(Questiondb)
                    .then((data) => {
                    res.status(200).send({ message: " Question created", data });
                })
                    .catch((error) => {
                    console.log(error);
                });
            })
                .catch(() => {
                res.status(401).send({ message: "Category does not exist" });
            });
        });
    }
    getQuestionById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let questionId = req.params.id;
            questionService.findByQuestionId(questionId)
                .then((data) => {
                if (data.data !== 'null') {
                    res.status(200).send({ message: "particular question retrieved successfully", data });
                }
            })
                .catch((error) => {
                res.status(401).send({ message: "questions doesn't exist" });
            });
        });
    }
}
exports.QuestionController = QuestionController;
