import React, {useState} from 'react';
import './App.css';
import Card from './components/Card';
import NewCardPopUp from './components/NewCardPopUp';

function App() {
  let myLocalStorageItems = JSON.parse(localStorage.getItem("myCardsLocalStorage"));
  const [cards, setCardsList] = useState(myLocalStorageItems || []);
  const [card, setNewCard] = useState({
    front: '',
    back: ''
  });
  const [popUp, showPopUp] = useState(false);
  const [emptyFieldError, setEmptyFieldError] = useState(false);

  React.useEffect(() => {
    localStorage.setItem('myCardsLocalStorage', JSON.stringify(cards));
  }, [cards]);

  const toggleCardPopUp = _ => {
    if(emptyFieldError && popUp) {
      setEmptyFieldError(false);
      setNewCard({ front: '', back: ''});
    }
    showPopUp(!popUp);
  }

  return (
    <div className="study-cards">
      <h1 className="title">Study Cards</h1>
      <div className="new-btn-container">
        <p className="greeter">Create study cards to test yourself and master your knowledge! After creating a card, hover over it to reveal the answer.</p>
        <button className="new-card-btn" onClick={toggleCardPopUp}>New Card</button>
      </div>
      <div className="cards-container">
        { cards.length ? cards.map((card, index) => {
          return <Card cards={cards} setCardsList={setCardsList} card={card} key={index} cardIndex={index} />;
        }) : <div>You haven't created any cards yet, click the 'New Card' button to start quizzing yourself!</div>}
      </div>
      { popUp ? <NewCardPopUp
        card={card}
        setNewCard={setNewCard}
        cards={cards}
        setEmptyFieldError={setEmptyFieldError}
        emptyFieldError={emptyFieldError}
        togglePopUp={toggleCardPopUp}
        setCardsList={setCardsList}
        /> : null }
    </div>
  );
}

export default App;
