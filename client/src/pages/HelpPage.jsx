import React from 'react';
import PublicLayout from '../components/layout/PublicLayout/PublicLayout';
import { Container, Stack } from '@mui/material';
import HelpForm from '../components/help/HelpForm';
import HelpPreview from '../components/help/HelpPreview';

const boxContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
};

const wrapper = {
  boxShadow: `rgba(0, 0, 0, 0.1) 0px 4px 12px;`,
};

const HelpPage = () => {
  return (
    <PublicLayout>
      <Container sx={boxContainer}>
        <Stack direction="row" spacing={2} sx={wrapper}>
          <HelpPreview />
          <HelpForm />
        </Stack>
      </Container>
    </PublicLayout>
  );
};

export default HelpPage;
