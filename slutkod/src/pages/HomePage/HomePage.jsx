import { useEffect } from 'react';
import BookList from '../../components/BookList/BookList';
import './homePage.css';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../stores/useUserStore';

function HomePage() {
  const navigate = useNavigate();
  const {user} = useUserStore();

  useEffect(() => {
    if(!user) navigate('/auth');
  }, []);

  return (
    <section className="page home-page">
        <BookList/>
    </section>
  )
}

export default HomePage;
