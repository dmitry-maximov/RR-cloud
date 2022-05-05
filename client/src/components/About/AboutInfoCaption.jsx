import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import floppy from '../../img/floppy.png';

const AboutInfoCaption = () => {
  return (
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
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
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
  );
};

export default AboutInfoCaption;
