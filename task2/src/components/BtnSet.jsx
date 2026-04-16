import { Link } from 'react-router-dom';
import './BtnSet.css';

function BtnSet({ id, setName }) {
  return (
    <Link
      to={`/set/${id}`}
      state={{ set: setName }}
      className="btn-set"
    >
      {setName}
    </Link>
  );
}

export default BtnSet;
