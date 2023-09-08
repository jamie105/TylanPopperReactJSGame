import React from 'react';
import MathJax from 'react-mathjax';
import './GameOver.css'; // Import your CSS file for styling

const GameOver = ({ score, time, penalty, initialBushes, difficultyMultiplier, regeneratingBushes }) => {
  const penaltyMultiplier = 1;
  const timeMultiplier = 0.1;
  let regeneratingBushesMultiplier = 1;
  if(regeneratingBushes===true){
    regeneratingBushesMultiplier = 3;
  }
  const overallScore = Math.floor(
    ((score - ((penalty - initialBushes) * penaltyMultiplier) - (time * timeMultiplier)) *
      difficultyMultiplier) * regeneratingBushesMultiplier) * 50;

  // Define the TeX formatted equation
  const texFormula = `\\text{Overall Score: } \\lfloor ((\\text{score} - (\\text{penalty} - \\text{initialBushes}) \\cdot \\text{penaltyMultiplier} - \\text{time} \\cdot \\text{timeMultiplier}) \\cdot \\text{difficultyMultiplier}) \\cdot \\text{regeneratingBushesMultiplier} \\rfloor`;
  return (
    <div className="game-over">
      <h1>Game Over</h1>
      <h2>Overall Score: {overallScore}</h2>
      <p>Score: {score}</p>
      <p>Time: {time} seconds</p>
      <p>Penalties: {penalty}</p>
      <p>InitialBushes: {initialBushes}</p>
      <h5 className="tex-formula-gaveover">
      <MathJax.Provider>
        <MathJax.Node formula={texFormula} />
      </MathJax.Provider>
      </h5>
    </div>
  );
};

export default GameOver;
