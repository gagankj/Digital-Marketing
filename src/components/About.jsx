import { React, useState, useEffect } from 'react';

const About = () => {
  const [HeadingVisible, SetHeadingVisible] = useState(false);
  const [MissionVisible, SetMissionVisible] = useState(false);
  const [ValuesVisible, SetValuesVisible] = useState(false);
  const [TeamVisible, SetTeamVisible] = useState(false);
  const [ContactVisible, SetContactVisible] = useState(false);

  useEffect(() => {
    const headingTimer = setTimeout(() => {
      SetHeadingVisible(true);
    }, 0);

    const missionTimer = setTimeout(() => {
      SetMissionVisible(true);
    }, 200);

    const valuesTimer = setTimeout(() => {
      SetValuesVisible(true);
    }, 400);

    const teamTimer = setTimeout(() => {
      SetTeamVisible(true);
    }, 600);

    const contactTimer = setTimeout(() => {
      SetContactVisible(true);
    }, 800);

    return () => {
      clearTimeout(headingTimer);
      clearTimeout(missionTimer);
      clearTimeout(valuesTimer);
      clearTimeout(teamTimer);
      clearTimeout(contactTimer);
    };
  }, []);

  return (
    <div className="container custom-cursor mx-auto pt-20" style={{ backgroundColor: 'white' }}>
      {/* Hero Section */}
      <section className="hero rounded-xl bg-cover bg-main h-56 text-white p-10 mt-10 text-center">
        <h1 className={`text-4xl md:text-7xl text-[#082522] transition-opacity duration-1000 font-bold ${HeadingVisible ? 'opacity-100' : 'opacity-0'}`}>
          About <span className={`text-orange-500 transition-opacity duration-1000 ${MissionVisible ? 'opacity-100' : 'opacity-0'}`}>Us</span>
        </h1>
        <p className={`mt-4 text-zinc-500 transition-opacity duration-1000 text-lg md:text-xl ${MissionVisible ? 'opacity-100' : 'opacity-0'}`}>
          Learn more about our mission, values, and the team behind our success.
        </p>
      </section>

      {/* Mission Section */}
      <section className={`mission my-16 transition-opacity duration-1000 ${MissionVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center">Our Mission</h2>
        <p className="mt-4 text-center">
          Our mission is to empower businesses through innovative marketing strategies that drive growth and success. We strive to create meaningful connections between brands and their audiences.
        </p>
      </section>

      {/* Values Section */}
      <section className={`values my-16 transition-opacity duration-1000 ${ValuesVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="value bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg md:text-xl font-bold">Integrity</h3>
            <p>We uphold the highest standards of integrity in all our actions.</p>
          </div>
          <div className="value bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg md:text-xl font-bold">Innovation</h3>
            <p>We embrace change and seek innovative solutions to challenges.</p>
          </div>
          <div className="value bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg md:text-xl font-bold">Collaboration</h3>
            <p>We work together with our clients to achieve their goals.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      

      {/* Contact Section */}
      
    </div>
  );
};

export default About;
