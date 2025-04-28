import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Cartpage from '../pages/CartPage/Cartpage';
import BookPage from '../pages/BookPage/BookPage';
import AuthPage from '../pages/AuthPage/AuthPage';
import Layout from '../layout/Layout';

export const router = createBrowserRouter([
    {
        path: "/",
        element : <Layout />,
        children : [
            {
                index : true,
                element : <HomePage />
            }, 
            {
                path : "cart",
                element : <Cartpage />
            }, 
            {
                path : "books/:id",
                element : <BookPage />
            }, 
            {
                path : "auth",
                element : <AuthPage />
            }, 
            {
                path : "*",
                element : <div>404 Not Found</div>
            }
        ]
    }
]);