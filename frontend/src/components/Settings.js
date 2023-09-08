// Settings.js
import React from 'react';

const Settings = ({
  difficultyMultiplier,
  setDifficultyMultiplier,
  initialBushes,
  setInitialBushes,
  regeneratingBushes, // Include regeneratingBushes and setRegeneratingBushes
  setRegeneratingBushes,
  onClose,
}) => {
  const handleDifficultyChange = (e) => {
    setDifficultyMultiplier(parseFloat(e.target.value));
  };

  const handleInitialBushesChange = (e) => {
    setInitialBushes(parseInt(e.target.value));
  };

  const handleRegeneratingBushesChange = () => {
    setRegeneratingBushes((prev) => !prev); // Toggle the state
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="setting">
        <label htmlFor="difficultySlider">Difficulty:</label>
        <input
          id="difficultySlider"
          type="range"
          min="1"
          max="5"
          step="0.1"
          value={difficultyMultiplier}
          onChange={handleDifficultyChange}
        />
        <span>Difficulty: {difficultyMultiplier}</span>
      </div>
      <div className="setting">
        <label htmlFor="initialBushesSlider">Initial Bushes:</label>
        <input
          id="initialBushesSlider"
          type="range"
          min="5"
          max="50"
          step="1"
          value={initialBushes}
          onChange={handleInitialBushesChange}
        />
        <span>Initial Bushes: {initialBushes}</span>
      </div>
      <div className="setting">
        <label htmlFor="regeneratingBushesCheckbox">Regenerating Bushes:</label>
        <input
          id="regeneratingBushesCheckbox"
          type="checkbox"
          checked={regeneratingBushes} // Set the checkbox state
          onChange={handleRegeneratingBushesChange} // Handle checkbox change
        />
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Settings;
