import { useState } from 'react';
import { Box, Button, Modal, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { createDirectory } from '../../../actions/file';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const validationSchema = yup.object({
  name: yup
    .string('Новая папка')
    .min(5, 'Пароль должен иметь как минимум 5 символов')
    .required('Поле обязательно к заполнению'),
});

export default function AddedModal() {
  //TO DO:
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const dirId = useSelector((state) => state.files.currenDir);

  const formik = useFormik({
    initialValues: {
      name: ``,
    },
    validationSchema: validationSchema,
    onSubmit: ({ name }) => {
      debugger;
      dispatch(createDirectory(name, dirId));
    },
  });

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        sx={{ padding: '1rem', width: '100%' }}
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Добавить
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="div"
            sx={{
              '& .MuiTextField-root': { m: 1 },
              padding: '0rem 2rem',
            }}
            noValidate
            autoComplete="off"
          >
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Новая папка"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                variant="standard"
              />

              <Stack
                spacing={2}
                direction="row"
                mt={5}
                justifyContent="end"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  color={'primary'}
                  type="submit"
                >
                  Добавить
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
