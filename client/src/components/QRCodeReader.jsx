import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

const QRCodeReader = () => {
  const [result, setResult] = useState('');

  const handleError = (err) => {
    console.error(err);
  }

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      // Aquí puedes agregar lógica para guardar el contenido del código QR.
      console.log('Contenido del QR:', data);
    }
  }

  return (
    <div>
      <QrScanner
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>Resultado: {result.text}</p>
      
    </div>
  );
}

export default QRCodeReader;
