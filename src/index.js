import logoImg from './content/lemoncode-logo.png';
import './mystyles.scss';

console.log("Hello webpack zero config!");

const img = document.createElement('img');
img.src = logoImg;
img.alt = 'Lemoncode Logo';

document.getElementById('imgContainer').appendChild(img);