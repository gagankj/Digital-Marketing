import React, { useEffect, useState } from 'react';
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";

const Contact = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [socialVisible, setSocialVisible] = useState(false);

  useEffect(() => {
    const headingTimer = setTimeout(() => {
      setHeadingVisible(true);
    }, 0); // Show heading immediately

    const infoTimer = setTimeout(() => {
      setInfoVisible(true);
    }, 200); // Show phone and WhatsApp after 200ms

    const socialTimer = setTimeout(() => {
      setSocialVisible(true);
    }, 400); // Show social media icons after 400ms

    return () => {
      clearTimeout(headingTimer);
      clearTimeout(infoTimer);
      clearTimeout(socialTimer);
    }; // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div>
        <h1 className={`text-4xl md:text-7xl font-bold text-black mb-6 transition-opacity duration-1000 ${headingVisible ? 'opacity-100' : 'opacity-0'}`}>
          Contact <span className='text-orange-500'>Us 📞</span>
        </h1>
        <div className={`text-center mb-4 transition-opacity duration-1000 ${infoVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl text-black">
            Phone: <span className="text-orange-500">+123 456 7890</span>
          </p>
          <p className="text-base md:text-lg text-black">
            WhatsApp: 
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">
              Click here
            </a>
          </p>
        </div>
        <div className={`flex justify-center space-x-4 transition-opacity duration-1000 ${socialVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="Youtube" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
