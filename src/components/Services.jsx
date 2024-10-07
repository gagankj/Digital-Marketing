import {React,useState,useEffect} from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed.
import seo from "../assets/images/seo.png"
import social from "../assets/images/social.png"
import webd from "../assets/images/webd.png"
import ppc from "../assets/images/ppc.png"
import whatsapp from "../assets/images/whatsapp.png"
const Services = () => {

  const [HeadingVisible,SetHeadingVisible]=useState(false)
  const [StarterVisible,SetStarterVisible]=useState(false)
    
    const [Services1Visible,SetServices1Visible]=useState(false)
    const [Services2Visible,SetServices2Visible]=useState(false)
    const [Services3Visible,SetServices3Visible]=useState(false)
    const [Services4Visible,SetServices4Visible]=useState(false)
    const [Services5Visible,SetServices5Visible]=useState(false)

    useEffect(()=>{

        
        const headingTimer=setTimeout(()=>{
            SetHeadingVisible(true)
        },0)

        const starterTimer=setTimeout(()=>{
            SetStarterVisible(true)
        },100)

        const services1Timer=setTimeout(()=>{
            SetServices1Visible(true)
        },200)
        const services2Timer=setTimeout(()=>{
            SetServices2Visible(true)
        },400)
        const services3Timer=setTimeout(()=>{
            SetServices3Visible(true)
        },600)
        const services4Timer=setTimeout(()=>{
            SetServices4Visible(true)
        },800)
        const services5Timer=setTimeout(()=>{
            SetServices5Visible(true)
        },1000)
       



        return()=>{
            clearTimeout(headingTimer)
            clearTimeout(services1Timer)
            clearTimeout(services2Timer)
            clearTimeout(services3Timer)
            clearTimeout(services4Timer)
            clearTimeout(services5Timer)
            clearTimeout(starterTimer)
        }
            
        
    },[])


  return (
    <div className="container custom-cursor pt-20 mx-auto " style={{ backgroundColor: 'white' }}>
      {/* Hero Section */}
      <section className="hero rounded-xl bg-cover  bg-main h-56 text-white p-10 mt-10 text-center">
        <h1 className={`text-7xl transition-opacity duration-1000 text-[#082522]  font-bold ${HeadingVisible ? 'opacity-100' : 'opacity-0'}`}>Our <span className={`text-orange-500 transition-opacity duration-1000 ${StarterVisible ? 'opacity-100' : 'opacity-0'}`}>Services</span> </h1>
        <p className={`mt-4 text-zinc-500 text-xl transition-opacity duration-1000 ${HeadingVisible ? 'opacity-100' : 'opacity-0'}`}>Explore how we can help your business grow.</p>
      </section>

      {/* Services Section */}
      <section className="services pl-64 my-16">

        {/* Service 1 */}
        <div className={`service flex gap-10 transition-opacity duration-1000 items-center my-8 ${Services1Visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex-1 p-6  shadow">
            <h2 className="text-2xl font-bold">🔍 Search Engine Optimization (SEO)</h2>
            <p className="mt-4   text-zinc-500">Enhance your website’s visibility and ranking in search engine results to drive organic traffic.</p>
            <Link to="/seo" className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded-3xl hover:bg-black hover:text-orange-500">
              Explore More
            </Link>
          </div>
          <div className="flex-1">
            <img src={seo} alt="SEO" className="h-64 w-64" />
          </div>
        </div>

        
        

        {/* Service 2 */}
        <div className={`service transition-opacity duration-1000 flex items-center  my-8 ${Services2Visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex-1 p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold">📱 Social Media Management</h2>
            <p className="mt-4  text-zinc-500">Manage your social media presence and build relationships with your audience across platforms.</p>
            <Link to="/social" className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded-3xl hover:bg-black hover:text-orange-500">
              Explore More
            </Link>
          </div>
          <div className="flex-1 ml-16">
            <img src={social} alt="Social Media Management" className="h-56 w-56" />
          </div>
        </div>


        {/* Service 3 */}
        <div className={`service transition-opacity duration-1000 flex items-center flex-row-reverse  my-8 ${Services3Visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex-1">
            <img src={webd} alt="Web development" className="w-72 h-72 rounded-lg" />
          </div>
          <div className="flex-1 p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold">📧 Website Development</h2>
            <p className="mt-4 text-zinc-500">Web development</p>
            <Link to="/web" className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded-3xl hover:bg-black hover:text-orange-500">
              Explore More
            </Link>
          </div>
        </div>

        {/* Service 4 */}
        <div className={`service transition-opacity duration-1000 flex items-center  my-8 ${Services4Visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex-1 p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold">💰 Pay-Per-Click Advertising (PPC)</h2>
            <p className="mt-4 text-zinc-500">Run targeted ads to drive traffic and increase conversions for your business.</p>
            <Link to="/ppc" className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded-3xl hover:bg-black hover:text-orange-500">
              Explore More
            </Link>
          </div>
          <div className="flex-1 ml-10">
            <img src={ppc} alt="PPC" className="h-52" />
          </div>
        </div>

        {/* Service 5 */}
        <div className={`service transition-opacity duration-1000 flex items-center  my-8 ${Services5Visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex-1 p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold">Whatsapp Marketing</h2>
            <p className="mt-4 text-zinc-500">Run targeted ads to drive traffic and increase conversions for your business.</p>
            <Link to="/whatsapp" className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded-3xl hover:bg-black hover:text-orange-500">
              Explore More
            </Link>
          </div>
          <div className="flex-1 ml-24">
            <img src={whatsapp} alt="PPC" className="h-52" />
          </div>
        </div>

      </section>
    </div>
  );
};

export default Services;
