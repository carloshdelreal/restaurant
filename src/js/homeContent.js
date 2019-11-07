import { createDiv } from './elmcreator';

export default function createHomeContent() {
  const homeContent = createDiv(['jumbotron', 'jumbotron-fluid']);
  const title = createDiv(['display-4']);
  title.innerHTML = 'This is Rodizio Restaurant';
  const text = createDiv(['lead']);
  text.innerText = 'The best place to enjoy high quality meat in the city, you will find the finest slices preparated with absolute mastery.';
  homeContent.appendChild(title);
  homeContent.appendChild(text);

  return homeContent;
}
