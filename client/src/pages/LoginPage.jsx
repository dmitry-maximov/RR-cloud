import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoginPreview from '../components/LoginPreview';
import LoginForm from '../components/LoginForm';

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
    rgb(255 58 1 / 30%) 10px 10px, 
    rgb(255 58 1 / 20%) 15px 15px, 
    rgb(255 58 1 / 10%) 20px 20px, 
    rgb(255 58 1 / 5%) 25px 25px, 
    rgb(255 221 199 / 50%) 0px 0.0625em 0.0625em, 
    rgb(255 221 199 / 50%) 0px 0.125em 0.5em, 
    rgb(255 221 199 / 5%) 0px 0px 0px 1px inset`,
};

const LoginPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={boxContainer}>
        <Box sx={boxWrapper}>
          <LoginForm />
          <LoginPreview />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default LoginPage;
