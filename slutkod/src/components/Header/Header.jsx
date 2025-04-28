import Logo from '../Logo/Logo';
import Cart from '../Cart/Cart';
import './header.css';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../stores/useUserStore';
import useCartStore from '../../stores/useCartStore';

function Header() {
  const navigate = useNavigate();
  const {user, logout} = useUserStore();
  const {clearCart} = useCartStore();

  const logOut = () => {
    logout();
    clearCart();
    navigate('/auth');
  }

  return (
    <header className="page-header">
        <Logo />
        {user && <button onClick={logOut}>Logout</button>}
        <Cart />
    </header>
  )
}

export default Header;
