import React from 'react';
import { Container, Stack } from '@mui/material';
import PublicLayout from '../components/layout/PublicLayout/PublicLayout';
import AboutLogo from '../components/about/AboutLogo';
import AboutInfoCaption from '../components/about/AboutInfoCaption';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.text.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
}));

const AboutPage = () => {
  return (
    <PublicLayout>
      <StyledContainer>
        <Stack spacing={8} alignItems={'center'}>
          <AboutLogo />
          <AboutInfoCaption />
        </Stack>
      </StyledContainer>
    </PublicLayout>
  );
};

export default AboutPage;
