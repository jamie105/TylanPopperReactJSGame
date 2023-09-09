import React, { useState, useEffect } from 'react';
import '../css/PowerUp.css'; // Import your CSS file for styling

const PowerUp = ({ setTimeReduction, timeReduction, doublePointsActive, setDoublePointsActive, timeReductionActive, setTimeReductionActive, speedBoostActive, setSpeedBoostActive}) => {
  // Define your powerup types and initialize their counts
  const [powerupTypes, setPowerupTypes] = useState([
    { emoji: '🚀', name: 'Speed Boost', count: 0, description: 'Increase Tylan jump speed.' },
    { emoji: '💎', name: 'Double Points', count: 0, description: 'Earn double points for each pop.' },
    { emoji: '🕐', name: 'Time Reduction', count: 0, description: 'Remove time from the game.' },
    // Add more powerup types here with descriptions
  ]);

  const [doublePointsTime, setDoublePointsTime] = useState(0);
  const [timeReductionTime, setTimeReductionTime] = useState(0);
  const [speedBoostTime, setSpeedBoostTime] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      giveRandomPowerup();
    }, 15000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    let countdownIntervalDP;
    if (doublePointsActive) {
      countdownIntervalDP = setInterval(() => {
        setDoublePointsTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdownIntervalDP);
    };
  }, [doublePointsActive]);

  useEffect(() => {
    let countdownIntervalTD;
    if (timeReductionActive) {
      countdownIntervalTD = setInterval(() => {
        setTimeReductionTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdownIntervalTD);
    };
  }, [timeReductionActive]);

  useEffect(() => {
    let countdownIntervalSB;
    if (speedBoostActive) {
      countdownIntervalSB = setInterval(() => {
        setSpeedBoostTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdownIntervalSB);
    };
  }, [speedBoostActive]);

  const toggleDoublePoints = () => {
    setDoublePointsActive(!doublePointsActive);

    // If activating double points, set the duration (15 seconds)
    if (!doublePointsActive) {
      setDoublePointsTime(15);
      // Deactivate double points after 15 seconds
      setTimeout(() => {
        setDoublePointsActive(false);
        setDoublePointsTime(0);
      }, 15000);
    }
  };

  const toggleTimeReduction = () => {
    setTimeReductionActive(!timeReductionActive);

    // If activating double points, set the duration (15 seconds)
    if (!timeReductionActive) {
      setTimeReductionTime(15);
      // Deactivate double points after 15 seconds
      setTimeout(() => {
        setTimeReductionActive(false);
        setTimeReductionTime(0);
      }, 15000);
    }
  };

  const toggleSpeedBoost = () => {
    setSpeedBoostActive(!speedBoostActive);

    // If activating double points, set the duration (15 seconds)
    if (!speedBoostActive) {
      setSpeedBoostTime(15);
      // Deactivate double points after 15 seconds
      setTimeout(() => {
        setSpeedBoostActive(false);
        setSpeedBoostTime(0);
      }, 15000);
    }
  };

  // Function to handle clicking on a powerup
  const handlePowerUpClick = (powerup, index) => {
    if(powerup.name === 'Double Points' && doublePointsActive) {
        return;
    }else if(powerup.name === 'Time Reduction' && timeReductionActive) {
        return;
    }else if(powerup.name === 'Speed Boost' && speedBoostActive) {
        return;
    }
    if (powerup.count > 0) {
      // Create a copy of the powerup array
      const updatedPowerups = [...powerupTypes];
      updatedPowerups[index].count -= 1;
      setPowerupTypes(updatedPowerups);
  
      // Implement powerup animation logic here
      const overlay = document.createElement('div');
      overlay.classList.add('powerup-overlay'); // Apply the overlay class
      overlay.innerHTML = `<img src="art/powerups/powerup${index}_hd.png" alt="${powerup.emoji}" class="powerup-overlay-icon" />`;
      document.body.appendChild(overlay);
  
      setTimeout(() => {
        document.body.removeChild(overlay);
      }, 1000); // Remove the overlay after 1 second
  
      // Execute powerup-specific code
      switch (powerup.name) {
        case 'Speed Boost':
          if (!speedBoostActive) {
            toggleSpeedBoost();
            //apply boost
          }else{
            givePowerUp(powerup.name);
          }
          break;
        case 'Double Points':
          if (!doublePointsActive) {
            toggleDoublePoints();
            //apply points
          }else{
            givePowerUp(powerup.name);
          }
          break;
        case 'Time Reduction':
          if (!timeReductionActive) {
            toggleTimeReduction();
            setTimeReduction((prevTimeReduction) => prevTimeReduction + 1);
          }else{
            givePowerUp(powerup.name);
          }
          break;
        default:
          break;
      }
    }
  };

  const givePowerUp = (type) => {
    const updatedPowerups = [...powerupTypes];
    const powerupIndex = updatedPowerups.findIndex((powerup) => powerup.name === type);
    
    if (powerupIndex !== -1) {
      updatedPowerups[powerupIndex].count += 1;
      setPowerupTypes(updatedPowerups);
    }
  };

  const giveRandomPowerup = () => {
    const randomIndex = Math.floor(Math.random() * powerupTypes.length);
    const randomPowerup = powerupTypes[randomIndex];

    givePowerUp(randomPowerup.name);
    console.log(`Gave a random powerup: ${randomPowerup.name}`);
  };

  return (
    <div className="powerup-panel">
      {powerupTypes.map((powerup, index) => (
        <div
          className="powerup-button" // Add the button class
          key={index}
          onClick={() => handlePowerUpClick(powerup, index)}
          title={powerup.description}
        >
          <img src={`art/powerups/powerup${index}.png`} alt={powerup.emoji} className="emoji-icon" />
          <span className="powerup-count">{powerup.count}</span>
          {doublePointsActive && powerup.name === 'Double Points' && (
          <div className="double-points-timer">
            <span className="timer-text">{doublePointsTime}s</span>
          </div>
        )}
        {timeReductionActive && powerup.name === 'Time Reduction' && (
          <div className="time-reduction-timer">
        <span className="timer-text">{timeReductionTime}s</span>
          </div>
        )}
        {speedBoostActive && powerup.name === 'Speed Boost' && (
          <div className="speed-boost-timer">
        <span className="timer-text">{speedBoostTime}s</span>
          </div>
        )}
        </div>
      ))}
      {/* Add more powerups with their respective descriptions */}
    </div>
  );
};

export default PowerUp;
