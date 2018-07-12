import { createPicksQuery } from './picksQuery';

export const createPicks = async (req, res) => {
  console.log('BANGO', req.body)
  try {
    let name = req.body.name;
    let picker = req.body.picker;
    let Awinner = req.body.Awinner;
    let Arunner = req.body.Arunner;
    let Bwinner = req.body.Bwinner;
    let Brunner = req.body.Brunner;
    let Cwinner = req.body.Cwinner;
    let Crunner = req.body.Crunner;
    let Dwinner = req.body.Dwinner;
    let Drunner = req.body.Drunner;
    let Ewinner = req.body.Ewinner;
    let Erunner = req.body.Erunner;
    let Fwinner = req.body.Fwinner;
    let Frunner = req.body.Frunner;
    let Gwinner = req.body.Gwinner;
    let Grunner = req.body.Grunner;
    let Hwinner = req.body.Hwinner;
    let Hrunner = req.body.Hrunner;

    const data = await createPicksQuery(name, picker, Awinner, Arunner, Bwinner, Brunner, Cwinner, Crunner, Dwinner, Drunner, Ewinner, Erunner, Fwinner, Frunner, Gwinner, Grunner, Hwinner, Hrunner)
    res.status(200).send(data);
  } catch (err) {
    console.log('[picksController.js] createPicks error: ', err)  
  }
}