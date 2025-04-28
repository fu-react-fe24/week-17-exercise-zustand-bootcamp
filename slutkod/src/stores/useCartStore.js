import { create } from 'zustand';

const useCartStore = create((set) => ({
    cart : [],
    setCart : (books) => 
        set(() => ({
            cart: books.map(book => ({
                ...book,
                qty: 0
            }))
        })),
    addCartItem : (id) => 
        set((state) => ({
            cart: state.cart.map(book => 
                book.id === id 
                ? { ...book, qty: book.qty + 1 }
                : book
            )
        })),
    removeCartItem : (id) =>
        set((state) => ({
            cart: state.cart.map(book => 
                book.id === id 
                ? { ...book, qty: Math.max(book.qty - 1, 0) }
                : book
            )
        })),
    clearCart : () => 
        set({cart : []})
}));

export default useCartStore;