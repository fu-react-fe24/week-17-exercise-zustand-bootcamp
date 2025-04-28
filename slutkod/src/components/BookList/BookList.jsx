import './bookList.css';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import BookItem from '../BookItem/BookItem';
import { useEffect } from 'react';
import useCartStore from '../../stores/useCartStore';

function BookList() {
    const { books, isLoading, isError } = useFetchBooks();
    const {cart, setCart} = useCartStore();
    useEffect(() => {
        if(books.length > 0 && cart.length < 1) {
            setCart(books);
            console.log('nu händer det ngt');
        }
    }, [books]);

    if(isLoading) return <div className="book-page__list">Loading...</div>
    if(isError) return <div className="book-page__list">Error loading books</div>

return (
    <section className="book-page__list">
        {
            books?.map((book, index) => {
                return <BookItem
                    book={ book }
                    key={ index } 
                />
            })
        }
    </section>
)
}

export default BookList;