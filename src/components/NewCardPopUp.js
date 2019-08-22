import React from 'react';

const NewCardPopUp = ({togglePopUp, cards, card, setNewCard, setCardsList, emptyFieldError, setEmptyFieldError}) => {

  const handleToggle = e => {
    togglePopUp();
  }

  const submitNewCard = e => {
    e.preventDefault();
    if(card.front && card.back) {
      const cardsPile = [...cards, card];
      setCardsList(cardsPile);
      setNewCard({ front: '', back: ''});
      handleToggle();
      setEmptyFieldError(false);
    } else {
      setEmptyFieldError(true);
    }
  }

  const handleInputChange = e => {
    e.preventDefault();
    const cardCopy = Object.assign({}, card);
    const propertyName = e.target.name;
    cardCopy[propertyName] = e.target.value;
    setNewCard(cardCopy);
  }

  return (
      <div>
        <div className="popup-overlay" onClick={handleToggle}>
        </div>
        <form className="new-card-component" onSubmit={submitNewCard}>
          <div className="close-popup" onClick={handleToggle}>X</div>
          <label htmlFor="card-front">What would you like the front of the card to display?</label>
          <input type="text" name="front" onChange={handleInputChange} id="card-front" value={card.front} className="input-new-card" />
          <label htmlFor="card-front">What would you like the back of the card to display?</label>
          <textarea id="card-back" onChange={handleInputChange} name="back" value={card.back} className="input-new-card"> </textarea>
          <input type="submit" value="Add Card" className="add-card-btn" />
          {emptyFieldError ? <span className="error">Please make sure to fill out both fields!</span> : ''}
        </form>
      </div>
  )
}

export default NewCardPopUp;
