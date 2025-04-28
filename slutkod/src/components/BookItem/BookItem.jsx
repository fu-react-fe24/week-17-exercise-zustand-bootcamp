import './bookItem.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../../stores/useCartStore';

function BookItem({ book }) {
  const [bookBalance, setBookBalance] = useState(0);
  const {cart, addCartItem, removeCartItem} = useCartStore();

  useEffect(() => {
    const existingItem = cart.find(item => item.id === book.id);    
    if (existingItem) {
      setBookBalance(existingItem.qty);
    } else {
      setBookBalance(0);
    }
  }, [cart]);

  const decreaseBookBalance = (book) => {
    if(bookBalance > 0) {
      setBookBalance(b => b - 1);
      removeCartItem(book.id);
    }
  }

  const increaseBookBalance = (book) => {
    setBookBalance(b => b + 1);
    addCartItem(book.id);
  }

  return (
    <article className="book-item">
      <Link to={'/books/' + book.id} className="book-item__link">
        <h3 className="book-item__title">{ book.title }</h3>
      </Link>
      <p className="book-item__author">{'Av ' + book.author }</p>
      <p className="book-item__description">{ book.about }</p>
      <div className="book-item__btn-controller">
        <button 
          className="book-item__btn"
          onClick={ () => decreaseBookBalance(book) }
        >-</button>
        <p className="book-item__balance">{ bookBalance }</p>
        <button 
          className="book-item__btn"
          onClick={ () => increaseBookBalance(book) }
        >+</button>
      </div>
    </article>
  )
}

export default BookItem;
