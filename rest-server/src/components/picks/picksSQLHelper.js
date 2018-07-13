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

// (name, picker, groupA1, groupA2, groupB1, groupB2, groupC1, groupC2, groupD1, groupD2, groupE1, groupE2, groupF1, groupF2, groupG1, groupG2, groupH1, groupH2)