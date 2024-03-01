import React from 'react';
import back from '../assets/back.svg';
import './SingleCard.css';

function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  const cardClasses = `card ${flipped ? 'flipped' : ''}`;

  return (
    <div className={cardClasses} onClick={handleClick}>
      <div className="card-inner">
        <img className='front' src={card.src} alt='card front' />
        <img className='back' src={back} alt='card back' />
      </div>
    </div>
  );
}

export default SingleCard;

