import {
  Avatar,
  Button,
  Container,
  Divider,
  InputLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { changeInfo } from '../actions/user';

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
});

const SettingsPage = () => {
  const { currentUser } = useSelector((state) => state.user);
  const formik = useFormik({
    initialValues: {
      name: currentUser.name,
      family: currentUser.family,
      login: currentUser.login,
      email: currentUser.email,
    },
    validationSchema: validationSchema,
    onSubmit: async ({ name, family, login }) => {
      const response = await changeInfo(name, family, login);
      if (response)
        alert(
          'Изменения успешно сохранены и вступят в силу после повторной авторизации.'
        );
      return;
    },
  });
  return (
    <Paper
      elevation={0}
      sx={{
        height: '75vh',
        padding: '0.5rem 1rem',
        margin: '0.75rem 0',
        overflowY: 'auto',
      }}
    >
      <Stack>
        <div>
          <Typography variant="h5" sx={{ padding: '1rem 2rem' }}>
            Настройки профиля
          </Typography>
          <Divider />
        </div>
        <Container sx={{ padding: '2rem' }}>
          <Stack direction="row" spacing={3}>
            <Stack justifyContent="start" alignItems="center" spacing={2}>
              <Avatar
                alt={currentUser.login}
                src="/static/images/avatar/1.jpg"
                sx={{ width: 128, height: 128 }}
              />
              <Stack>
                <Typography variant="h5">{currentUser.login}</Typography>
                <Typography variant="body1">
                  {currentUser.family} {currentUser.name}
                </Typography>
              </Stack>
            </Stack>
            <Box
              component="form"
              sx={{
                padding: '0 1rem',
                '& .MuiTextField-root': { margin: '.5rem 2rem', width: '65%' },
              }}
              noValidate
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
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
                size="small"
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
                size="small"
              />
              <TextField
                fullWidth
                id="login"
                name="login"
                label="Логин"
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
                label="Е-mail"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                variant="standard"
                size="small"
                disabled
              />

              <Stack
                spacing={2}
                direction="row"
                mt={5}
                justifyContent="end"
                alignItems="center"
              >
                <Button variant="outlined" size="large" color={'secondary'}>
                  Отмена
                </Button>
                <Button variant="contained" size="large" type="submit">
                  Сохранить
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Stack>
    </Paper>
  );
};

export default SettingsPage;
