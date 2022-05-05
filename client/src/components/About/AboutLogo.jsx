import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { REGISTRATION_PAGE } from '../../utils/const';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';

const AboutLogo = () => {
  return (
    <>
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
    </>
  );
};

export default AboutLogo;
