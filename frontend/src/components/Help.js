// Help.js
import React from 'react';

const Help = ({ onClose }) => {
  return (
    <div className="help-container">
      <h2>How to Play Tylan Popper</h2>
      <p>Welcome to Tylan Popper, the game where you pop all the Tylans!</p>
      <p>Your goal is to earn the highest overall score possible. Your overall score is calculated based on three factors:</p>
      <ol>
        <li>
          <strong>Points Earned:</strong> You earn points by successfully popping Tylans. The more Tylans you pop, the higher your score will be.
        </li>
        <li>
          <strong>Time Taken:</strong> The time you take to complete the game affects your overall score. The faster you finish, the better your score will be.
        </li>
        <li>
          <strong>Penalties:</strong> Be careful not to make mistakes! Every penalty you incur will reduce your overall score. Penalties are incurred when you click on bushes that don't have Tylans.
        </li>
      </ol>
      <p>
        Additionally, the game offers options to adjust the difficulty and the initial number of bushes:
      </p>
      <ul>
        <li>
          <strong>Difficulty:</strong> You can modify the game's difficulty level using the slider in the settings menu. Higher difficulty levels will increase the challenge but yield higher scores.
        </li>
        <li>
          <strong>Initial Bushes:</strong> You can adjust the number of bushes in the game using the slider in the settings menu. Starting with more bushes will offer a higher potential score but may also lead to more penalties.
        </li>
        <li>
          <strong>Regenerating Bushes:</strong> When enabled in the settings, bushes may regenerate after being popped. This feature can increase your overall score, as it provides more opportunities to pop Tylans.
        </li>
      </ul>
      <p>Now that you know how Tylan Popper works, go ahead and start popping those Tylans! Good luck!</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Help;
