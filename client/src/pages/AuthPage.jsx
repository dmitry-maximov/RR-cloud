import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import LoginPreview from '../components/auth/LoginPreview';
import AuthForm from '../components/auth/AuthForm';
import LoginForm from '../components/auth/LoginForm';
import RegistrationForm from '../components/auth/RegistrationForm';
import { styled } from '@mui/material/styles';
import { LOGIN_PAGE } from '../utils/const';

const StyledContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const StyledBox = styled(Box)({
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
});

const AuthPage = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_PAGE;
  return (
    <React.Fragment>
      <StyledContainer>
        <StyledBox>
          <AuthForm caption={isLogin ? 'Авторизация' : 'Регистрация'}>
            {isLogin ? <LoginForm /> : <RegistrationForm />}
          </AuthForm>
          <LoginPreview isLogin={isLogin} />
        </StyledBox>
      </StyledContainer>
    </React.Fragment>
  );
};

export default AuthPage;
