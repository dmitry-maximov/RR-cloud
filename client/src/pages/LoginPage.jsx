import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoginPreview from '../components/LoginPreview';
import AuthForm from '../components/AuthForm';
import { useLocation } from 'react-router-dom';
import { LOGIN_PAGE } from '../utils/const';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

const boxContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const boxWrapper = {
  display: 'flex',
  width: '60vw',
  height: '65vh',
  boxShadow: `rgb(255 58 1 / 40%) 5px 5px, 
    rgb(255 130 2 / 30%) 10px 10px, 
    rgb(255 130 2 / 20%) 15px 15px, 
    rgb(255 130 2 / 10%) 20px 20px, 
    rgb(255 130 2 / 5%) 25px 25px, 
    rgb(255 221 199 / 50%) 0px 0.0625em 0.0625em, 
    rgb(255 221 199 / 50%) 0px 0.125em 0.5em, 
    rgb(255 221 199 / 5%) 0px 0px 0px 1px inset`,
};

const LoginPage = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_PAGE;
  return (
    <React.Fragment>
      <Container sx={boxContainer}>
        <Box sx={boxWrapper}>
          <AuthForm caption={isLogin ? 'Авторизация' : 'Регистрация'}>
            {isLogin ? <LoginForm /> : <RegistrationForm />}
          </AuthForm>
          <LoginPreview isLogin={isLogin} />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default LoginPage;
