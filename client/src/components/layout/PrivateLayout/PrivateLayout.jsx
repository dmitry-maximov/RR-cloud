import React from 'react';
import Grid from '@mui/material/Grid';
import NavBar from './NavBar';
import SideBar from './SideBar';
import styled from 'styled-components';

const PrivateLayout = (props) => {
  const StyledPaper = styled('div')({
    background: '#f7f8fa',
    minHeight: '100vh',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
  });

  const StyledMain = styled('div')({
    padding: '.5rem 2rem',
  });

  return (
    <Grid container xs={{ padding: '0', margin: '0' }}>
      <Grid item xs={5} sm={4} md={3} xl={2}>
        <SideBar />
      </Grid>
      <Grid item xs={7} sm={8} md={9} xl={10}>
        <StyledPaper>
          <NavBar />
          <StyledMain>{props.children}</StyledMain>
        </StyledPaper>
      </Grid>
    </Grid>
  );
};

export default PrivateLayout;
