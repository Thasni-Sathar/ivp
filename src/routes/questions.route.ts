import { Router } from 'express'
const router = Router()


import { QuestionController } from '../controller/questions.controller';

const questionController = new QuestionController();

//for getting list of all questions
router.get('/',questionController.getQuestionList);
router.get('/questions/:id',questionController.getQuestionById);
// router.put('/update-employee-role/:id',categoryController.updateEmployeeRoles);
router.post('/questions',questionController.addQuestion);


module.exports = router