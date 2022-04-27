import React from 'react';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

const StyledMain = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  flex: '1 0 auto',
  padding: '5% 0',
});

const Main = (props) => {
  return (
    <StyledMain>
      <Container>{props.children}</Container>
    </StyledMain>
  );
};

export default Main;
