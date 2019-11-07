import { createDiv, createElem, tabElem, tabContent } from './elmcreator';
import logo from '../img/boton-rodizio.png';
// import logoback from '../img/logo-rodizio.png';
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
  const liContact = tabElem('contact', false);
  tabNav.appendChild(liHome);
  tabNav.appendChild(liContact);

  // Tabs Container
  const tabContainer = createElem('div', 'myTabContent', ['tab-content']);
  const homeContainer = tabContent('home', true);
  const contactContainer = tabContent('contact', false);

  // Content
  const content = document.querySelector('#content');
  const column = createDiv(['col-md-12']);
  content.appendChild(column);

  // Home
  const homeContent = createDiv(['jumbotron', 'jumbotron-fluid']);
  const title = createDiv(['display-4']);
  title.innerHTML = 'This is Rodizio Restaurant';
  const text = createDiv(['lead']);
  text.innerText =
    'The best place to enjoy high quality meat in the city, you will find the finest slices preparated with absolute mastery.';
  homeContent.appendChild(title);
  homeContent.appendChild(text);
  homeContainer.appendChild(homeContent);

  // contact
  const contactContent = createDiv(['jumbotron', 'jumbotron-fluid']);
  const contactTitle = createDiv(['display-4']);
  contactTitle.innerText = 'Contact us';
  const contactText = createDiv(['lead']);
  contactText.innerText = 'Call us soon';
  contactContent.appendChild(contactTitle);
  contactContent.appendChild(contactText);
  contactContainer.appendChild(contactContent);

  // column
  tabContainer.appendChild(homeContainer);
  tabContainer.appendChild(contactContainer);
  column.appendChild(tabNav);
  column.appendChild(tabContainer);
}
