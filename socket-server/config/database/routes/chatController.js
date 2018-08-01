import db from '../mongo';
import { getMessagesQuery, getLastMessageQuery } from './chatQuery';

export const getMessagesController = async (req, res) => {
  console.log('inside getMessages')
  try {
    const data = await getMessagesQuery();
    return res.send(data);
  } catch (err) {
    console.log('[chatController.js] - getMessages Error: ', err)
  }
}

export const getLastMessageController = async (req, res) => {
  try {
    const data = await getLastMessageQuery();
    return res.send(data);
  } catch (err) {
    console.log('[chatController.js] - getLastMessage Error: ', err)
  }
}