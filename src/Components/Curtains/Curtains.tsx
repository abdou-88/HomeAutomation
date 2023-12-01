import React, { useState } from 'react';
import '../../assets/Curtains.css';

const Curtains: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleCurtains = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="curtains-container" onClick={toggleCurtains}>
        <div className="curtains-wrapper">
          <div className={`curtain left ${isOpen ? 'open' : ''}`}></div>
          <div className={`curtain right ${isOpen ? 'open' : ''}`}></div>
        </div>
        
        <div className="content-below-curtains">
          Corridor
        </div>
      </div>
    );
  };
  
  export default Curtains;