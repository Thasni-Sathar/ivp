"use strict";
const express = require('express');
const router = express.Router();
const categoryRouter = require('./categories.route');
const candidateRouter = require('./candidates.route');
router.use('/admin', categoryRouter);
router.use('/admin', candidateRouter);
module.exports = router;
