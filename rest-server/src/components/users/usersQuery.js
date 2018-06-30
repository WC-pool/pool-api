import db from '../../config/database';

import { getUsersHelper } from './usersSQLHelper';

export const getUsersQuery = async (uid) => {
  try {
    const queryString = getUsersHelper(uid);
    const data = await db.queryAsync(queryString);
    return data;
  } catch (err) {
    console.log('Error', err);
  }
}