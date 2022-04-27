import React from 'react';
import { styled } from '@mui/material/styles';
import Logo from './Logo';
import NavBar from './NavBar';

const StyledHeader = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 3rem 0rem 3rem',
}));

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
