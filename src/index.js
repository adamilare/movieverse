import './styles.css';
import './assets/movieverse-logo.png';
import { homePage } from './modules';

const mainContainer = document.querySelector('main');

window.addEventListener('DOMContentLoaded', () => {
  mainContainer.innerHTML = homePage();
});
