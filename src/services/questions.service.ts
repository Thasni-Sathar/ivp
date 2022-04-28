import { Question} from '../models/questions' 

export class QuestionService{
    
    static get QuestionList(){
        /* When only selected fields required go for the below code */
        //return ['id','role_id'];
        return ({});
    }


    /* To get the list of all question*/
    getAllQuestions(){
            return Question.findAll({
            
        })   
    }

    createQuestion(question:any){
        var newQuestion = new Question(question);
        return newQuestion.save();
    }
    

    findByQuestionId(id:number){
        return Question.findByPk(id);
    }

}