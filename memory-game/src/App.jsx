import React, { useState, useEffect } from 'react';
import './App.css';

import bolt from './assets/bolt.svg';
import flame from './assets/flame.svg';
import headset from './assets/headset.svg';
import heart from './assets/heart.svg';
import key from './assets/key.svg';
import musicAlt from './assets/music-alt.svg';
import paw from './assets/paw.svg';
import star from './assets/star.svg';
import SingleCard from './components/SingleCard';

const cardImages = [
  { src: headset, matched: false },
  { src: heart, matched: false },
  { src: key, matched: false },
  { src: musicAlt, matched: false },
  { src: paw, matched: false },
  { src: star, matched: false },
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
      <h1>Memory Game</h1>
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
