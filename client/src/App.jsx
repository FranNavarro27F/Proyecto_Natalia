import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import QRCode from "react-qr-code";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Modificar el valor asignado a la propiedad "value=" va a generar un QR diferente con esa informacion metida */}
        {/* <QRCode value="Francisco Navarro / DNI:38701111 / pariente de: Juan Navarro" /> */}
        <QRCode value="Perdon, Lei, esto me toma algo de tiempo, no por el programa es si sino las caracteristicas del programa jaja ;)" />
      </div>
    </>
  )
}

export default App
