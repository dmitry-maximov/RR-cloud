import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import { orange } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const boxRight = {
  flex: 1,
  overflow: 'hidden',
  px: 3,
  backgroundColor: '#ffede1',
};

const LoginPreview = () => {
  return (
    <Box sx={boxRight}>
      <div
        style={{
          display: 'flex',
          alignItems: 'top',
          justifyContent: 'center',
          height: '100%',
          marginTop: '10%',
        }}
      >
        <div>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="left"
            spacing={2}
          >
            <>
              <WbCloudyIcon sx={{ fontSize: 120, color: orange[800] }} />
              <Typography
                variant="h3"
                element="h3"
                sx={{
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  lineHeight: 0.167,
                  paddingBottom: '16px',
                }}
              >
                RR-cloud
              </Typography>
            </>

            <>
              <Typography variant="h4" element="h4" mt={2}>
                Добро пожаловать
              </Typography>
              <Typography variant="p">
                Для использования приложения введите свои учетные данные{' '}
              </Typography>
            </>

            <>
              <Typography variant="h5" mt={5}>
                У вас нет учетной записи?
              </Typography>

              <Stack spacing={2} direction="row" mt={2}>
                <Button variant="contained" size="large">
                  Регистрация
                </Button>
                <Button variant="contained" size="large">
                  Регистрация
                </Button>
              </Stack>
            </>
          </Stack>
        </div>
      </div>
    </Box>
  );
};

export default LoginPreview;
