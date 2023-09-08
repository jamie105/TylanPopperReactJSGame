// RunTime.js
import React, { useState, useEffect } from 'react';
import Bush from './Bush';
import CreateBushMimic from './CreateBushMimic'; // Import CreateBushMimic
import DestroyBushMimic from './DestroyBushMimic'; // Import DestroyBushMimic

const RunTime = ({ setScore, score, onGameOver, setPenalty, initialBushes, difficultyMultiplier, regeneratingBushes}) => {
  const bushSize = 80;
  const initialBushesSet = initialBushes;

  const [bushes, setBushes] = useState([]);
  const [moleIndex, setMoleIndex] = useState(null);
  const [nextMoleIndex, setNextMoleIndex] = useState(null);
  const [moleVisible, setMoleVisible] = useState(false);
  const [molePosition, setMolePosition] = useState({ x: 0, y: 0 });
  const [destroyMimics, setDestroyMimics] = useState([]);
  const [createMimic, setCreateMimic] = useState(null);

  const generateRandomPosition = () => {
    const x = Math.random() * (screen.availWidth - 240) + 120;
    const y = (screen.availHeight / 2) + (Math.random() * ((screen.availHeight / 2) - 120));
    return { x, y };
  };

  const generateNonOverlappingPosition = (newBushes) => {
    let newPosition;
    let isOverlapping;

    do {
      isOverlapping = false;
      newPosition = generateRandomPosition();

      for (const bush of newBushes) {
        if (
          newPosition.x < bush.x + bushSize &&
          newPosition.x + bushSize > bush.x &&
          newPosition.y < bush.y + bushSize &&
          newPosition.y + bushSize > bush.y
        ) {
          isOverlapping = true;
          break;
        }
      }
    } while (isOverlapping);

    return newPosition;
  };

  useEffect(() => {
    const initialBushes = [];
    while (initialBushes.length < initialBushesSet) {
      const newPosition = generateNonOverlappingPosition(initialBushes);
      initialBushes.push(newPosition);
    }

    setBushes(initialBushes);
  }, []);

  useEffect(() => {
    const moleInterval = setInterval(() => {
      setMoleVisible(true);

      setTimeout(() => {
        setMoleVisible(false);
      }, 1250 - (score * 25) * difficultyMultiplier);
    }, 2000 - (score * 35) * difficultyMultiplier);

    return () => {
      clearInterval(moleInterval);
    };
  }, [score]);

  useEffect(() => {
    setNextMoleIndex(Math.floor(Math.random() * bushes.length));
    if (!moleVisible && nextMoleIndex !== null) {
      setMoleIndex(nextMoleIndex);
      setMolePosition({ ...bushes[nextMoleIndex] });
    }
  }, [moleVisible, nextMoleIndex, bushes]);

  useEffect(() => {
    const animationDuration = 200; // Adjust the animation duration as needed

    const animateDestroyMimic = (mimic) => {
      const circles = document.querySelectorAll(`.fakebush${mimic.uniqueKey} .fakecircle`);
      if (circles.length > 0) {
        const firstCircle = circles[0];
        firstCircle.style.transform = 'scale(0)';
        setTimeout(() => {
          firstCircle.remove();
          if (circles.length > 1) {
            // If there are more circles, keep the animation going
            requestAnimationFrame(() => animateDestroyMimic(mimic));
          }
        }, animationDuration);
      }
    };

    const interval = setInterval(() => {
      if (destroyMimics.length > 0) {
        // Start animations for each destroy mimic
        destroyMimics.forEach((mimic) => {
          animateDestroyMimic(mimic);
        });
      }
    }, 50); // Adjust the interval as needed

    return () => {
      clearInterval(interval);
    };
  }, [destroyMimics]);
  
  
  
  
  const handleMoleClick = (index) => {
    createNewBushes(index);
    if (moleVisible && index === moleIndex) {
      setScore((prevScore) => prevScore + 1);
      setMoleVisible(false);
    } else if (index !== moleIndex) {
      setPenalty((prevPenalty) => prevPenalty + 1);
    }
  };

  const handleBushClick = (index) => {
    createNewBushes(index);
    if(moleVisible && index === moleIndex){
      setScore((prevScore) => prevScore + 1);
      setMoleVisible(false);
    }else{
      setPenalty((prevPenalty) => prevPenalty + 1);
    }
  };

  const createNewBushes = (indexToRemove) => {
    const newBushes = bushes.filter((_, index) => index !== indexToRemove);

    // Execute DestroyBushMimic
    const uniqueKey = Date.now(); // Unique key for the fake bush
    let newDestroyMimic = ({x: bushes[indexToRemove].x, y: bushes[indexToRemove].y, uniqueKey: uniqueKey});
    destroyMimics.push(newDestroyMimic);
    if(regeneratingBushes===true){
    if (Math.random() < 0.75) {
      const newPosition = generateNonOverlappingPosition(newBushes);
      newBushes.push(newPosition);

      // Execute CreateBushMimic
      //setCreateMimic({ x: newPosition.x, y: newPosition.y });
    }
    }

    if (newBushes.length <= 0) {
      console.log("gameoverlmao");
      onGameOver();
    }

    setBushes(newBushes);
  };

  return (
    <>

      {/* Render the DestroyBushMimic and CreateBushMimic components */}
      {destroyMimics && destroyMimics.map((mimic) => (
        <DestroyBushMimic x={mimic.x} y={mimic.y} uniqueKey={mimic.uniqueKey} />
      ))}
      {createMimic && (
        <CreateBushMimic x={createMimic.x} y={createMimic.y} />
      )}

      {/* Render the Bush component */}
      <Bush
        bushes={bushes}
        moleIndex={moleIndex}
        moleVisible={moleVisible}
        molePosition={molePosition}
        handleMoleClick={handleMoleClick}
        handleBushClick={handleBushClick}
      />
    </>
  );
};

export default RunTime;
