import { createDiv } from './elmcreator';
import logoBack from '../img/logo-rodizio.png';

export default function createContactContent() {
  const contactContent = createDiv(['jumbotron', 'jumbotron-fluid']);
  contactContent.style.background = `url('${logoBack}') no-repeat`;
  contactContent.style.backgroundPosition = 'center center';
  const contactTitle = createDiv(['display-4']);
  contactTitle.innerText = 'Contact us';
  const contactText = createDiv(['lead']);
  contactText.innerText = 'Call us soon';
  contactContent.appendChild(contactTitle);
  contactContent.appendChild(contactText);

  return contactContent;
}
