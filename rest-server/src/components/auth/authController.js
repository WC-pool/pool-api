
import { signUpQuery } from './authQuery';




export const signUpController = async (req, res) => {
  try {
    let name = req.body.name
    let email = req.body.email;
    let uid = req.body.uid;
    let image = req.body.image || null;
    let message;
    const data = await signUpQuery(name, email, uid, image);
    if (data.rowCount === 0) {
      message = 'User already exists in SQL db'
    } else {
      message = 'User created successfully'
    }
    res.status(200).send(data);
  } catch (err) {
    console.log('[authController.js] - Error using signUpQuery: ', err)
    res.status(409).send({errMsg: err.message});
  }

}