import { Link } from 'react-router-dom';

export function Page404() {
  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/">На главную</Link>
    </div>
  );
}
