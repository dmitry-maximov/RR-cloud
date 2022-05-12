import React from 'react';
import { Box, TextField, Stack, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/user';

const validationSchema = yup.object({
  email: yup
    .string('Введите свой e-mail')
    .email('Введите корректный e-mail')
    .required('Поле обязательно к заполнению'),
  password: yup
    .string('Введите пароль')
    .min(5, 'Пароль должен иметь как минимум 5 символов')
    .required('Поле обязательно к заполнению'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ email, password }) => dispatch(login(email, password)),
  });

  return (
    <Box
      component="div"
      sx={{
        '& .MuiTextField-root': { m: 1 },
        padding: '0rem 3rem',
      }}
      noValidate
      autoComplete="off"
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="E-mail"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          variant="standard"
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Пароль"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
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
          <Button
            variant="contained"
            size="large"
            color={'secondary'}
            type="submit"
          >
            Войти
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
