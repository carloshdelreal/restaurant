import { createDiv } from './elmcreator';

function menuList(items) {
  const list = document.createElement('ul');
  items.forEach((element) => {
    const litem = document.createElement('li');
    litem.innerText = element;
    list.appendChild(litem);
  });
  console.log(list);
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
  const title = createDiv(['display-4']);
  title.innerText = 'Our Menu Includes';
  const text = createDiv(['lead']);
  text.appendChild(menuList(menuItems));
  homeContent.appendChild(title);
  homeContent.appendChild(text);

  return homeContent;
}
