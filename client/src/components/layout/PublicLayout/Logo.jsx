import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Stack } from '@mui/material';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import { START_PAGE } from '../../../utils/const';

const Logo = () => {
  return (
    <Link to={START_PAGE}>
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
    </Link>
  );
};

export default Logo;
