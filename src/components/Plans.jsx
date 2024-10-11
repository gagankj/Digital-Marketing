import React from 'react';
import { NavLink } from 'react-router-dom';

// Sample card data
const cardData = [
  {
    title: "Hospitals",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, omnis! Tem",
    imageUrl: "https://img.freepik.com/premium-photo/building-with-red-cross-it_1279821-15909.jpg?ga=GA1.1.1338253950.1728447138&semt=ais_hybrid",
    link: "/hospitals"
  },
  {
    title: "Clinics",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, omnis! Tem",
    imageUrl: "https://img.freepik.com/free-photo/clinic-registration-counter-waiting-room-lobby-computer-make-checkup-appointments-with-healthcare-report-papers-empty-hospital-reception-desk-with-medical-forms-insurance-support_482257-50666.jpg?ga=GA1.1.1338253950.1728447138&semt=ais_hybrid",
    link: "/clinics"
  },
  {
    title: "Dieticians & Nutritionist",
    description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, omnis! Tem",
    imageUrl: "https://img.freepik.com/free-photo/medium-shot-women-talking-about-fruits_23-2148302131.jpg?ga=GA1.1.1338253950.1728447138&semt=ais_hybrid",
    link: "/dieticians"
  },
  {
    title: "Medicines",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, omnis! Tem",
    imageUrl: "https://img.freepik.com/premium-photo/close-up-open-prescription-bottle-with-various-pills-spilling-out_908344-4395.jpg?ga=GA1.1.1338253950.1728447138&semt=ais_hybrid",
    link: "/medicines"
  },
  {
    title: "Healthy Food & Supplements",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    imageUrl: "https://img.freepik.com/free-photo/top-view-delicious-pie-slices-with-candies-fresh-tangerines-dark-background-fruit-cake-sweet-biscuit-pie_140725-96654.jpg?ga=GA1.1.1338253950.1728447138&semt=ais_hybrid",
    link: "/healthy-food"
  },
  {
    title: "Medicated Products & Equipment",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit",
    imageUrl: "https://img.freepik.com/free-photo/plant-cotton-swabs-near-cosmetics-bottles_23-2147787956.jpg?ga=GA1.1.1338253950.1728447138&semt=ais_hybrid",
    link: "/sanitary-products"
  },
  {
    title: "Exercises & Yoga",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, omnis! Tem",
    imageUrl: "https://img.freepik.com/premium-photo/young-women-men-yoga-class-stretching-balance-exercises-hero-pose-relaxation-healthy-lifestyle-fitness-club-copy-spae_116547-3744.jpg?ga=GA1.1.1338253950.1728447138&semt=ais_hybrid",
    link: "/exercises"
  },
];

const Card = ({ title, description, imageUrl, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition transform hover:scale-105 h-96 mb-12 w-80">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-zinc-500 mb-4">{description}</p>
        <NavLink to={link} className="text-orange-500 text-md font-bold py-1 rounded-md">
          Read more
        </NavLink>
      </div>
    </div>
  );
};

const Plans = () => {
  return (
    <div className="bg-plans bg-cover bg-center min-h-screen text-start pb-44 pt-32 rounded-lg shadow-md transition duration-300 ease-in-out">
      <h1 className="text-5xl font-bold text-center mb-12">CHOOSE YOUR <span className='text-orange-500'>SERVICE</span></h1>
      <ul className="grid grid-cols-4 justify-items-center gap-10">
        {cardData.slice(0, 4).map((card, index) => (
          <li key={index}>
            <Card {...card} />
          </li>
        ))}
      </ul>
      <ul className="grid grid-cols-3 justify-items-center  mt-10">
        {cardData.slice(4).map((card, index) => (
          <li key={index + 4}>
            <Card {...card} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Plans;
