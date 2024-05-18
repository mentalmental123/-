import { login } from './login';
import { logout } from './logout';
import { readExel } from './importExel';
import { getPolValue } from './pollutionCalculation';

import { layout } from './layout';
import { insertDataToTable } from './insertDataToTable';
import { refs } from './refs';
import exportFromJSON from 'export-from-json';
import { getAll } from '../db/getAll';

try {
  refs.loginForm.addEventListener('submit', login);
  refs.loginText.addEventListener('click', logout);
} catch (error) {
  console.error('ПОМИЛКА!!', error);
}

try {
  const exportD = document.querySelector('.export-data');
  exportD.addEventListener('click', download);
  function download(params) {
    const fileName = 'exported';
    const data = JSON.parse(localStorage.getItem('pollutions'));
    // const fields = [
    //   'Екологічна ділянка',
    //   'Область',
    //   'Площа забруднення Кв.м',
    //   'Вид земельної ділянки',
    //   'Вид забруднюючої речовини',
    //   'Дата забрудення',
    // ];
    const exportType = 'xls';

    exportFromJSON({ data, fileName, exportType });
  }
} catch (error) {
  console.log('Error in export data button', error);
}

try {
  const pollutionForm = document.querySelector('.pollution-form');

  refs.exelInput.addEventListener('change', readExel);
  pollutionForm.addEventListener('submit', getPolValue);
} catch (error) {
  console.log('ПОМИЛКА!!', error);
}

window.addEventListener('DOMContentLoaded', () => {
  // запис загальної суми відшкодуваннь
  try {
    var EXPENSESlocal = localStorage.getItem('expences');
    if (EXPENSESlocal) {
      refs.expensesText.textContent = `Загальні витрати відшкодуваннь: ${
        Math.floor(EXPENSESlocal) / 1000000000
      } млрд.грн`;
    }
  } catch (error) {
    console.error('ПОМИЛКА!!', error);
  }
  // повторний login користувачів

  try {
    console.log(refs);
    if (JSON.parse(localStorage.getItem('isAdminLogin'))) {
      refs.loginText.textContent = 'LogOut';
      refs.roleLabel.textContent = 'Сторінка Адміністратора';
      refs.loginForm.classList.add('hide-elem');
      refs.hideMainContentContainer.classList.remove('hide-elem');
      refs.hideExelContainer.classList.remove('hide-elem');
      insertDataToTable('admin');
      // refs.hideTableButtonsColumn.classList.remove('hide-elem');

      // refs.mother.innerHTML = '';
      // refs.loginText.dataset.login = 'in';
      console.log('welcome administrator');
      // refs.mother.innerHTML = layout.adminPage;
      // insertDataToTable('admin');
    } else if (JSON.parse(localStorage.getItem('isExpertLogin'))) {
      localStorage.setItem('isExpertLogin', true);
      refs.loginText.textContent = 'LogOut';
      refs.roleLabel.textContent = 'Сторінка Експерта';
      // refs.mother.innerHTML = '';
      refs.loginForm.classList.add('hide-elem');
      refs.hideMainContentContainer.classList.remove('hide-elem');
      // refs.loginText.dataset.login = 'in';
      console.log('welcome expert');
      // refs.mother.innerHTML = layout.expertPage;
      insertDataToTable('expert');
    }
  } catch (error) {
    console.error('ПОМИЛКА!!', error);
  }
  //  додаю обробники подій та оборобку помилок
});
