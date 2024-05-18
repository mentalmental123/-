import { getAll } from './getAll';
import { addAll } from './writeAll';

export function deleteRecord(id) {
  if (id) {
    let allRecords = getAll();
    console.log(allRecords);
    let filtered = allRecords.filter(({ ID }) => ID !== id);
    addAll(filtered);
    return;
  }
  return console.error('ПОМИЛКА НЕ ПЕРЕДАЛИ АЙДІ ЗАПИСУ');
}
