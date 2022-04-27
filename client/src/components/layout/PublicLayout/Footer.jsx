import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const StyledFooter = styled('div')({
  display: 'flex',
  justifyContent: 'right',
  flex: '0 0 auto',
});

const Footer = () => {
  return (
    <StyledFooter>
      <Typography
        variant="p"
        sx={{
          color: 'primary.secondary',
          padding: 3,
          fontWeight: 500,
        }}
      >
        Pet-Project Company &copy; {new Date().getFullYear()}
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
