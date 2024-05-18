export function addAll(arr) {
  try {
    let pollutionsLocal = localStorage.getItem('pollutions');
    if (!pollutionsLocal) {
      return console.error(
        'ПОМИКАЛ неможливо записати дані в базу так як вона відсутня'
      );
    }
    localStorage.removeItem('pollutions');
    localStorage.setItem('pollutions', JSON.stringify(arr));
  } catch (error) {
    console.log('ПОМИЛКА В localStorage', error);
  }
}
