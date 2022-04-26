import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, Button } from '@mui/material';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import PersonIcon from '@mui/icons-material/Person';

const StyledContainer = styled('div')(({ theme }) => ({
  ...theme.palette.paperContainer,
}));

const StyledHeader = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '.75rem 3rem 0rem 3rem',
}));

const StyledHeaderMenu = styled('div')({
  padding: '20px 15px',
});

const StyledMain = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  flex: '1 0 auto',
  padding: '5% 0',
});

const StyledFooter = styled('div')({
  display: 'flex',
  justifyContent: 'right',
  flex: '0 0 auto',
});

const StartPage = () => {
  return (
    <StyledContainer>
      <Stack direction="column" sx={{ height: '100vh' }} spacing={3}>
        <StyledHeader>
          <Stack direction="row" justifyContent="center">
            <WbCloudyIcon sx={{ fontSize: 60, color: 'primary.main' }} />
            <Typography
              color={'secondary'}
              variant="h5"
              sx={{
                fontWeight: 600,
                textTransform: 'uppercase',
                padding: '1rem 0.75rem',
              }}
            >
              RR-cloud
            </Typography>
          </Stack>

          <StyledHeaderMenu>
            <Button size="large" variant="text" color={'secondary'}>
              О проекте
            </Button>
            <Button size="large" variant="text" color={'secondary'}>
              Помощь и обратная связь
            </Button>
            <Button
              variant="contained"
              size="large"
              color={'secondary'}
              sx={{ margin: '0 2rem 0rem 4rem' }}
              startIcon={<PersonIcon />}
            >
              Войти
            </Button>
          </StyledHeaderMenu>
        </StyledHeader>

        <StyledMain>
          <Container>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 500,
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
                fontWeight: 500,
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
                variant="h4"
                sx={{
                  color: 'secondary.main',
                  fontWeight: 500,
                }}
              >
                Удобный способ получить доступ
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
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

            <Button
              variant="contained"
              size="large"
              sx={{ padding: '1rem 3rem' }}
              startIcon={<WbCloudyIcon />}
            >
              Завести диск
            </Button>
          </Container>
        </StyledMain>

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
      </Stack>
    </StyledContainer>
  );
};

export default StartPage;
