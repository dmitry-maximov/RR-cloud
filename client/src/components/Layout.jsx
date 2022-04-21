import React from 'react';
import Grid from '@mui/material/Grid';
import NavBar from './NavBar';
import SideBar from './SideBar';
import styled from 'styled-components';

const Layout = (props) => {
  const Item = styled('div')(({ theme }) => ({
    background: '#f7f8fa',
    height: '90vh',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
  }));

  return (
    <Grid container xs={{ padding: '0', margin: '0' }}>
      <Grid item xs={2}>
        <SideBar />
      </Grid>
      <Grid item xs={10}>
        <Item>
          <NavBar />
          <main>{props.children}</main>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Layout;
