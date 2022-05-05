import React from 'react';
import { Box, TextField, Stack, Button } from '@mui/material';

const RegistrationForm = () => {
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
      <TextField fullWidth label="Имя" size="small" variant="standard" />
      <TextField fullWidth label="Фамилия" size="small" variant="standard" />
      <TextField
        fullWidth
        label="Придумайте логин"
        size="small"
        variant="standard"
      />
      <TextField fullWidth label="E-mail" size="small" variant="standard" />

      <TextField
        fullWidth
        label="Придумайте пароль"
        size="small"
        variant="standard"
      />
      <TextField
        fullWidth
        label="Повторите пароль"
        size="small"
        variant="standard"
      />
      <Stack spacing={2} direction="row" mt={5} justifyContent="center">
        <Button variant="contained" size="large" color={'secondary'}>
          Зарегистрироваться
        </Button>
      </Stack>
    </Box>
  );
};

export default RegistrationForm;
