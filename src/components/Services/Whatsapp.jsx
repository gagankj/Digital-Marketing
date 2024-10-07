import React from 'react';

const WhatsappMarketing = () => {
  return (
    <div className="bg-gray-100 pt-32 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">WhatsApp Marketing Services</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Boost Your Business with WhatsApp Marketing</h2>
          <p className="text-gray-700 mb-4">
            Leverage the power of WhatsApp, the world's most popular messaging app, to connect with your customers,
            increase engagement, and drive sales. Our WhatsApp Marketing services help you harness this powerful
            platform to grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Targeted Campaigns",
    description: "Create and send personalized marketing campaigns to your WhatsApp audience, ensuring your message reaches the right people at the right time."
  },
  {
    title: "Automated Responses",
    description: "Set up automated responses to common queries, improving customer service and freeing up your team's time."
  },
  {
    title: "Rich Media Sharing",
    description: "Share images, videos, and documents directly with your customers, enhancing engagement and information delivery."
  },
  {
    title: "Analytics and Reporting",
    description: "Track the performance of your WhatsApp marketing efforts with detailed analytics and insights."
  },
  {
    title: "List Building",
    description: "Grow your WhatsApp subscriber list with our proven strategies and tools."
  },
  {
    title: "Compliance Management",
    description: "Ensure your WhatsApp marketing activities comply with regulations and best practices."
  }
];

export default WhatsappMarketing;
