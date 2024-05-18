import { users } from './loginData';
import { refs } from './refs';
import { Report } from 'notiflix';
import { Notiflix } from 'notiflix';
import { layout } from './layout';

// refs.loginForm.addEventListener('submit', login);

export function logout(evt) {
  evt.preventDefault();
  localStorage.getItem('isAdminLogin');
  localStorage.getItem('isExpertLogin');

  if (refs.loginText.dataset.login === 'out') {
    return;
  }
  const isLogout = confirm('Ти хочеш вийти?');
  console.log();
  console.log(isLogout);
  if (isLogout) {
    localStorage.setItem('isAdminLogin', false);
    localStorage.setItem('isExpertLogin', false);

    refs.loginText.textContent = 'Login';
    refs.roleLabel.textContent = '';
    refs.loginText.dataset.login = 'out';
    refs.mother.innerHTML = '';
    refs.mother.innerHTML = layout.loginForm;
  }
  return;
}
