export const createPicksHelper = (name, picker, pickername, Awinner, Arunner, Bwinner, Brunner, Cwinner, Crunner, Dwinner, Drunner, Ewinner, Erunner, Fwinner, Frunner, Gwinner, Grunner, Hwinner, Hrunner) => {
  return `INSERT INTO picks 
  VALUES (DEFAULT, '${name}', '${picker}', '${pickername}', '${Awinner}', '${Arunner}', '${Bwinner}', '${Brunner}', '${Cwinner}', '${Crunner}', '${Dwinner}', '${Drunner}', '${Ewinner}', '${Erunner}', '${Fwinner}', '${Frunner}', '${Gwinner}', '${Grunner}', '${Hwinner}', '${Hrunner}')
  ON CONFLICT DO NOTHING
  `;
}

export const getAllHelper = () => {
  return `
      SELECT * FROM picks
  `;
}

export const getIndvlSetHelper = (setId) => {
  return `
    SELECT * FROM picks WHERE id = ${setId}
  `
}
