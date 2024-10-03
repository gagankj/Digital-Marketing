import React from 'react';

const Ppc = () => {
  return (
    <div className="bg-gray-100 pt-32 min-h-screen">
      <header className="bg-blue-600 mx-10 rounded-lg text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Pay-Per-Click Marketing Services</h1>
          <p className="text-xl">Drive targeted traffic and boost your ROI with our expert PPC management</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Our PPC Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Targeted Campaigns', 'Data-Driven Optimization', 'Transparent Reporting'].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{benefit}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our PPC Process</h2>
          <ol className="list-decimal list-inside space-y-4">
            {['Research & Strategy', 'Campaign Setup', 'Ad Creation', 'Optimization', 'Reporting & Analysis'].map((step, index) => (
              <li key={index} className="text-lg">
                <span className="font-semibold">{step}:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Ready to Boost Your PPC Performance?</h2>
          <a href="#contact" className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get a Free Consultation
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Ppc;
