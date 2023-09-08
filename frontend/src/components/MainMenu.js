// MainMenu.js
import React from 'react';

const MainMenu = ({ onStartGame, onSettings, onHelp }) => {
  return (
    <div className="main-menu-container">
      <h1>Tylan Popper</h1>
      <button onClick={onStartGame}>Start Game</button>
      <button onClick={onSettings}>Settings</button>
      <button onClick={onHelp}>Help</button> {/* Add Help button */}
    </div>
  );
};

export default MainMenu;
