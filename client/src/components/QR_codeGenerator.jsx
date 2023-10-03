import React, { useState } from 'react';
import QRCode from "react-qr-code";
import '../css/C_QR_codeGenerator.css'

const QR_codeGenerator = () => {

    const [textQR, setTextQR] = useState('');
  
    const handleInputChange = (e) => {
      setTextQR(e.target.value);
    };
  

  return (
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
  )
}

export default QR_codeGenerator
