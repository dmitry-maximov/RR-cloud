import React from 'react';
import { Stack } from '@mui/material';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const PublicLayout = (props) => {
  return (
    <Stack direction="column" sx={{ height: '100vh' }} spacing={3}>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </Stack>
  );
};

export default PublicLayout;
