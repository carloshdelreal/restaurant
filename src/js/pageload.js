import logo from '../img/boton-rodizio.png';

export default function loadElements() {
  // Navbar
  const logoElm = new Image();
  logoElm.src = logo;
  logoElm.classList.add('d-inline-block', 'align-top');
  document.querySelector('#logo_rodizio').appendChild(logoElm);

  // Content

  const content = document.querySelector('#content');

  const element1 = document.createElement('div');
  element1.innerHTML = 'Hello form webpack, how are you, fine?, sure?';
  content.appendChild(element1);
}
