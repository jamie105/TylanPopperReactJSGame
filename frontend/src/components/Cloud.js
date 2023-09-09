// components/Cloud.js

import '../css/Cloud.css';
import React, { useState, useEffect } from 'react';

const Cloud = ({ initialX, y, speed }) => {
  const [x, setX] = useState(initialX);

  useEffect(() => {
    const moveCloud = () => {
      // Update the cloud's position to create the moving effect
      setX((prevX) => prevX - speed);

      // Check if the cloud has moved off the screen
      if (x < -100) {
        // Reappear the cloud on the right
        setX(screen.availWidth);
      }
    };

    const cloudInterval = setInterval(moveCloud, 50);

    return () => {
      clearInterval(cloudInterval);
    };
  }, [x, speed]);

  return (
    <div
      className="cloud"
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: '100px',
        height: '50px',
        backgroundColor: 'white',
        borderRadius: '50px',
        opacity: '0.8',
      }}
    ></div>
  );
};

export default Cloud;
