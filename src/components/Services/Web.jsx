import React from 'react';

const Web = () => {
  return (
    <div className="bg-gray-100 pt-32 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Web Development Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Frontend Development</h2>
            <p className="text-gray-600">We create responsive and interactive user interfaces using modern technologies like React.</p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Backend Development</h2>
            <p className="text-gray-600">Our robust backend solutions are built with Node.js and Express, ensuring scalable and efficient server-side operations.</p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">WordPress Development</h2>
            <p className="text-gray-600">We offer custom WordPress solutions, including theme development and plugin integration.</p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Blog Development</h2>
            <p className="text-gray-600">We can create feature-rich, SEO-optimized blogs tailored to your needs.</p>
          </section>
        </div>

        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-semibold mb-6">Technologies We Use</h2>
          <p className="text-xl mb-4">We specialize in the MERN stack:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>MongoDB - for flexible, scalable databases</li>
            <li>Express - for efficient backend routing</li>
            <li>React - for dynamic, responsive frontends</li>
            <li>Node.js - for server-side JavaScript execution</li>
          </ul>
        </section>

        <section className="bg-blue-600 text-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Web Project?</h2>
          <p className="text-xl mb-6">Contact us today to discuss how we can bring your web vision to life!</p>
          <a href="#contact" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">Get in Touch</a>
        </section>
      </div>
    </div>
  );
};

export default Web;
