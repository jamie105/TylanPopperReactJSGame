// DestroyBushMimic.js
import React, { useEffect } from 'react';

const DestroyBushMimic = ({ x, y, uniqueKey }) => {
  useEffect(() => {
    console.log(`Destroyed bush at X: ${x}, Y: ${y}, Key: ${uniqueKey}`);
  }, [x, y, uniqueKey]);

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
            {circleStyles.map((style) => (
              <div
                className="fakecircle"
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
    <div className="fakebush-container">
        <div
        className={`fakebush${uniqueKey}`}
        style={{
          position: 'absolute',
          left: `${x}px`,
          top: `${y}px`,
        }}
      >
          {renderCircles()}
        </div>
    </div>
  );  
};

export default DestroyBushMimic;
