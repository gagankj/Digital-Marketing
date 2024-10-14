import React, { useEffect, useState } from 'react';
import logo2 from "../assets/logo2.png";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const Home = () => {

  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
    setError(''); // Clear error on input change
  };

  const handleBlur = () => {
    if (phoneNumber.length < 10) {
      setError('Contact number must be exactly 10 digits long.');
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      setError('Please enter a valid 10-digit mobile number (digits only).');
    }
  };

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
            <div className=" md:flex-row mt-6">
              <NavLink to="plans" className={`bg-orange-500 hover:bg-black transition-opacity duration-1000 hover:text-orange-500 text-white px-6 py-3 rounded-3xl shadow ${ButtonVisible ? 'opacity-100' : 'opacity-0'} mb-4 md:mb-0 md:mr-4`}>
                Get Started
              </NavLink>
              
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
      <section className="services px-12 my-16">
        <h2 className="text-4xl md:text-6xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="service bg-zinc-200 p-4 rounded-lg shadow">
            <img className='rounded-xl' src="https://img.freepik.com/premium-photo/notebook-with-tools-notes-about-seo_132358-3279.jpg?ga=GA1.1.1338253950.1728447138&semt=ais_hybrid" alt="" />
            <h3 className="text-2xl mt-12 font-bold">SEO</h3>
            <p className='text-zinc-700'>Optimize your website to rank higher in search engine results.</p>
          </div>
          <div className="service bg-zinc-200 p-4 rounded-lg shadow">
            <img className='rounded-xl' src="https://img.freepik.com/free-photo/media-marketing-internet-digital-global_53876-138500.jpg?ga=GA1.1.1338253950.1728447138&semt=ais_hybrid" alt="" />
            <h3 className="text-2xl mt-12 font-bold">Content Marketing</h3>
            <p className='text-zinc-700'>Create valuable content to attract and engage your audience.</p>
          </div>
          <div className="service bg-zinc-200 p-4 rounded-lg shadow">
            <img className='rounded-xl' src="https://img.freepik.com/free-photo/hands-holding-smartphone-social-media-concept_23-2150208239.jpg?ga=GA1.1.1338253950.1728447138&semt=ais_hybrid" alt="" />
            <h3 className="text-2xl mt-12 font-bold">Social Media Management</h3>
            <p className='text-zinc-700'>Manage your online presence across various platforms.</p>
          </div>
        </div>
      </section>

      

      {/* Portfolio */}
      <section className="portfolio px-12 my-16">
        <h2 className="text-4xl md:text-6xl font-bold text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="project bg-gray-300 p-6 rounded-xl shadow">
            <img  src="https://img.freepik.com/free-vector/gradient-medical-landing-page_52683-72212.jpg?ga=GA1.1.543076348.1727783892&semt=ais_hybrid-rr-similar" alt="Project 1" className="mb-4 rounded-xl w-full h-auto"/>
            <h3 className="text-xl font-bold">Project 1</h3>
          </div>
          <div className="project bg-gray-300 p-6 rounded-lg shadow">
            <img  src="https://img.freepik.com/free-vector/gradient-medical-landing-page_23-2149055585.jpg?ga=GA1.1.543076348.1727783892&semt=ais_hybrid-rr-similar" alt="Project 2" className="mb-4 rounded-xl w-full h-auto"/>
            <h3 className="text-xl font-bold">Project 2</h3>
          </div>
          <div className="project bg-gray-300 p-6 rounded-lg shadow">
            <img  src="https://img.freepik.com/free-vector/hand-drawn-hospital-template_23-2150400471.jpg?ga=GA1.1.543076348.1727783892&semt=ais_hybrid-rr-similar" alt="Project 3" className="mb-4 rounded-xl w-full h-auto"/>
            <h3 className="text-xl font-bold">Project 3</h3>
          </div>
          <div className="project bg-gray-300 p-6 rounded-lg shadow">
            <img  src="https://img.freepik.com/free-vector/gradient-ophthalmologist-landing-page_23-2149346821.jpg?ga=GA1.1.543076348.1727783892&semt=ais_hybrid-rr-similar" alt="Project 4" className="mb-4 rounded-xl w-full h-auto"/>
            <h3 className="text-xl font-bold">Project 4</h3>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials text-center my-16">
        <h2 className="text-4xl md:text-6xl font-bold text-center">Testimonials</h2>
        <div className="mt-8 flex justify-center overflow-x-auto">
          <div className="testimonial flex flex-col items-center w-64 bg-orange-100 p-6 rounded-xl shadow mx-2">
            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.1338253950.1728447138&semt=ais_hybrid" alt="Client 1" className="rounded-full h-12 mb-4"/>
            <p>"Amazing service! Highly recommend!"</p>
            <h4 className="font-bold mt-2">- Client 1</h4>
          </div>
          <div className="testimonial flex flex-col items-center w-64 bg-orange-100 p-6 rounded-lg shadow mx-2">
            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.1338253950.1728447138&semt=ais_hybrid" alt="Client 2" className="rounded-full h-12 mb-4"/>
            <p>"They helped us grow our brand exponentially."</p>
            <h4 className="font-bold mt-2">- Client 2</h4>
          </div>
          <div className="testimonial flex flex-col items-center w-64 bg-orange-100 p-6 rounded-lg shadow mx-2">
            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.1338253950.1728447138&semt=ais_hybrid" alt="Client 3" className="rounded-full h-12 mb-4"/>
            <p>"Fantastic experience working with this team!"</p>
            <h4 className="font-bold mt-2">- Client 3</h4>
          </div>
        </div>
      </section>

      

      {/* Contact Info */}
      <div className="container mx-auto mt-10 p-6 mb-20 bg-zinc-200 rounded-lg shadow-lg max-w-lg">
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
    <a href="" rel='no follow'></a>

    <div>
      <label className="block text-md font-semibold text-zinc-800">Phone Number</label>
      <input
        type="tel"
        className={`mt-1 block w-full py-2 px-2 border rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        required
        placeholder="Enter your Phone Number"
        onChange={handleChange}
        onBlur={handleBlur}
        value={phoneNumber}
      />
      {error && <div className="mt-1 text-sm text-red-500">{error}</div>}
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
        type="time"
        className="mt-1 block w-full py-2 px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
        required
        placeholder="When should we call you?"
        onChange={(e) => setTime(e.target.value)}
        value={time}
      />
    </div>

    <div className="text-center">
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Schedule</button>
    </div>
  </form>
</div>


      
    </div>
  );
};

export default Home;
