const express = require('express');
const router = express.Router();


const categoryRouter = require('./categories.route');

router.use('/admin', categoryRouter);





module.exports = router;