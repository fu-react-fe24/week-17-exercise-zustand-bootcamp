import { useState, useEffect } from 'react';
import './cart.css';
import { Link } from 'react-router-dom';
import useCartStore from '../../stores/useCartStore';

function Cart() {
  const [balance, setBalance] = useState(0);
  const {cart} = useCartStore();

  useEffect(() => {
    setBalance(cart.reduce((acc, item) => acc + item.qty, 0));
  }, [cart]);

  return (
    <p className="cart">
      <span className="cart-text">Cart:</span>
      <Link to="/cart" className="link">
        <span className="cart-amount">{balance}</span>
      </Link>
    </p>
  )
}

export default Cart;
