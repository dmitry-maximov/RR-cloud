import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Stack, Typography } from '@mui/material';
import Flex from '../components/UI/Flex';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Flex
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        margin={'10%'}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: 250,
              fontWeight: 600,
              textTransform: 'uppercase',
              lineHeight: 0.7,
              color: '#FFF2E5',
            }}
          >
            404
          </Typography>
          <Typography
            variant="h4"
            textAlign={'center'}
            sx={{
              fontWeight: 500,
            }}
          >
            Страница не найдена
          </Typography>
          <Typography variant="t" textAlign={'center'} mt={5}>
            страница, которую вы просматриваете, не закрывается или была
            перемещена.
          </Typography>
          <Button variant="contained" size="large">
            Назад
          </Button>
        </Stack>
      </Flex>
    </React.Fragment>
  );
};

export default NotFoundPage;
