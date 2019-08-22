import React from 'react';

const Card = ({card, cardIndex, setCardsList, cards}) => {

  const handleRemoveCard = _ => {
    const filteredCards = cards.filter( (card, index) => {
      return cardIndex !== index;
    })

    setCardsList(filteredCards);
  }
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <div className="card-text-front">
            {card.front}
          </div>
        </div>
        <div className="card-back">
          <div className="card-text-back">
            <div className="remove-card-btn" onClick={handleRemoveCard}>X</div>
            {card.back}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Card;
