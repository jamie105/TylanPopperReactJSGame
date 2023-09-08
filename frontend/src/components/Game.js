// Game.js
import React, { useState } from 'react';
import MainMenu from './MainMenu';
import Background from './Background';
import RunTime from './RunTime'; // Import the RunTime component
import Cloud from './Cloud';
import Timer from './Timer';
import GameOver from './GameOver';
import Settings from './Settings'; // Import the Settings component
import Help from './Help'; // Import the Help component

const Game = () => {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [clouds, setClouds] = useState([]); // Store cloud configurations
  const [time, setTime] = useState(0); // Set an initial time
  const [gameOver, setGameOver] = useState(false); // Add gameOver state
  const [penalty, setPenalty] = useState(0);
  const [initialBushes, setInitialBushes] = useState(5);
  const [difficultyMultiplier, setDifficultyMultiplier] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false); // State for showing/hiding Help popup
  const [regeneratingBushes, setRegeneratingBushes] = useState(false); // Initialize regeneratingBushes state

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleGameOver = () => {
    setGameStarted(false);
    setGameOver(true);
  };

  const handleSettings = () => {
    setShowSettings(true);
  };

  const handleHelp = () => {
    setShowHelp(true);
  };

  return (
    <div className="game-container">
      {gameStarted ? (
        <>
          <Background score={score} time={time} penalty={penalty}/>
          <Timer setTime={setTime}/>
          <RunTime
            setScore={setScore}
            score={score}
            onGameOver={handleGameOver}
            setPenalty={setPenalty}
            initialBushes={initialBushes}
            difficultyMultiplier={difficultyMultiplier}
            regeneratingBushes={regeneratingBushes} // Pass regeneratingBushes to RunTime
          />
            {clouds.map((cloud, index) => (
            <Cloud key={index} {...cloud} />
          ))}
        </>
      ) : (
        <>
          {gameOver ? (
            <GameOver score={score} time={time} penalty={penalty} initialBushes={initialBushes} difficultyMultiplier={difficultyMultiplier} regeneratingBushes={regeneratingBushes}/>
          ) : (
            <MainMenu
              onStartGame={handleStartGame}
              onSettings={handleSettings}
              onHelp={handleHelp}
            />
          )}
        </>
      )}
      {showSettings && (
        <Settings
          difficultyMultiplier={difficultyMultiplier}
          setDifficultyMultiplier={setDifficultyMultiplier}
          initialBushes={initialBushes} // Pass initialBushes to Settings
          setInitialBushes={setInitialBushes} // Pass setInitialBushes to Settings
          regeneratingBushes={regeneratingBushes} // Pass regeneratingBushes to Settings
          setRegeneratingBushes={setRegeneratingBushes} // Pass setRegeneratingBushes to Settings
          onClose={() => setShowSettings(false)}
        />
      )}
      {showHelp && (
        <Help
          onClose={() => setShowHelp(false)}
        />
      )}
    </div>
  );
};

export default Game;
