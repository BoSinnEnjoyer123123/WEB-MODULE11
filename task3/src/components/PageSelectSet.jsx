import Header from './Header';
import BtnSet from './BtnSet';
import data from '../data.json';

export function PageSelectSet() {
  const sets = [...new Set(data.map(card => card.setName))];

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: '40px' }}>
        <h2>Выбор сетов</h2>
        {sets.map((name, index) => (
          <BtnSet key={name} id={index} setName={name} />
        ))}
      </div>
    </div>
  );
}
