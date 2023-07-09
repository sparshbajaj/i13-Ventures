import React, { useEffect } from 'react';
import Button from '../components/Button';
import avatar from '../assets/avatar.png';
import lottie from 'lottie-web';
import animationData from '../assets/bg2.json';
import { useNavigate } from 'react-router-dom';



const HierarchyChart = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const container = document.getElementById('lottie-container');
    const anim = lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });
    return () => anim.destroy();
  }, []);

  return (
    <div className="relative">
      <div id="lottie-container" className="fixed top-0 left-0 w-full h-auto"></div>
      <button onClick={handleGoBack} className='m-12' style={{zIndex:'4', top:'0', right:'0', position:'fixed'}}>Go Back</button>
      <div className="fixed top-0 left-0 w-screen h-screen backdrop-blur-lg">
        <div className="flex items-center space-x-4 mt-9 ml-9">
          <img src={avatar} alt="Avatar" className="w-24 h-24" />
          <div>
            <h1 className="text-lg font-bold">Let's talk future</h1>
          </div>
        </div>

        <div className="flex items-center justify-center" style={{ height: '70vh' }}>
          <div className="m-4 relative" style={{ width: '40%' }}>
            <div className="mb-12 flex justify-center">
              <Button>Your competitive advantage</Button>
            </div>
            <div className="flex justify-between mb-12">
              <Button>Future 1</Button>
              <Button>Future 2</Button>
              <Button>Future 3</Button>
            </div>
            <div className="flex justify-between mb-12">
              <Button>BMC</Button>
              <div></div>
              <Button>BMC</Button>
              <div></div>
              <Button>BMC</Button>
            </div>
            <div className="flex justify-center">
              <Button>Ultimate Goal</Button>
            </div>
            {/* Dotted lines */}
          <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: -1 }}>
            {/* Top to middle */}
            <line x1="50%" y1="12.5%" x2="10%" y2="37.5%" stroke="#000" strokeDasharray="8" />
            <line x1="50%" y1="12.5%" x2="50%" y2="37.5%" stroke="#000" strokeDasharray="8" />
            <line x1="50%" y1="12.5%" x2="92%" y2="37.5%" stroke="#000" strokeDasharray="8" />

            {/* Middle to bottom */}
            <line x1="7%" y1="37.5%" x2="7%" y2="62.5%" stroke="#000" strokeDasharray="8" />
            <line x1="50%" y1="37.5%" x2="50%" y2="62.5%" stroke="#000" strokeDasharray="8" />
            <line x1="94%" y1="37.5%" x2="94%" y2="62.5%" stroke="#000" strokeDasharray="8" />

            {/* Bottom to ultimate goal */}
            <line x1="10%" y1="62.5%" x2="50%" y2="87.5%" stroke="#000" strokeDasharray="8" />
            <line x1="50%" y1="62.5%" x2="50%" y2="87.5%" stroke="#000" strokeDasharray="8" />
            <line x1="93%" y1="62.5%" x2="50%" y2="87.5%" stroke="#000" strokeDasharray="8" />
          </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HierarchyChart;




