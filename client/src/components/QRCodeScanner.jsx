
  import { Html5QrcodeScanner } from "html5-qrcode";
  import React, { useEffect, useState } from "react";

  function QR_codeScanner() {

      const [ scanResult, setScanResult ] = useState(null)

      useEffect( () => {
          const scanner= new Html5QrcodeScanner('reader', {
              qrbox: {
                  width: 250,
                  height: 250,
              },
              fps: 4
          });
      
          scanner.render(success, error);
      
          function success (result) {
              scanner.clear();
              setScanResult();
          }
      
          function error (err) {
              console.warn(err)
          }
      }, []);
    
      return (
          <>
              <div>
                  <h3>QR_codeScanner</h3>
                  {scanResult
                  ? <div> Success: <a href={"http://"+scanResult}>{scanResult}</a> </div>
                  : <div id="reader"></div>
                  }
              </div>
          </>
      );
  }

  export default QR_codeScanner;