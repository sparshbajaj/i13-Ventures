import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/bg.json';

const LottieBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
      overflow: 'hidden'
    });

    return () => anim.destroy();
  }, []);

  return (
    
    <div
      className='-z-10'
      ref={containerRef}
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        
      }}
    >
      {/* Your content here */}
    </div>
    
  );
};

export default LottieBackground;
