"use strict";
const express = require('express');
const router = express.Router();
const categoryRouter = require('./categories.route');
const questionRouter = require('./questions.route');
router.use('/admin', categoryRouter);
router.use('/admin', questionRouter);
module.exports = router;
