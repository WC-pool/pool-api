export const createPicksHelper = (name, picker, Awinner, Arunner, Bwinner, Brunner, Cwinner, Crunner, Dwinner, Drunner, Ewinner, Erunner, Fwinner, Frunner, Gwinner, Grunner, Hwinner, Hrunner) => {
  return `INSERT INTO picks (name, picker, groupA1, groupA2, groupB1, groupB2, groupC1, groupC2, groupD1, groupD2, groupE1, groupE2, groupF1, groupF2, groupG1, groupG2, groupH1, groupH2)
  VALUES ('${name}', '${picker}', '${Awinner}', '${Arunner}', '${Bwinner}', '${Brunner}', '${Cwinner}', '${Crunner}', '${Dwinner}', '${Drunner}', '${Ewinner}', '${Erunner}', '${Fwinner}', '${Frunner}', '${Gwinner}', '${Grunner}', '${Hwinner}', '${Hrunner}')
  ON CONFLICT DO NOTHING
  `
}