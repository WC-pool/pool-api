import express from 'express';

import { getMessagesController } from './chatController';

const chatRouter = express.Router();

chatRouter.use('/getMessages')
  .get(getMessagesController)


export default chatRouter;