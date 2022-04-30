"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const interview_controller_1 = require("../controller/interview.controller");
const interviewController = new interview_controller_1.InterviewController();
router.post('/interview', interviewController.addInterview);
router.get('/interview/:interviewtitle', interviewController.getQuestionsByInterviewId);
module.exports = router;
