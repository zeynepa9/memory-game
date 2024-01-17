import React from 'react';
import Card from './components/Card';
import ScoreBoard from './components/ScoreBoard';
import useGameLogic from './hooks/useGameLogic';
import './App.css';

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
      <header className="App-header">
        <h1>Memory Game</h1>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
      </header>
      <Card cards={cards} handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;


