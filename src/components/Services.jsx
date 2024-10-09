import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed.
import seo from "../assets/images/seo.png";
import social from "../assets/images/social.png";
import webd from "../assets/images/webd.png";
import ppc from "../assets/images/ppc.png";
import whatsapp from "../assets/images/whatsapp.png";

const Services = () => {
  const [HeadingVisible, SetHeadingVisible] = useState(false);
  const [StarterVisible, SetStarterVisible] = useState(false);
  const [ServicesVisible, SetServicesVisible] = useState([false, false, false, false, false]);

  useEffect(() => {
    SetHeadingVisible(true);
    SetStarterVisible(true);
    
    ServicesVisible.forEach((_, index) => {
      setTimeout(() => {
        SetServicesVisible(prev => {
          const newServicesVisible = [...prev];
          newServicesVisible[index] = true;
          return newServicesVisible;
        });
      }, (index + 1) * 200);
    });
    
  }, []);

  return (
    <div className="container custom-cursor pt-20 mx-auto" style={{ backgroundColor: 'white' }}>
      {/* Hero Section */}
      <section className="hero rounded-xl bg-cover bg-main h-56 text-white p-10 mt-10 text-center">
        <h1 className={`text-7xl transition-opacity duration-1000 text-[#082522] font-bold ${HeadingVisible ? 'opacity-100' : 'opacity-0'}`}>
          Our <span className={`text-orange-500 transition-opacity duration-1000 ${StarterVisible ? 'opacity-100' : 'opacity-0'}`}>Services</span>
        </h1>
        <p className={`mt-4 text-zinc-500 text-xl transition-opacity duration-1000 ${HeadingVisible ? 'opacity-100' : 'opacity-0'}`}>
          Explore how we can help your business grow.
        </p>
      </section>

      {/* Services Section */}
      <section className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
        
        {[
          { image: seo, title: "🔍 Search Engine Optimization (SEO)", description: "Enhance your website’s visibility and ranking in search engine results to drive organic traffic.", link: "/seo" },
          { image: social, title: "📱 Social Media Management", description: "Manage your social media presence and build relationships with your audience across platforms.", link: "/social" },
          { image: webd, title: "📧 Website Development", description: "Web development services to create a responsive and engaging online presence.", link: "/web" },
          { image: ppc, title: "💰 Pay-Per-Click Advertising (PPC)", description: "Run targeted ads to drive traffic and increase conversions for your business.", link: "/ppc" },
          { image: whatsapp, title: "📱 Whatsapp Marketing", description: "Run targeted marketing campaigns through Whatsapp to engage with customers directly.", link: "/whatsapp" },
        ].map((service, index) => (
          <div key={index} className={`service flex flex-col bg-white rounded-lg shadow transition-opacity duration-1000 p-6 ${ServicesVisible[index] ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex-1 mb-4">
              <img src={service.image} alt={service.title} className="h-64 w-ful bg-cover  object-cover rounded-md" />
            </div>
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <p className="mt-4 text-zinc-500">{service.description}</p>
            <Link to={service.link} className="mt-4 inline-block text-center bg-orange-500 text-white py-2 px-4 rounded-3xl hover:bg-black hover:text-orange-500">
              Explore More
            </Link>
          </div>
        ))}

      </section>
    </div>
  );
};

export default Services;
