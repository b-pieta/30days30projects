import React, { useState } from 'react';
import './ColorPicker.css';

function ColorPicker() {
  const [color, setColor] = useState('rgb(255, 255, 255)'); 

  const generateRandomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  const rgbToHex = (rgb) => {
    let [r, g, b] = rgb.match(/\d+/g);
    r = parseInt(r).toString(16).padStart(2, '0');
    g = parseInt(g).toString(16).padStart(2, '0');
    b = parseInt(b).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  };

  const convertToHEX = () => {
    if (color.startsWith('rgb')) {
      setColor(rgbToHex(color));
    }
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <p>Current Color: {color}</p>
      <button onClick={generateRandomRGB}>Generate Random RGB Color</button>
      <button onClick={convertToHEX}>Convert RGB to HEX</button>
    </div>
  );
}

export default ColorPicker;
