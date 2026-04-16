import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">Карточки</Link>
      <Link to="/admin" className="header-link">Создать сет</Link>
    </header>
  );
}

export default Header;
