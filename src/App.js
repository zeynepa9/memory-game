import React from 'react';
import Card from './components/Card';
import ScoreBoard from './components/ScoreBoard';
import useGameLogic from './hooks/useGameLogic';
import './App.css';
import Modal from './components/Modal';

function App() {
  const {
    cards,
    handleCardClick,
    score,
    bestScore,
    isGameOver,
    setIsGameOver
  } = useGameLogic();

  const closeModal = () => {
    setIsGameOver(false); // Modalı kapat
  };

  return (
    <div className="App">
      <ScoreBoard score={score} bestScore={bestScore} />
      <header className="App-header">
        <h1>Memory Game</h1>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
      </header>
      <Card cards={cards} handleCardClick={handleCardClick} />
      <Modal active={isGameOver} onClose={closeModal}>
        <h2>You Lose! Try Again?</h2>
        <button onClick={() => window.location.reload()}>Try Again</button> 
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default App;


