import React from 'react';

const About = () => {
  return (
    <div className="container custom-cursor mx-auto pt-20 px-4" style={{ backgroundColor: '#E9EFEC' }}>
      {/* Hero Section */}
      <section className="hero text-black py-20 text-center">
        <h1 className="text-7xl font-bold">About Us</h1>
        <p className="mt-4">Learn more about our mission, values, and the team behind our success.</p>
      </section>

      {/* Mission Section */}
      <section className="mission my-16">
        <h2 className="text-4xl font-bold text-center">Our Mission</h2>
        <p className="mt-4 text-center">
          Our mission is to empower businesses through innovative marketing strategies that drive growth and success. We strive to create meaningful connections between brands and their audiences.
        </p>
      </section>

      {/* Values Section */}
      <section className="values my-16">
        <h2 className="text-4xl font-bold text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="value bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">Integrity</h3>
            <p>We uphold the highest standards of integrity in all our actions.</p>
          </div>
          <div className="value bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">Innovation</h3>
            <p>We embrace change and seek innovative solutions to challenges.</p>
          </div>
          <div className="value bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">Collaboration</h3>
            <p>We work together with our clients to achieve their goals.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team my-16">
        <h2 className="text-4xl font-bold text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="team-member bg-white p-6 rounded-lg shadow">
            <img src="https://via.placeholder.com/100" alt="Team Member 1" className="rounded-full mb-4"/>
            <h3 className="text-xl font-bold">Member 1</h3>
            <p>CEO</p>
          </div>
          <div className="team-member bg-white p-6 rounded-lg shadow">
            <img src="https://via.placeholder.com/100" alt="Team Member 2" className="rounded-full mb-4"/>
            <h3 className="text-xl font-bold">Member 2</h3>
            <p>Marketing Director</p>
          </div>
          <div className="team-member bg-white p-6 rounded-lg shadow">
            <img src="https://via.placeholder.com/100" alt="Team Member 3" className="rounded-full mb-4"/>
            <h3 className="text-xl font-bold">Member 3</h3>
            <p>Creative Lead</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact my-16">
        <h2 className="text-4xl font-bold text-center">Contact Us</h2>
        <p className="mt-4 text-center">We'd love to hear from you! Reach out to us for any inquiries.</p>
        <form className="mt-8 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded" required />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded" required />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 border rounded" rows="4" required></textarea>
          <button type="submit" className="bg-[#16423C] text-white px-6 py-3 rounded shadow">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default About;
