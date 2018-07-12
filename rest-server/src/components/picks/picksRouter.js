import express from 'express';

const router = express.Router();

import { createPicks } from './picksController';

router.route('/createPicks')
  .post(createPicks);

export default router;