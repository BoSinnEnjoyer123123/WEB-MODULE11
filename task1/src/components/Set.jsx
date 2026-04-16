import { useState } from 'react';
import Card from './Card';
import './Set.css';

function Set({ set }) {
  const [step, setStep] = useState(0);
  const cards = set.cards;

  return (
    <div className="set">
      <h2 className="set-name">{set.name}</h2>

      <Card
        key={cards[step].id}
        word={cards[step].word}
        translation={cards[step].translation}
      />

      <div className="set-controls">
        <button
          className="set-btn"
          onClick={() => setStep(step - 1)}
          disabled={step === 0}
        >
          &lt;
        </button>
        <span className="set-counter">{step + 1} / {cards.length}</span>
        <button
          className="set-btn"
          onClick={() => setStep(step + 1)}
          disabled={step === cards.length - 1}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Set;
