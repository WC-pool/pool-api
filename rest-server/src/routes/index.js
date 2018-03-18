import express from 'express';

import authRouter from '../components/auth/authRouter';
import picksRouter from '../components/picks/picksRouter';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/picks', picksRouter);

export default router;