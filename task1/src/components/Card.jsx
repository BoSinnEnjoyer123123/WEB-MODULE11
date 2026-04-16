import { useState } from 'react';
import './Card.css';

function Card({ word, translation }) {
  const [checkCard, setCheckCard] = useState(false);

  return (
    <div className="card-wrapper" onClick={() => setCheckCard(!checkCard)}>
      <div className={`card ${checkCard ? 'card-flipped' : ''}`}>
        <div className="card-front-side">
          <span>{word}</span>
        </div>
        <div className="card-back-side">
          <span>{translation}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
