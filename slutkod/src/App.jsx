import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Cartpage from './pages/CartPage/Cartpage';
import BookPage from './pages/BookPage/BookPage';
import AuthPage from './pages/AuthPage/AuthPage';
import Header from './components/Header/Header';

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [cartBalance, setCartBalance] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.qty, 0);
    setCartBalance(total);
  }, [cart]);

  const addToCart = (book) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === book.id);

      if (existingItem) {
        const updatedCart = prevCart.map(item => {
          if (item.id === book.id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
        return updatedCart;
      } else {
        const newCart = [...prevCart, { id: book.id, book: book.title, qty: 1 }];
        return newCart;
      }
    });
  };

  const removeFromCart = (book) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === book.id);
      if (!existingItem) return prevCart;
  
      if (existingItem.qty > 1) {
        return prevCart.map(item => 
          item.id === book.id 
            ? { ...item, qty: item.qty - 1 } 
            : item
        );
      } else {
        return prevCart.filter(item => item.id !== book.id);
      }
    });
  };

  return (
    <BrowserRouter>
    <div className="app">
      { user && <Header cartBalance={cartBalance} setUser={setUser} /> }
      <Routes>
        <Route 
          path='/' 
          element={<HomePage
            cart={cart}
            removeFromCart={removeFromCart} 
            addToCart={addToCart} 
            user={user}
          />} 
        />
        <Route path='/cart' element={<Cartpage cart={cart} user={user} />} />
        <Route path='/books/:id' element={<BookPage user={user} />} />
        <Route path='/auth' element={<AuthPage user={user} setUser={setUser} />} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
