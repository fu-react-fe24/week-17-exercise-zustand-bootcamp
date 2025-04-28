import './cartPage.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import useUserStore from '../../stores/useUserStore';
import useCartStore from '../../stores/useCartStore';

function Cartpage() {
  const navigate = useNavigate();
  const {user} = useUserStore();
  const {cart} = useCartStore();
  
  useEffect(() => {
    if(!user) navigate('/auth');
  }, []);

  return (
    <section className="page cart-page">
        <section className="cart-list">
        {
          cart && cart.filter(item => item.qty > 0).length > 0 ? 
            cart
              .filter(item => item.qty > 0)
              .map((item, index) => {
                return (
                  <article className="cart-list__item" key={index}>
                    <h2 className="cart-list__title">{item.title}</h2>
                    <p className="cart-list__qty">Quantity: {item.qty}</p>
                  </article>
                )
              })
            : <h2 className="cart-list__empty">Your cart is empty</h2>
        }
        </section>
    </section>
  )
}

export default Cartpage;
