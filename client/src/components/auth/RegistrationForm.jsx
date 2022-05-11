import React from 'react';
import { Box, TextField, Stack, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { registration } from '../../actions/user';
import { useDispatch } from 'react-redux';

const validationSchema = yup.object({
  name: yup.string('Введите имя').required('Поле обязательно к заполнению'),
  family: yup
    .string('Введите фамилию')
    .required('Поле обязательно к заполнению'),
  login: yup.string('Введите логин').required('Поле обязательно к заполнению'),
  email: yup
    .string('Введите свой e-mail')
    .email('Введите корректный e-mail')
    .required('Поле обязательно к заполнению'),
  password: yup
    .string('Введите пароль')
    .min(5, 'Пароль должен иметь как минимум 5 символов')
    .required('Поле обязательно к заполнению'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      family: '',
      login: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ email, password, name, family, login }) =>
      dispatch(registration(email, password, name, family, login)),
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
          id="name"
          name="name"
          label="Имя"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          variant="standard"
        />
        <TextField
          fullWidth
          id="family"
          name="family"
          label="Фамилия"
          value={formik.values.family}
          onChange={formik.handleChange}
          error={formik.touched.family && Boolean(formik.errors.family)}
          helperText={formik.touched.family && formik.errors.family}
          variant="standard"
        />
        <TextField
          fullWidth
          id="login"
          name="login"
          label="Придумайте логин"
          size="small"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          variant="standard"
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Заполните e-mail"
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
          label="Придумайте пароль"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          variant="standard"
        />
        <Stack spacing={2} direction="row" mt={5} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            color={'secondary'}
            type="submit"
          >
            Зарегистрироваться
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default RegistrationForm;
