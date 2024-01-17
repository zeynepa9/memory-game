import { useState, useEffect, useCallback } from 'react';
import { getRandomCards } from '../utils/api';

const useGameLogic = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    shuffleAndSetCards();
  }, []);

  const shuffleAndSetCards = () => {
    getRandomCards(15).then(shuffledCards => {
      setCards(shuffledCards);
    });
  };

  const updateBestScore = useCallback((newScore) => {
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
  }, [bestScore]);



  const handleCardClick = useCallback((cardName) => {
    shuffleAndSetCards();
    if (selectedCards.includes(cardName)) {
        setScore(0);
        setSelectedCards([]);
    } else {
        setSelectedCards(prevSelected => [...prevSelected, cardName]);
        setScore(prevScore => {
            const newScore = prevScore + 1;
            updateBestScore(newScore); // En yüksek skoru güncelle
            return newScore;
        });
    }
}, [selectedCards, shuffleAndSetCards, updateBestScore]);




  return {
    cards,
    score,
    bestScore,
    handleCardClick
  };
};

export default useGameLogic;
