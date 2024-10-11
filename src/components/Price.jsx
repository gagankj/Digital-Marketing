import React from 'react';

const PricePage = () => {
  return (
    <div className="bg-white pt-32 h-screen p-10">
      <h1 className="text-5xl  font-bold mb-6 text-center">Our Plans</h1>
      <div className="grid pt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border p-5 rounded-lg shadow-xl bg-zinc-200">
          <h2 className="text-xl font-semibold mb-2">SEO</h2>
          <p className="text-lg">₹15,000</p>
          <p className="mt-2 text-gray-600">Optimize your website for better visibility on search engines.</p>
        </div>
        <div className="border p-5 rounded-lg shadow-xl bg-zinc-200">
          <h2 className="text-xl font-semibold mb-2">WhatsApp Marketing</h2>
          <p className="text-lg">₹10,000</p>
          <p className="mt-2 text-gray-600">Engage with customers directly through WhatsApp.</p>
        </div>
        <div className="border p-5 rounded-lg shadow-xl bg-zinc-200">
          <h2 className="text-xl font-semibold mb-2">PPC</h2>
          <p className="text-lg">₹20,000</p>
          <p className="mt-2 text-gray-600">Drive traffic with targeted pay-per-click campaigns.</p>
        </div>
        <div className="border p-5 rounded-lg shadow-xl bg-zinc-200">
          <h2 className="text-xl font-semibold mb-2">Social Media Marketing</h2>
          <p className="text-lg">₹12,000</p>
          <p className="mt-2 text-gray-600">Boost your brand's presence on social media platforms.</p>
        </div>
      </div>
      <p className="mt-8 text-center text-orange-500 text-lg font-semibold">
        All services are customizable to fit your needs!
      </p>
    </div>
  );
};

export default PricePage;
