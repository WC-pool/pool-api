import express from 'express';

import { getUsersController } from './usersController';

const router = express.Router();

router.route('/getUser')
  .get(getUsersController);


export default router;