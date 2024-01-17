import React from 'react';
import Card from './components/Card';
import ScoreBoard from './components/ScoreBoard';
import useGameLogic from './hooks/useGameLogic';

function App() {
  const {
    cards,
    handleCardClick,
    score,
    bestScore
  } = useGameLogic();

  return (
    <div className="App">
      <ScoreBoard score={score} bestScore={bestScore} />
      <Card cards={cards} handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;
