import React from 'react';
import { createRoot } from "react-dom/client";
import logoImg from './content/lemoncode-logo.png';
import './mystyles.scss';


const img = document.createElement('img');
img.src = logoImg;
img.alt = 'Lemoncode Logo';

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <h1 className="textcolor">Hola mundo!</h1>
        <div id="imgContainer"></div>
    </React.StrictMode>
);

setTimeout(() => {
    const imgContainer = document.getElementById('imgContainer');
    if (imgContainer) {
        imgContainer.appendChild(img);
    }
}, 300);

 console.log(`Api base: ${process.env.API_BASE}`);

