import db from '../../config/database';

import { createPicksHelper } from './picksSQLHelper';

export const createPicksQuery = async (name, picker, Awinner, Arunner, Bwinner, Brunner, Cwinner, Crunner, Dwinner, Drunner, Ewinner, Erunner, Fwinner, Frunner, Gwinner, Grunner, Hwinner, Hrunner) => {
  console.log('scott rogowsky', picker)
  try {
    const queryString = createPicksHelper(name, picker, Awinner, Arunner, Bwinner, Brunner, Cwinner, Crunner, Dwinner, Drunner, Ewinner, Erunner, Fwinner, Frunner, Gwinner, Grunner, Hwinner, Hrunner)
    const data = await db.queryAsync(queryString);
    return data;
  } catch (err) {
    console.log('[picksQuery.js] createPicksQuery Error: ', err)
  }
}