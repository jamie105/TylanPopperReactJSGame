import React, { useState, useEffect } from 'react';

const Timer = ({ setTime, time, timeReduction }) => {
  useEffect(() => {
    // Logic to update the time every second
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval); // Clean up the interval on unmount
    };
  }, []);

  return null;
};

export default Timer;
