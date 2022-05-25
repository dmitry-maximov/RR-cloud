import styled from '@emotion/styled';
import { IconButton, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { hideUploader } from '../../reducers/uploadReducer';
import UploadFile from './UploadFile';
import CloseIcon from '@mui/icons-material/Close';

const StyledUploader = styled('div')(({ theme }) => ({
  // color: theme.palette.primary.secondary,
  height: '35vh',
  padding: '1rem',
  overflowY: 'auto',
  //   boxShadow: 'rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;',
  borderКadius: '4px',
}));

const Uploader = () => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.uploader.files);
  const isVisible = useSelector((state) => state.uploader.isVisible);

  return (
    isVisible && (
      <StyledUploader>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            borderBottom: '1px solid #ddd',
            padding: '0 0 0.5rem',
          }}
        >
          <Typography variant="h6">Загрузки</Typography>
          <IconButton
            variant="contained"
            size="small"
            aria-haspopup="true"
            color="inherit"
            onClick={() => dispatch(hideUploader())}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>
        {files.map((file) => (
          <UploadFile key={file.id} file={file} />
        ))}
      </StyledUploader>
    )
  );
};

export default Uploader;
