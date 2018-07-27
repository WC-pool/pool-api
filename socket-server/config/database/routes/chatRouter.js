import express from 'express';

import { getMessagesController } from './chatController';

const chatRouter = express.Router();

chatRouter.route('/getMessages')
  .get(getMessagesController)


export default chatRouter;