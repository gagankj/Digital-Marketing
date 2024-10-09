// NotFound.js
import React from 'react';
import sad from '../assets/images/sad.png'
const Notfound = () => {
  return (
    <div className="flex custom-cursor flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <img src={sad} alt="404 illustration" className=" h-44" />
      <h1 className="text-9xl font-bold text-gray-700">404</h1>
      <h2 className="text-3xl font-semibold text-gray-600">Oops! Page Not Found</h2>
      <p className="mt-4 text-gray-500">The page you are looking for does not exist.</p>
      <p className="mt-2 text-gray-500">It might have been removed or is temporarily unavailable.</p>
      <a href="/" className="mt-6 bg-blue-500 text-white px-6 py-3 rounded shadow">
        Go Back Home
      </a>
    </div>
  );
};

export default Notfound;
