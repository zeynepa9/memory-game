import React from 'react';
import '../styles/ScoreBoard.css'; 



const ScoreBoard = ({ score, bestScore, attempts }) => {
  return (
    <div className="score-board">
      <div className="score">
        Score: {score}
      </div>
      <div className="best-score">
        Best Score: {bestScore}
      </div>
    </div>
  );
};

export default ScoreBoard;
