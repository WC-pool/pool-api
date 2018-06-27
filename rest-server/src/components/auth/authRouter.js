import express from 'express';

const router = express.Router();

import { signUpController } from './authController'

router.route('/signup')
  .post(signUpController)



  export default router;