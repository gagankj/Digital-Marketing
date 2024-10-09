import React, { useEffect, useState } from 'react';
import logo2 from "../assets/logo2.png";
import axios from 'axios';

const Home = () => {

  const [name, setName]=useState("");
  const [hosp, setHosp]=useState('');
  const [contact, setContact]=useState('');
  const [address, setAddress]=useState('');
  const [time, setTime]=useState('');

  // retrived data state
  

  // submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(name, age, designation, salary);

    // our object to pass
    const data = {
      Name:name,
      Hospital:hosp,
      Contact:contact,
      Address:address,
      Time:time
    }
    axios.post('https://api.sheetbest.com/sheets/c86e8921-1661-4316-9832-ea85438c7d87',data).then(response=>{
      
      setName('');
      setHosp('');
      setContact('');
      setAddress('');
      setTime('');
    })
  }

  // getting data function
  

  // triggering function


  const [HeadingVisible, SetHeadingVisible] = useState(false);
  const [TitleVisible, SetTitleVisible] = useState(false);
  const [ButtonVisible, SetButtonVisible] = useState(false);

  useEffect(() => {
    const headingTimer = setTimeout(() => {
      SetHeadingVisible(true);
    }, 0);

    const titleTimer = setTimeout(() => {
      SetTitleVisible(true);
    }, 200);

    const buttonTimer = setTimeout(() => {
      SetButtonVisible(true);
    }, 400);

    return () => {
      clearTimeout(headingTimer);
      clearTimeout(titleTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const scrollNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      smoothScrollTo(nextSection.offsetTop, 1000);
    }
  };

  const smoothScrollTo = (targetY, duration) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easing = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * easing);
      if (progress < 1) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const easeInOutCubic = (t) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const words = ["Today", "Online", "Now", "Growth"];
  const [index, setIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDisplayedWord((prev) => prev + words[index].charAt(prev.length));
      if (displayedWord.length === words[index].length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
          setDisplayedWord("");
        }, 1000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [index, displayedWord]);

  return (
    <div className="custom-cursor h-full pt-10" style={{ backgroundColor: 'white' }}>
      {/* Hero Section */}
      <div className='flex h-screen justify-center'>
        <section className={`hero flex flex-col md:flex-row justify-between w-full pl-5 md:pl-32 bg-main bg-cover bg-end text-black transition-opacity duration-1000 ${HeadingVisible ? 'opacity-100' : 'opacity-0'} mt-16 pb-20 md:pb-44 h-3/4`}>
          <div className="text-center md:text-left">
            <h1 className={`text-5xl md:text-9xl pt-28 text-[#082522] transition-opacity duration-1000 font-bold ${TitleVisible ? 'opacity-100' : 'opacity-0'}`}>
              Boost your
            </h1>
            <h1 className={`text-5xl md:text-9xl text-[#082522] transition-opacity duration-1000 font-bold ${TitleVisible ? 'opacity-100' : 'opacity-0'}`}>
              Business <span className="italic text-orange-500">{displayedWord}</span>
            </h1>
            <p className={`mt-4 transition-opacity duration-1000 text-zinc-700 ${TitleVisible ? 'opacity-100' : 'opacity-0'}`}>
              Elevate your brand with our expert marketing solutions.
            </p>
            <div className="flex flex-col md:flex-row mt-6">
              <button className={`bg-orange-500 hover:bg-black transition-opacity duration-1000 hover:text-orange-500 text-white px-6 py-3 rounded-3xl shadow ${ButtonVisible ? 'opacity-100' : 'opacity-0'} mb-4 md:mb-0 md:mr-4`}>
                Get Started
              </button>
              <button className={`hover:bg-black transition-opacity duration-1000 hover:text-orange-500 bg-orange-500 text-white px-6 py-3 rounded-3xl shadow ${ButtonVisible ? 'opacity-100' : 'opacity-0'}`}>
                Contact
              </button>
            </div>
          </div>
          <img className='hidden md:block w-64 md:w-72 mt-6 md:mt-0' src={logo2} alt="Logo" />
        </section>
      </div>

      {/* About Us */}
      <section id='about' className="about-us">
        <h2 className="text-4xl md:text-6xl font-bold text-center">About Us</h2>
        <p className="mt-4 text-center text-zinc-700">We are a dedicated marketing agency focused on delivering results through innovative strategies and creative solutions.</p>
      </section>

      {/* Services */}
      <section className="services my-16">
        <h2 className="text-4xl md:text-6xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="service bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">SEO</h3>
            <p className='text-zinc-700'>Optimize your website to rank higher in search engine results.</p>
          </div>
          <div className="service bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">Content Marketing</h3>
            <p className='text-zinc-700'>Create valuable content to attract and engage your audience.</p>
          </div>
          <div className="service bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">Social Media Management</h3>
            <p className='text-zinc-700'>Manage your online presence across various platforms.</p>
          </div>
        </div>
      </section>

      

      {/* Portfolio */}
      <section className="portfolio my-16">
        <h2 className="text-4xl md:text-6xl font-bold text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="project bg-white p-6 rounded-lg shadow">
            <img src="https://via.placeholder.com/300" alt="Project 1" className="mb-4 w-full h-auto"/>
            <h3 className="text-xl font-bold">Project 1</h3>
          </div>
          <div className="project bg-white p-6 rounded-lg shadow">
            <img src="https://via.placeholder.com/300" alt="Project 2" className="mb-4 w-full h-auto"/>
            <h3 className="text-xl font-bold">Project 2</h3>
          </div>
          <div className="project bg-white p-6 rounded-lg shadow">
            <img src="https://via.placeholder.com/300" alt="Project 3" className="mb-4 w-full h-auto"/>
            <h3 className="text-xl font-bold">Project 3</h3>
          </div>
          <div className="project bg-white p-6 rounded-lg shadow">
            <img src="https://via.placeholder.com/300" alt="Project 4" className="mb-4 w-full h-auto"/>
            <h3 className="text-xl font-bold">Project 4</h3>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials my-16">
        <h2 className="text-4xl md:text-6xl font-bold text-center">Testimonials</h2>
        <div className="mt-8 flex overflow-x-auto">
          <div className="testimonial w-64 bg-white p-6 rounded-lg shadow mx-2">
            <img src="https://via.placeholder.com/100" alt="Client 1" className="rounded-full mb-4"/>
            <p>"Amazing service! Highly recommend!"</p>
            <h4 className="font-bold mt-2">- Client 1</h4>
          </div>
          <div className="testimonial w-64 bg-white p-6 rounded-lg shadow mx-2">
            <img src="https://via.placeholder.com/100" alt="Client 2" className="rounded-full mb-4"/>
            <p>"They helped us grow our brand exponentially."</p>
            <h4 className="font-bold mt-2">- Client 2</h4>
          </div>
          <div className="testimonial w-64 bg-white p-6 rounded-lg shadow mx-2">
            <img src="https://via.placeholder.com/100" alt="Client 3" className="rounded-full mb-4"/>
            <p>"Fantastic experience working with this team!"</p>
            <h4 className="font-bold mt-2">- Client 3</h4>
          </div>
        </div>
      </section>

      

      {/* Contact Info */}
      <div className="container mx-auto mt-10 p-6 bg-zinc-300 rounded-lg shadow-lg max-w-lg">
  <h1 className="text-4xl font-bold text-center mb-6">Book a <span className='text-orange-500 text-5xl'>FREE</span> Consultation Now!! </h1>
  <form autoComplete="off" className="space-y-4" onSubmit={handleSubmit}>
    
    <div>
      <label className="block text-md font-semibold text-zinc-800">Doctor's Name</label>
      <input
        type="text"
        className="mt-1 block w-full py-2 px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
        required
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </div>

    <div>
      <label className="block text-md font-semibold text-zinc-800">Venture Name</label>
      <input
        type="text"
        className="mt-1 block w-full py-2 px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
        required
        placeholder="Enter the name of your Health Care Venture"
        onChange={(e) => setHosp(e.target.value)}
        value={hosp}
      />
    </div>

    <div>
      <label className="block text-md font-semibold text-zinc-800">Contact</label>
      <input
        type="text"
        className="mt-1 block w-full py-2 px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
        required
        placeholder="Enter your Contact"
        onChange={(e) => setContact(e.target.value)}
        value={contact}
      />
    </div>

    <div>
      <label className="block text-md font-semibold text-zinc-800">Address</label>
      <input
        type="text"
        className="mt-1 block w-full py-2 px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
        required
        placeholder="Enter the Address"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />
    </div>

    <div>
      <label className="block text-md font-semibold text-zinc-800">Time</label>
      <input
        type="text"
        className="mt-1 block w-full py-2 px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
        required
        placeholder="When should we call you?"
        onChange={(e) => setTime(e.target.value)}
        value={time}
      />
    </div>

    <div className="text-center">
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Submit</button>
    </div>
  </form>
</div>


      {/* Call-to-Action */}
      <section className="call-to-action bg-[#16423C] text-white py-10 mb-32 mt-16 text-center">
        <h2 className="text-3xl font-bold">Ready to elevate your business?</h2>
        <button className="mt-4 bg-white text-[#16423C] px-6 py-3 rounded-3xl shadow">Schedule a Consultation</button>
      </section>
    </div>
  );
};

export default Home;
