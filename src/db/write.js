export function add(obj) {
  try {
    let pollutionsLocal = localStorage.getItem('pollutions');
    if (!pollutionsLocal) {
      return localStorage.setItem('pollutions', JSON.stringify([obj]));
    }
    let smth = JSON.parse(pollutionsLocal);
    console.log(smth);
    smth.push(obj);

    localStorage.setItem('pollutions', JSON.stringify(smth));
    location.reload(true);
  } catch (error) {
    console.log('ПОМИЛКА В localStorage', error);
  }
}

// var transferToJSON = {
//   ID: nanoid(),
//   pollutionType: formElemArray[0],
//   pollutionRegion: formElemArray[1],
//   pollutionArea: formElemArray[2],
//   pollutionTerritory: formElemArray[3],
//   pollutionSubstanse: formElemArray[4],
//   pollutionDated: formElemArray[5],
//   pollutionExpense: Math.floor(EXPENSES) / 1000,
//   comment: formElemArray.pollutionType,
// };
