import React from 'react';
import PublicLayout from '../components/layout/PublicLayout/PublicLayout';
import { Button, Container, Stack, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { REGISTRATION_PAGE } from '../utils/const';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import floppy from '../img/floppy.png';

// const StyledDiv = styled('div')(({ theme }) => ({
//   color: theme.palette.text.primary,
//   display: 'flex',
//   justifyContent: 'space-between',
//   padding: '1rem 3rem 0rem 3rem',
// }));

const boxContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
};

const AboutPage = () => {
  return (
    <PublicLayout>
      <Container sx={boxContainer}>
        <Stack spacing={8} alignItems={'center'}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              color: 'secondary.main',
            }}
          >
            Что такое RR-cloud ?
          </Typography>

          <Typography
            variant="p"
            sx={{
              fontWeight: 400,
              color: 'secondary.main',
              marginTop: '5rem',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
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

          <Stack
            direction="row"
            justifyContent="space-around"
            spacing={2}
            sx={{
              margin: '2rem 0rem',
            }}
          >
            <Stack justifyContent="space-around" sx={{ flex: '2' }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 400,
                  color: 'secondary.main',
                }}
              >
                Загружайте свои файлы там, где вам удобно
              </Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Stack>
            <Box
              sx={{
                flex: '1',
                display: 'flex',
                justifyContent: 'end',
              }}
            >
              <Box
                sx={{
                  width: 215,
                  height: 215,
                  background: `url(${floppy})`,
                  backgroundSize: 'auto',
                  backgroundPosition: 'center center',
                }}
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </PublicLayout>
  );
};

export default AboutPage;
