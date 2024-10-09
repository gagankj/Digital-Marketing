import React, { useState, useEffect } from 'react';

const Pricing = () => {
    const [HeadingVisible, SetHeadingVisible] = useState(false);
    const [StarterVisible, SetStarterVisible] = useState(false);
    const [PricingVisible, SetPricingVisible] = useState(false);

    useEffect(() => {
        const headingTimer = setTimeout(() => {
            SetHeadingVisible(true);
        }, 0);

        const starterTimer = setTimeout(() => {
            SetStarterVisible(true);
        }, 100);

        const pricingTimer = setTimeout(() => {
            SetPricingVisible(true);
        }, 200);

        return () => {
            clearTimeout(headingTimer);
            clearTimeout(pricingTimer);
            clearTimeout(starterTimer);
        };
    }, []);

    const [isAnnual, setIsAnnual] = useState(false);

    const togglePricing = () => {
        setIsAnnual(!isAnnual);
    };

    return (
        <div className="flex flex-col container mx-auto pt-20 items-center">
            <div className='rounded-xl bg-cover w-full bg-main h-56 p-10 mt-10 text-center'>
                <h1 className={`text-5xl md:text-7xl transition-opacity text-[#082522] duration-1000 font-bold mb-4 ${HeadingVisible ? 'opacity-100' : 'opacity-0'}`}>
                    Our <span className={`text-orange-500 transition-opacity duration-1000 ${StarterVisible ? 'opacity-100' : 'opacity-0'}`}>Plans</span>
                </h1>
                <h2 className={`text-zinc-500 transition-opacity duration-1000 text-base md:text-lg mb-8 ${HeadingVisible ? 'opacity-100' : 'opacity-0'}`}>
                    Find the perfect plan for your business!
                </h2>
            </div>
            <div className={`mb-4 flex border-2 mt-10 transition-opacity duration-1000 border-zinc-200 py-1 text-sm rounded-3xl px-1 space-x-2 ${HeadingVisible ? 'opacity-100' : 'opacity-0'}`}>
                <span
                    className={`cursor-pointer h-8 w-20 text-center py-1 px-3 rounded-3xl ${!isAnnual ? 'bg-orange-500 text-white' : 'bg-transparent'}`}
                    onClick={togglePricing}
                >
                    Monthly
                </span>
                <span
                    className={`cursor-pointer h-8 w-20 text-center pt-1 px-3 rounded-3xl ${isAnnual ? 'bg-orange-500 text-white' : 'bg-transparent'}`}
                    onClick={togglePricing}
                >
                    Annually
                </span>
            </div>
            <div className={`flex flex-wrap justify-center space-x-4 space-y-4 mb-24 transition-opacity duration-1000 ${PricingVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* Tier 1: Starter */}
                <div className="bg-white p-6 w-full sm:w-72 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Starter</h3>
                    <p className="text-zinc-500 mb-4">Great for small businesses starting out.</p>
                    <p className="text-2xl font-bold mb-4">${isAnnual ? 1990 : 199}</p>
                    <button className="bg-orange-500 text-white py-2 px-4 rounded-3xl hover:bg-orange-600 transition duration-200">Buy Now</button>
                    <ul className="mb-4 mt-10">
                        <li><span className='text-orange-500'>✔</span> Social Media Management</li>
                        <li><span className='text-orange-500'>✔</span> Monthly Reporting</li>
                        <li><span className='text-orange-500'>✔</span> Basic SEO Optimization</li>
                    </ul>
                </div>

                {/* Tier 2: Growth */}
                <div className="bg-white rounded-lg border-2 border-orange-500 shadow-lg p-6 w-full sm:w-72">
                    <h3 className="text-xl text-orange-500 font-semibold mb-2">Growth <span className='text-blue-500 text-sm ml-24'>Popular</span></h3>
                    <p className="text-zinc-500 mb-4">For businesses looking to expand their reach.</p>
                    <p className="text-2xl font-bold mb-4">${isAnnual ? 3990 : 399}</p>
                    <button className="bg-orange-500 text-white py-2 px-4 rounded-3xl hover:bg-orange-600 transition duration-200">Buy Now</button>
                    <ul className="mb-4 mt-10">
                        <li><span className='text-orange-500'>✔</span> Everything in Starter</li>
                        <li><span className='text-orange-500'>✔</span> PPC Advertising</li>
                        <li><span className='text-orange-500'>✔</span> Email Marketing Campaigns</li>
                        <li><span className='text-orange-500'>✔</span> Enhanced SEO Strategies</li>
                    </ul>
                </div>

                {/* Tier 3: Enterprise */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-72">
                    <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                    <p className="text-zinc-500 mb-4">Comprehensive solutions for large organizations.</p>
                    <p className="text-2xl font-bold mb-4">${isAnnual ? 9990 : 999}</p>
                    <button className="bg-orange-500 text-white py-2 px-4 rounded-3xl hover:bg-orange-600 transition duration-200">Buy Now</button>
                    <ul className="mb-4 mt-10">
                        <li><span className='text-orange-500'>✔</span> Everything in Growth</li>
                        <li><span className='text-orange-500'>✔</span> Custom Marketing Strategy</li>
                        <li><span className='text-orange-500'>✔</span> Advanced Analytics & Reporting</li>
                        <li><span className='text-orange-500'>✔</span> Dedicated Account Manager</li>
                        <li><span className='text-orange-500'>✔</span> 24/7 Support</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
