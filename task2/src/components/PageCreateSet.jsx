import { Link, Outlet } from 'react-router-dom';
import Header from './Header';

export function PageCreateSet() {
  return (
    <div>
      <Header />
      <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
        <h2>Создание сета карточек</h2>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <Link to="createset">Создать сет</Link>
          <Link to="createcard">Создать карточку</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
