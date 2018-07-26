import mongoose from 'mongoose';
import db from '../mongo';
 
export const getMessagesQuery = async () => {
  try {
    const data = await db.Chat.find().sort('-createdAt');
  } catch (err) {
    console.log('[chatQuery.js] - getMessages Error: ', err);
  }
}