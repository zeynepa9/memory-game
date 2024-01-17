import { useState, useEffect, useCallback } from 'react';
import { getRandomCards } from '../utils/api';

const useGameLogic = () => {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        // load best score from local storage
        const storedBestScore = localStorage.getItem('bestScore');
        if (storedBestScore) {
          setBestScore(parseInt(storedBestScore, 10));
        }
    
        initializeCards();
      }, []);
      

    const initializeCards = () => {
        getRandomCards(10).then(initialCards => {
            setCards(initialCards);
        });
    };

    //// fisher-Yates Shuffle algorithm
    const shuffleAndSetCards = useCallback(() => {
        setSelectedCards([]);
        const shuffled = [...cards]; // Kartları kopyala
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // shuffle the cards
        }
        setCards(shuffled);
    }, [cards]);



    const updateBestScore = useCallback((newScore) => {
        if (newScore > bestScore) {
            setBestScore(newScore);
            localStorage.setItem('bestScore', newScore.toString()); // update local storage
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
                updateBestScore(newScore);
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
