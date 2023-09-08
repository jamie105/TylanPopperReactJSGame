// Bush.js
import React from 'react';
//import './Bush.css'; // Import your CSS file for styling


const Bush = ({ bushes, moleIndex, moleVisible, molePosition, handleMoleClick, handleBushClick }) => {
    const circleSize = 50;
    const bottomCircleY = 40;
    const topCircleY = 25;
    const bottomCircleSpacing = 20;
    const topCircleSpacing = 25;

    const renderCircles = () => {
        const circleStyles = [
          {
            left: '0',
            top: `${bottomCircleY}px`,
          },
          {
            left: `${bottomCircleSpacing}px`,
            top: `${bottomCircleY}px`,
          },
          {
            left: `${2 * bottomCircleSpacing}px`,
            top: `${bottomCircleY}px`,
          },
          {
            left: `10px`,
            top: `${topCircleY}px`,
          },
          {
            left: `${5 + topCircleSpacing}px`,
            top: `${topCircleY}px`,
          },
        ];
      
        return (
          <div className="circle-cluster">
            {circleStyles.map((style, index) => (
              <div
                key={index}
                className="circle"
                style={{
                  width: `${circleSize}px`,
                  height: `${circleSize}px`,
                  borderRadius: '50%',
                  backgroundColor: 'darkgreen', // Adjust the color as needed
                  position: 'absolute',
                  transition: 'transform 0.2s ease-in',
                  ...style,
                }}
              ></div>
            ))}
          </div>
        );
      };      

  return (
    <div className="bush-container">
      {bushes.map((bush, index) => (
        <div
        key={index}
        className={`bush${moleIndex === index ? 'with-mole' : ''}${index.toString()}`}
        style={{
          position: 'absolute',
          left: `${bush.x}px`,
          top: `${bush.y}px`,
          zIndex: 2, // Set a higher zIndex for the bush class
        }}
        onClick={() => (moleVisible ? handleMoleClick(index) : handleBushClick(index))}
      >
          {renderCircles()}
          {moleVisible && moleIndex === index && (
            <div
              className="mole"
              style={{
                backgroundColor: 'brown',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                position: 'absolute',
                top: `${molePosition.y - bush.y + 10}px`,
                left: `${molePosition.x - bush.x + 30}px`,
                zIndex: 1, // Set a lower zIndex for the mole class
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );  
};

export default Bush;

