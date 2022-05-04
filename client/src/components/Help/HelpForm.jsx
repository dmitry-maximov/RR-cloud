import React from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';

const boxWrapper = {
  flex: 1,
  overflow: 'hidden',
  px: 3,
  '& .MuiTextField-root': { m: 1 },
  padding: '2em 3rem 4rem 2rem',
};

const HelpForm = () => {
  return (
    <Box
      component="form"
      sx={boxWrapper}
      noValidate
      autoComplete="off"
      color="secondary.main"
    >
      <TextField fullWidth label="Имя" size="small" variant="standard" />

      <TextField fullWidth label="E-mail" size="small" variant="standard" />

      <TextField fullWidth label="Тема" size="small" variant="standard" />

      <TextField
        fullWidth
        label="Сообщение"
        multiline
        rows={6}
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
        <Button variant="contained" fullWidth size="large" color={'secondary'}>
          Отмена
        </Button>
        <Button variant="contained" fullWidth size="large">
          Отправить
        </Button>
      </Stack>
    </Box>
  );
};

export default HelpForm;
