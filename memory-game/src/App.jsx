import React, { useState, useEffect } from 'react';
import './App.css';

import SingleCard from './components/SingleCard';
import { faHeadphonesSimple, faHeart, faKey, faMusic, faPaw, faStar } from '@fortawesome/free-solid-svg-icons';


const cardImages = [
  { src: faHeadphonesSimple, matched: false },
  { src: faHeart, matched: false },
  { src: faKey, matched: false },
  { src: faMusic, matched: false },
  { src: faPaw, matched: false },
  { src: faStar, matched: false },
];


function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setMatches(0);
    setMoves(0);
    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setMoves(moves => moves + 1);
      if (choiceOne.src === choiceTwo.src) {
        setMatches(matches => matches + 1);
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className='App'>
      <button onClick={shuffleCards}>New Game</button>
      <p>Moves: {moves}</p>
      <p>Matches: {matches}</p>
      <div className='grid-card'>
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
