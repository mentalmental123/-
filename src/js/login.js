import { insertDataToTable } from './insertDataToTable';
import { layout } from './layout';
import { users } from './loginData';
import { refs } from './refs';
import { Report } from 'notiflix';
import { insertDataToTable } from './insertDataToTable';
// refs.loginForm.addEventListener('submit', login);

export function login(evt) {
  evt.preventDefault();

  let login = evt.target.elements.login.value;
  let password = evt.target.elements.password.value;

  if (password && login) {
    const loginPased = users.find(
      obj => login === obj.username && password === obj.password
    );

    if (loginPased) {
      const role = loginPased.role;
      console.log(refs.loginText.dataset);

      switch (role) {
        case 'administrator':
          console.log(refs);
          localStorage.setItem('isAdminLogin', true);
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
          insertDataToTable('admin');
          return;
        case 'expert':
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

          return;
        case 'ecologist':
          console.log('welcome ecologist');

          return;
        default:
          return;
      }
    }
    Report.init({
      failure: {
        backOverlayColor: 'rgba(255,85,73,0.3)',
      },
    });

    Report.failure(
      'Не вдалося увійти',
      '"Можливо такого користувача ще немає в системі."<br/><br/>',
      'Окей'
    );
    return;
  }
  alert('Заповінть поля!');
}
