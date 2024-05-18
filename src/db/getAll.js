export function getAll(params) {
  try {
    let pollutionsLocal = localStorage.getItem('pollutions');
    if (!pollutionsLocal) {
      return console.log('ПОМИЛКА В localStorage - немає записів');
    }
    let smth = JSON.parse(pollutionsLocal);
    return smth;
  } catch (error) {
    console.log('ПОМИЛКА В localStorage', error);
  }
}
