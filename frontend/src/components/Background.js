import React, { useState, useEffect } from 'react';
import Cloud from './Cloud';
import './Background.css'; // Import your CSS file for styling

const Background = ({score, time, penalty}) => {
  const [clouds, setClouds] = useState([]);

  // Generate initial cloud positions
  useEffect(() => {
    const initialClouds = Array.from({ length: 9 }, (_, i) => ({
      x: Math.random() * 1920,
      y: 100 + i * 50,
    }));
    setClouds(initialClouds);
  }, []);

  return (
    <div className="background-container">
    <svg className="background" viewBox="0 0 1920 1080">
      {/* Grassy background */}
      <rect x="0" y="540" width="1920" height="540" fill="green" />

      {/* Blue sky */}
      <rect x="0" y="0" width="1920" height="540" fill="lightblue" />

      {/* Render clouds */}
      {clouds.map((cloud, index) => (
        <Cloud key={index} x={cloud.x} y={cloud.y} />
      ))}
    </svg>
    {/* Add the score and timer elements */}
    <div className="score-timer">
        <div className="score-text">{score}</div>
        <div className="time-text">{time + (penalty*5)} seconds</div>
      </div>
    </div>
  );
};

export default Background;
