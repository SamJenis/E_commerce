import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { FaTimes } from 'react-icons/fa';

const Head = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleHide = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && ( // Conditionally render the section based on isVisible state
        <section className='head c_flex'>
            
          <div className='logoo'>
            <img style={{ width: '30px', height: '30px' }} src={logo} alt='' />
            
          </div>

          <div className='txt d_flex'>
            Get the Snitch App now! <p> Flat 150/- OFF on first order.</p>
          </div>
          
          <div>
            <button>download</button>
          </div>
          <span onClick={handleHide}>
            <FaTimes />
          </span>
        </section>
      )}
    </div>
  );
};

export default Head;
