import { Notify } from 'notiflix';

import { nanoid } from 'nanoid';
import { pollRefs } from './pollutionFormElem';
import { add } from '../db/write';

// console.log(lib.queryAll('books'));

let EXPENSES = 1;

export function getPolValue(evt) {
  evt.preventDefault();
  const formElem = evt.target.elements;
  let formElemArray = [];

  // validation

  for (const item of formElem) {
    // console.log(item.value);
    if (!item.value && item.nodeName !== 'BUTTON') {
      Notify.failure('Заповінть всі поля!');
      return;
    }
    if (item.nodeName === 'SELECT') {
      formElemArray.push(item.selectedOptions[0].label);
    } else if (item.nodeName !== 'BUTTON') {
      formElemArray.push(item.value);
    }

    if (item.name == 'date' || !item.name) {
      continue;
    }
    console.log(item.value);
    EXPENSES *= Number(item.value);
  }

  const typeOfPll = formElemArray[0];

  console.log(formElemArray);
  console.log(typeOfPll);

  switch (typeOfPll) {
    case 'Вода':
      EXPENSES /= 300;
      break;
    case 'Повітря':
      EXPENSES /= 300;
      break;
    case 'Земля':
      EXPENSES /= 300;
      break;
    default:
      break;
  }

  // storage.save(ex);
  var EXPENSESlocal = localStorage.getItem('expences');
  alert(`Успішно розрахована сума - ${Math.floor(EXPENSES)}`);

  var transferToJSON = {
    ID: nanoid(),
    pollutionType: formElemArray[0],
    pollutionRegion: formElemArray[1],
    pollutionArea: formElemArray[2],
    pollutionTerritory: formElemArray[3],
    pollutionSubstanse: formElemArray[4],
    pollutionDated: formElemArray[5],
    pollutionExpense: Math.floor(EXPENSES) / 1000,
    comment: formElemArray.pollutionType,
  };

  console.log(transferToJSON);

  add(transferToJSON);

  // db.set('Obj1', transferToMongo);

  // console.log(transferToMongo);

  //   console.log(EXPENSESlocal);
  if (EXPENSESlocal) {
    localStorage.setItem('expences', Number(EXPENSESlocal) + Number(EXPENSES));
  } else {
    localStorage.setItem('expences', EXPENSES);
  }
  // alert(`Розмір шкоди у гривнях зіставляє - ${EXPENSES}`);
  // refresh page
  // location.reload(true);
  //   localStorage.setItem('expences', EXPENSES);
  //calculation
}
