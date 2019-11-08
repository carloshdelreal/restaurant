import { createDiv } from './elmcreator';
import logoBack from '../img/logo-rodizio.png';

function menuList(items) {
  const list = document.createElement('ul');
  items.forEach((element) => {
    const litem = document.createElement('li');
    litem.innerText = element;
    list.appendChild(litem);
  });
  return list;
}
const menuItems = [
  'Baby Beff',
  'Churrasco',
  'Pork Leg',
  'Cow Guts',
  'Trucha',
  'River Trout',
];

export default function createHomeContent() {
  const homeContent = createDiv(['jumbotron', 'jumbotron-fluid']);
  homeContent.style.background = `url('${logoBack}') no-repeat`;
  homeContent.style.backgroundPosition = 'center center';
  const title = createDiv(['display-4']);
  title.innerText = 'Our Menu Includes';
  const text = createDiv(['lead']);
  text.appendChild(menuList(menuItems));
  homeContent.appendChild(title);
  homeContent.appendChild(text);

  return homeContent;
}
