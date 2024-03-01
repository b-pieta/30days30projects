import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className='front'>
        <FontAwesomeIcon className="icon-large" icon={card.src} size="9x" style={{ color: '#a393eb' }} />
        </div>
        <div className='back'>
          <img src={back} alt='card back' />
        </div>
      </div>
    </div>
  );
}

export default SingleCard;


