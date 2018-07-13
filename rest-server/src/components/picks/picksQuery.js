import db from '../../config/database';

import { createPicksHelper,
         getAllHelper,
         getIndvlSetHelper
} from './picksSQLHelper';

export const createPicksQuery = async (name, picker, pickername, Awinner, Arunner, Bwinner, Brunner, Cwinner, Crunner, Dwinner, Drunner, Ewinner, Erunner, Fwinner, Frunner, Gwinner, Grunner, Hwinner, Hrunner) => {
  console.log('scott rogowsky', pickername)
  try {
    const queryString = createPicksHelper(name, picker, pickername, Awinner, Arunner, Bwinner, Brunner, Cwinner, Crunner, Dwinner, Drunner, Ewinner, Erunner, Fwinner, Frunner, Gwinner, Grunner, Hwinner, Hrunner)
    const data = await db.queryAsync(queryString);
    return data;
  } catch (err) {
    console.log('[picksQuery.js] createPicksQuery Error: ', err)
  }
}

export const getAllQuery = async () => {
  try {
    const queryString = getAllHelper();
    const data = await db.queryAsync(queryString);
    
    return data;
  } catch (err) {
    console.log('[picksQuery.js] getAllQuery Error: ', err);
  }
}

export const getIndvlSetQuery = async (setId) => {
  console.log('queryID', setId)
  try {
    const queryString = getIndvlSetHelper(setId);
    const data = await db.queryAsync(queryString);
    console.log('queryDATA ', data)
    return data;
  } catch (err) {
    console.log('[picksQuery.js] getIndvlSet Error: ', err);
  }
}