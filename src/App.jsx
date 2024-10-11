// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton'; // Adjust the path as necessary

const App = () => {
  return (
    <div className='font-poppins'>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppButton /> {/* Add the WhatsApp button here */}
    </div>
  );
}

export default App;
