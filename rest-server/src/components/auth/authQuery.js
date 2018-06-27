import db from '../../config/database';

import { signUpHelper } from './authSQLHelper';

export const signUpQuery = async (name, email, uid, image) => {
  try {
    const queryString = signUpHelper(name, email, uid, image);
    const data = await db.queryAsync(queryString);
    return data
  } catch (err) {
    console.log('[authQuery.js] - Error adding user data: ', err);
  }
}