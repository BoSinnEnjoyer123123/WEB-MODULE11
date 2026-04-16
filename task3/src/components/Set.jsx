import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Card from './Card';
import data from '../data.json';
import './Set.css';

function Set() {
  const [step, setStep] = useState(0);
  const location = useLocation();
  const { id } = useParams();

  console.log('URL id:', id);

  const setName = location.state?.set;
  const cards = data.filter(card => card.setName === setName);

  if (!cards.length) {
    return <p className="set-empty">Набор не найден</p>;
  }

  return (
    <div className="set">
      <h2 className="set-name">{setName}</h2>

      <Card
        key={cards[step].id}
        front={cards[step].front}
        back={cards[step].back}
      />

      <div className="set-controls">
        <button className="set-btn" onClick={() => setStep(step - 1)} disabled={step === 0}>&lt;</button>
        <span className="set-counter">{step + 1} / {cards.length}</span>
        <button className="set-btn" onClick={() => setStep(step + 1)} disabled={step === cards.length - 1}>&gt;</button>
      </div>
    </div>
  );
}

export default Set;
