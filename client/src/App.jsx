import React, { useState } from 'react'
import './css/App.css'
import QR_codeGenerator from './components/QR_codeGenerator';
import QRCodeScanner from './components/QRCodeScanner';


function App() {
  const [scannedResult, setScannedResult] = useState('');

  const handleScan = (result) => {
    setScannedResult(result);
  };

  return (
    <>
      <div className='div_cont'>
      <h1>QR Code Scanner</h1>
      <QRCodeScanner  />
      {scannedResult && <p>Scanned Result: {scannedResult}</p>}
    </div>
      <div className='div_cont'>
        <QR_codeGenerator />
      </div>
    </>
  )
}

export default App
