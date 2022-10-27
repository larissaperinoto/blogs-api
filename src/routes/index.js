const express = require('express');

const router = express.Router();

const loginRouter = require('./login.routes');
const userRouter = require('./user.routes');
const categoryRouter = require('./category.routes');
const postRouter = require('./post.routes');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoryRouter);
router.use('/post', postRouter);

module.exports = router;
