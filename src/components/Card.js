import React from 'react';
import '../styles/Card.css'; 

const Card = ({ cards, handleCardClick }) => {
    const getImagePath = (cardName) => {
        const nameParts = cardName.toLowerCase().split(' ');
        const fileName = nameParts.join('') + '.jpeg';
        return `/images/tarot/${fileName}`;
    };
      
    return (
        <div className="card-container">
            {cards.map(card => (
                <div key={card.name} className="card" onClick={() => handleCardClick(card.name)}>
                    <img src={getImagePath(card.name)} alt={card.name} />
                    <p>{card.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;
