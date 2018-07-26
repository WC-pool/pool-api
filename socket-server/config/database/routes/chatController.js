import db from '../mongo';
import { getMessagesQuery } from './chatQuery';

export const getMessagesController = async (req, res) => {
  
  try {
    const data = await getMessagesQuery();
    return res.send(data);
  } catch (err) {
    console.log('[chatController.js] - getMessages Error: ', err)
  }
}