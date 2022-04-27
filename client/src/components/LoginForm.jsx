import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const LoginForm = () => {
  return (
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
        label="E-mail адрес"
        size="small"
        variant="standard"
      />
      <TextField fullWidth label="Пароль" size="small" variant="standard" />
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
  );
};

export default LoginForm;
