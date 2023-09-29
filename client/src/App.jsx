import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import QRCode from "react-qr-code";
import './App.css'

function App() {
  
    const [textQR, setTextQR] = useState('');
  
    const handleInputChange = (e) => {
      setTextQR(e.target.value);
    };
  

  return (
    <>
      <div className='div_cont'>
        <p>Lector de QR</p>
        
      </div>
   
    <div className='div_cont'>
      <label htmlFor="text-input">Ingresa el texto:</label>
      <input
        type="text"
        id="text-input"
        value={textQR}
        onChange={handleInputChange}
      />
      <p></p>
      {setTextQR && <QRCode value={textQR} size={300} />}
    </div>
    </>
  )
}

export default App
