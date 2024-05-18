import { refs } from './refs';

export function insertDataToTable(role) {
  try {
    const pollArr = JSON.parse(localStorage.getItem('pollutions'));
    let table = document.querySelector('.table');
    console.log(table);
    if (!table) {
      console.log(refs);
      return console.log('не передана табличка');
    }
    if (pollArr) {
      const markup = pollArr.map(
        (
          {
            ID,
            pollutionType,
            pollutionTerritory,
            pollutionRegion,
            pollutionSubstanse,
            pollutionExpense,
            pollutionDated,
            pollutionArea,
          },
          index
        ) => {
          if (role === 'expert') {
            return `<tr><td>${pollutionType}</td><td>${pollutionRegion}</td><td>${pollutionArea}</td><td>${pollutionTerritory}</td><td>${pollutionSubstanse}</td><td>${pollutionDated}</td><td>${pollutionExpense}</td></tr>`;
          }
          return `<tr><td>${pollutionType}</td><td>${pollutionRegion}</td><td>${pollutionArea}</td><td>${pollutionTerritory}</td><td>${pollutionSubstanse}</td><td>${pollutionDated}</td><td>${pollutionExpense}</td><td class="not-td-style"><button class="delete-button" id="${ID}" onclick="deleteRow(${index})">Видалити</button></td></tr>`;
        }
      );
      table.insertAdjacentHTML('beforeend', markup);
    }
  } catch (error) {
    console.error('ПОМИЛКА!!', error);
  }
}
