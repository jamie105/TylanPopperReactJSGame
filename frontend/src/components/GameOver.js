import React from 'react';
import MathJax from 'react-mathjax';
import '../css/GameOver.css'; // Import your CSS file for styling

const GameOver = ({ score, time, penalty, initialBushes, difficultyMultiplier, regeneratingBushes, timeReduction }) => {
  const penaltyMultiplier = 1;
  const timeMultiplier = 0.1;
  let regeneratingBushesMultiplier = 1;
  if(regeneratingBushes===true){
    regeneratingBushesMultiplier = 3;
  }
  const overallScore = Math.floor(
    ((score - ((penalty - initialBushes) * penaltyMultiplier) - ((time - (timeReduction * (15/difficultyMultiplier))) * timeMultiplier)) *
      difficultyMultiplier) * regeneratingBushesMultiplier) * 50;

  // Define the TeX formatted equation
  const texFormula = `\\text{Overall Score: } \\lfloor ((\\text{score} - (\\text{penalty} - \\text{initialBushes}) \\cdot \\text{penaltyMultiplier} - (\\text{time} - (\\text{timeReduction} \\cdot \\frac{15}{\\text{difficultyMultiplier}})) \\cdot \\text{timeMultiplier}) \\cdot \\text{difficultyMultiplier} \\cdot \\text{regeneratingBushesMultiplier}) \\rfloor`;
  const texFormula2 = `\\text{Overall Score: } \\lfloor ((${score} - (${penalty} - ${initialBushes}) \\cdot ${penaltyMultiplier} - (${time} - (${timeReduction} \\cdot \\frac{15}{${difficultyMultiplier}})) \\cdot ${timeMultiplier}) \\cdot ${difficultyMultiplier} \\cdot ${regeneratingBushesMultiplier}) \\rfloor`;  
  const texFormula3 = `\\text{Overall Score: ${overallScore}}`;

  return (
    <div className="game-over">
      <h1>Game Over</h1>
      <h2>Overall Score: {overallScore}</h2>
      <p>Score: {score}</p>
      <p>Time: {time} seconds</p>
      <p>Time Reduction: {timeReduction * (15/difficultyMultiplier)}</p>
      <p>Final Time: {time - (timeReduction * (15/difficultyMultiplier))}</p>
      <p>Penalties: {penalty}</p>
      <p>DifficultyMultiplier: {difficultyMultiplier}</p>
      <p>InitialBushes: {initialBushes}</p>
      <h5 className="tex-formula-gaveover">
      <MathJax.Provider>
        <MathJax.Node formula={texFormula} />
        <MathJax.Node formula={texFormula2} />
        <MathJax.Node formula={texFormula3} />
      </MathJax.Provider>
      </h5>
    </div>
  );
};

export default GameOver;
