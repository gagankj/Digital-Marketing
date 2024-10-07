import React from 'react';

const Social = () => {
  return (
    <section className="bg-gray-100 pt-32 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Social Media Marketing</h2>
        <p className="text-center mb-8">
          We provide comprehensive social media marketing services to help you reach your target audience and grow your brand.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Strategy Development</h3>
              <p>
                We create tailored social media strategies to align with your business goals and engage your audience effectively.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Content Creation</h3>
              <p>
                Our team produces high-quality content that resonates with your audience and promotes your brand.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Analytics & Reporting</h3>
              <p>
                We provide detailed analytics and reports to measure the success of your social media campaigns and optimize performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
