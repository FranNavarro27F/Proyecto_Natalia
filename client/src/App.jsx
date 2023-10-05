import React, { useState } from 'react'
import './css/App.css'
import QR_codeGenerator from './components/QR_codeGenerator';
import QRCodeReader from './components/QRCodeReader'

function App() {
  

  return (
    <>
      <div className='div_cont'>
        <QRCodeReader  />
      </div>
      <div className='div_cont'>
        <QR_codeGenerator />
      </div>
    </>
  )
}

export default App
