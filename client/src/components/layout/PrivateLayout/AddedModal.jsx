import { useState } from 'react';
import { Box, Button, Modal, Stack, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

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

export default function AddedModal() {
  //TO DO:
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <form>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Новая папка"
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
