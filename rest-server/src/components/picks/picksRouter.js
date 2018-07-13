import express from 'express';

const router = express.Router();

import { createPicks,
         getAll,
         getIndvlSet
        } from './picksController';

router.route('/createPicks')
  .post(createPicks);

router.route('/getAll')
  .get(getAll)

router.route('/getIndvlSet')
  .get(getIndvlSet)

export default router;