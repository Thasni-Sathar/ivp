import { Router } from 'express'
const router = Router()


import { InterviewController } from '../controller/interview.controller';

const interviewController = new InterviewController();

router.post('/interview',interviewController.addInterview);


module.exports = router