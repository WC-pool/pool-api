import mongoose from 'mongoose';
import db from '../mongo';
 
export const getMessagesQuery = async () => {
  console.log('inside getMessagesQQQ')
  try {
    const data = await db.Wcpchat.find().sort('-createdAt');
    return data;
  } catch (err) {
    console.log('[chatQuery.js] - getMessages Error: ', err);
  }
}

export const getLastMessageQuery = async () => {
  try {
    const data = await db.Wcpchat.find().sort('-createAt').limit(1);
    return data;
  } catch (err) {
    console.log('[chatQuery.js] - getLastMessage Error: ', err);
  }
}