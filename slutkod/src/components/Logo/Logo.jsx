import './logo.css';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className="link">
      <i className="logo fa-solid fa-book-open"></i>
    </Link>
  )
}

export default Logo;
