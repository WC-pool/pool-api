import { getUsersQuery } from './usersQuery';

export const getUsersController = async (req, res) => {
  try {
    const data = await getUsersQuery(req.query.uid);
    // console.log('HELLOOOO', data)
    return res.status(200).send(data);
  } catch (err) {
    console.log('[usersController.js] - Error using getUsersQuery:', err);
  }
}

