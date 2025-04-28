import { useNavigate } from 'react-router-dom';
import './authPage.css';
import { useState, useEffect } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import users from '../../data/users';
import useUserStore from '../../stores/useUserStore';

function AuthPage() {
  const [activeForm, setActiveForm] = useState('login');
  const {user} = useUserStore();
  const [userList, setUserList] = useState(users);
  const navigate = useNavigate();

  useEffect(() => {
    if(user) navigate('/');
  }, []);

  return (
    <section className="page auth-page">
        {
          activeForm === 'login' ?
          <LoginForm
            userList={userList} 
            setActiveForm={setActiveForm}
          /> : 
          <RegisterForm
            userList={userList}
            setUserList={setUserList}
            setActiveForm={setActiveForm}
          />
        }
    </section>
  )
}

export default AuthPage;
