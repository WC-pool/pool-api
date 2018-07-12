import express from 'express';

const router = express.Router();

import { createPicks,
         getAll
        } from './picksController';

router.route('/createPicks')
  .post(createPicks);

router.route('/getAll')
  .get(getAll)

export default router;