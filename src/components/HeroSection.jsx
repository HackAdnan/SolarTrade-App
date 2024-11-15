// HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white py-10 h-[660px] ">
      {/* Or add a background image */}
      {/* <section className="hero bg-cover bg-center text-white py-20" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}> */}
      <div className="container mx-auto text-center pt-40">
        <h1 className="text-5xl  mb-4 font-poppins font-bold">
          Turn Your Excess Solar into Earnings and Savings
        </h1>
        <p className="text-lg mb-8 font-serif">
          The Next-Gen Solar Trading Platform empowers the future of clean energy by buying and selling solar power directly on SolarTrade.
        </p>
        <div className="space-x-4">
          <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600">
            Start Selling Solar
          </button>
          <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
            Start Buying Solar
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
