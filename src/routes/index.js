const express = require('express');

const router = express.Router();

const loginRouter = require('./login.routes');
const userRouter = require('./user.routes');

router.use('/login', loginRouter);
router.use('/user', userRouter);

module.exports = router;
