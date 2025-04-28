import './bookPage.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import useUserStore from '../../stores/useUserStore';


function BookPage() {
  const [book, setBook] = useState(null); 
  const {user} = useUserStore();
  const navigate = useNavigate();
  const { id } = useParams();
  const { books, isLoading, isError } = useFetchBooks();

  useEffect(() => {
    if (books && id) {
      const foundBook = books.find(item => item.id === parseInt(id));
      setBook(foundBook);      
    }
  }, [books, id]);

  useEffect(() => {
    if(!user) navigate('/auth');
  }, []);

  return (
    <section className="page book-page">
        {
          book && (
            <section className="book-details">
              <h1 className="book-details__title">#{book.id} {book.title}</h1>
              <h2 className="book-details__author">{book.author}</h2>
              <p className="book-details__info">Genre: {book.genre}</p>
              <p className="book-details__info">Pages: {book.pages}</p>
              <p className="book-details__info">Plot: {book.about}</p>
            </section>
          )
        }
    </section>
  )
}

export default BookPage;
