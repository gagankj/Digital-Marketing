// WhatsAppButton.js
import React from 'react';
import whatsappLogo from '../assets/images/whats.png'; // Adjust the path as necessary

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/1234567890', '_blank'); // Replace with your WhatsApp number
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={handleClick} 
        className="   transition duration-300 hover:scale-110"
      >
        <img src={whatsappLogo} alt="WhatsApp" className="w-14 rounded-full h-14" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
