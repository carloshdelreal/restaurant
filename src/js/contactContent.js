import { createDiv } from './elmcreator';

export default function createContactContent() {
  const contactContent = createDiv(['jumbotron', 'jumbotron-fluid']);
  const contactTitle = createDiv(['display-4']);
  contactTitle.innerText = 'Contact us';
  const contactText = createDiv(['lead']);
  contactText.innerText = 'Call us soon';
  contactContent.appendChild(contactTitle);
  contactContent.appendChild(contactText);

  return contactContent;
}
