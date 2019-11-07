import {
  createDiv, createElem, tabElem, tabContent,
} from './elmcreator';
import homeContent from './homeContent';
import menuContent from './menuContent';
import aboutContent from './aboutContent';
import contactContent from './contactContent';
import logo from '../img/boton-rodizio.png';
// import logoback from '../img/logo-rodizio.png';
/* eslint import/no-unresolved: [2, { ignore: ['\bootstrap/js/dist/tab$'] }] */
import 'bootstrap/js/dist/tab';

export default function loadElements() {
  // Navbar
  const logoElm = new Image();
  logoElm.src = logo;
  logoElm.classList.add('d-inline-block', 'align-top');
  document.querySelector('#logo_rodizio').appendChild(logoElm);

  // Tabs;
  const tabNav = createElem('ul', 'myTab', ['nav', 'nav-tabs']);
  tabNav.setAttribute('role', 'tablist');
  const liHome = tabElem('home', true);
  const liMenu = tabElem('menu', false);
  const liAbout = tabElem('about', false);
  const liContact = tabElem('contact', false);

  tabNav.appendChild(liHome);
  tabNav.appendChild(liMenu);
  tabNav.appendChild(liAbout);
  tabNav.appendChild(liContact);

  // Tabs Container
  const tabContainer = createElem('div', 'myTabContent', ['tab-content']);
  const homeContainer = tabContent('home', true);
  const menuContainer = tabContent('menu', false);
  const aboutContainer = tabContent('about', false);
  const contactContainer = tabContent('contact', false);

  // Content
  const content = document.querySelector('#content');
  const column = createDiv(['col-md-12']);
  content.appendChild(column);

  // Home
  homeContainer.appendChild(homeContent());

  // Menu
  menuContainer.appendChild(menuContent());

  // About
  aboutContainer.appendChild(aboutContent());

  // contact
  contactContainer.appendChild(contactContent());

  // column
  tabContainer.appendChild(homeContainer);
  tabContainer.appendChild(menuContainer);
  tabContainer.appendChild(aboutContainer);
  tabContainer.appendChild(contactContainer);

  column.appendChild(tabNav);
  column.appendChild(tabContainer);
}
