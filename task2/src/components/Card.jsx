import { useState } from 'react';
import './Card.css';

function Card({ front, back }) {
  const [checkCard, setCheckCard] = useState(false);

  return (
    <div className="card-wrapper" onClick={() => setCheckCard(!checkCard)}>
      <div className={`card ${checkCard ? 'card-flipped' : ''}`}>
        <div className="card-front-side">
          <span>{front}</span>
        </div>
        <div className="card-back-side">
          <span>{back}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
