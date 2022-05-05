import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import PublicLayout from '../components/layout/PublicLayout/PublicLayout';
import { styled } from '@mui/material/styles';
import { REGISTRATION_PAGE } from '../utils/const';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';

const StyledContainer = styled('div')(({ theme }) => ({
  ...theme.palette.paperContainer,
}));

const StartPage = () => {
  return (
    <StyledContainer>
      <PublicLayout>
        <Container sx={{ margin: '5vw 0 0' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              lineHeight: 0.95,
              color: 'secondary.main',
            }}
          >
            <Typography
              variant="t"
              sx={{
                color: 'primary.main',
              }}
            >
              Управляйте{' '}
            </Typography>
            всеми своими файлами
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              lineHeight: 0.95,
              color: 'secondary.main',
            }}
          >
            <Typography
              variant="t"
              sx={{
                color: 'primary.main',
              }}
            >
              в
            </Typography>{' '}
            одном месте
          </Typography>
          <div style={{ padding: '3rem 0rem' }}>
            <Typography
              variant="h5"
              sx={{
                color: 'secondary.main',
              }}
            >
              Удобный способ получить доступ
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'secondary.main',
                lineHeight: 0.9,
              }}
            >
              ко всем вашим
              <Typography
                variant="t"
                sx={{
                  color: 'primary.main',
                }}
              >
                {' '}
                файлам.
              </Typography>
            </Typography>
          </div>
          <Link to={REGISTRATION_PAGE}>
            <Button
              variant="contained"
              size="large"
              sx={{ padding: '1rem 3rem' }}
              startIcon={<WbCloudyIcon />}
            >
              Завести диск
            </Button>
          </Link>
        </Container>
      </PublicLayout>
    </StyledContainer>
  );
};

export default StartPage;
