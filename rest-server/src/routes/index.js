import express from 'express';

import authRouter from '../components/auth/authRouter';
import picksRouter from '../components/picks/picksRouter';
import usersRouter from '../components/users/usersRouter'

const router = express.Router();

router.use('/auth', authRouter);
router.use('/picks', picksRouter);
router.use('/users', usersRouter);

export default router;