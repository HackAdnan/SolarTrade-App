// // HeroSection.jsx
// import React from 'react';

// const HeroSection = () => {
//   return (
//     <section className="hero bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white py-10 h-[660px] ">
//       {/* Or add a background image */}
//       {/* <section className="hero bg-cover bg-center text-white py-20" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}> */}
//       <div className="container mx-auto text-center pt-40">
//         <h1 className="text-5xl  mb-4 font-poppins font-bold">
//           Turn Your Excess Solar into Earnings and Savings
//         </h1>
//         <p className="text-lg mb-8 font-serif">
//           The Next-Gen Solar Trading Platform empowers the future of clean energy by buying and selling solar power directly on SolarTrade.
//         </p>
//         <div className="space-x-4">
//           <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600">
//             Start Selling Solar
//           </button>
//           <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
//             Start Buying Solar
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;





import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const toRotate = [
    "Empowering Clean Energy Choices.",
    "Transform Solar Power into Earnings.",
    "Your Solar, Your Savings."
  ];
  const typingSpeed = 100; 
  const displayPeriod = 1500; 

  useEffect(() => {
    if (isTyping) {
      const timeout = setTimeout(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (updatedText === fullText) {
          setIsTyping(false);
          setTimeout(() => {
            setText('');
            setLoopNum(loopNum + 1);
            setIsTyping(true);
          }, displayPeriod);
        }
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [text, isTyping, loopNum]);

  return (
    <section className="hero bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white py-10 h-[660px]">
      <div className="container mx-auto text-center pt-40">
        <h1 className="text-5xl mb-4 font-poppins font-bold">
          <div>Convert Solar Power into Real Value.</div>
          <span className="wrap text-blue-700">{text}</span>
        </h1>
        <p className="text-lg mb-8 font-poppins font-medium">
          The Next-Gen Solar Trading Platform empowers the future of clean energy by buying and selling solar power directly on SolarTrade.
        </p>
        
        <div className="space-x-4">
        <Link to='/sign-in'>
          <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600">
            Start Selling Solar
          </button>
        </Link>
        <Link to='/sign-in'>
          <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
            Start Buying Solar
          </button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;