import React, { useState, useEffect } from 'react';
import { getRandomCards } from '../utils/api';
import '../styles/Card.css'; 



const Card = () => {
    const [cards, setCards] = useState([]);
  
    useEffect(() => {
      getRandomCards(12).then(setCards);
    }, []);

    const getImagePath = (cardName) => {
        // 'Five of Swords' => 'fiveofswords'
        const nameParts = cardName.toLowerCase().split(' ');
        const fileName = nameParts.join('') + '.jpeg';
        return `/images/tarot/${fileName}`;
      };
      
      
      
  
    return (
        <div className="card-container">
        {cards.map(card => (
          <div key={card.name} className="card">
            <img src={getImagePath(card.name)} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    );
  };

  

export default Card;
