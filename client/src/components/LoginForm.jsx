import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Flex from './UI/Flex';

const LoginForm = () => {
  const boxwrapper = {
    flex: 1,
    boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 2px 0px',
    border: '1px solid #ffede1',
    background: '#fff',
  };

  return (
    <Box sx={boxwrapper}>
      <Flex
        direction={'column'}
        alignItems={'top'}
        justifyContent={'center'}
        margin={'30% 10%'}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="left"
          spacing={2}
        >
          <Typography
            variant="h4"
            textAlign={'center'}
            sx={{
              fontWeight: 500,
            }}
          >
            Авторизация
          </Typography>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1 },
              padding: '0rem 3rem',
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              label="E-mail address"
              size="small"
              variant="standard"
            />
            <TextField
              fullWidth
              label="Password"
              size="small"
              variant="standard"
            />
            <Stack
              spacing={2}
              direction="row"
              mt={5}
              justifyContent="space-between"
              alignItems="center"
            >
              <Button variant="text">Забыли пароль</Button>
              <Button variant="contained" size="large" color={'secondary'}>
                Войти
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default LoginForm;
