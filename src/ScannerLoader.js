import React, { useState, useEffect } from 'react';
import './ScannerLoader.css';
import model from "../src/components/assets/model.jpg"
const ScannerLoader = () => {
  const [showScanner, setShowScanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScanner(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleScannerAnimationEnd = () => {
    setShowScanner(false);
  };

  return (
    <div className="scanner-container">
      <img src={model} alt='Logo' className='relative'/>
      {showScanner && (
        <div className="object justifiy-center " onAnimationEnd={handleScannerAnimationEnd}>
          {/* <div className="scanner-lights"></div> 
          */}
          <div className='line'></div> <br/>
          <div className='line1'></div> <br/>
          <div className='line2'></div> <br/>
          <div className='line3'></div> <br/>
        </div>
      )}
    </div>
  );
};

export default ScannerLoader;
