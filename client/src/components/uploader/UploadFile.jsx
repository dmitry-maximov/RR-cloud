import styled from '@emotion/styled';
import {
  IconButton,
  LinearProgress,
  linearProgressClasses,
  Stack,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeUploadFile } from '../../reducers/uploadReducer';
import CloseIcon from '@mui/icons-material/Close';

const StyledUploadFile = styled('div')(({ theme }) => ({
  // color: theme.palette.primary.secondary,
  padding: '1rem 0',
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === 'light' ? theme.palette.primary : '#308fe8',
  },
}));

const UploadFile = ({ file }) => {
  const dispatch = useDispatch();

  return (
    <StyledUploadFile>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography variant="body2" gutterBottom>
          {file.name}
        </Typography>
        <div>
          <IconButton
            variant="contained"
            aria-haspopup="true"
            color="inherit"
            onClick={() => dispatch(removeUploadFile(file.id))}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
      </Stack>
      <BorderLinearProgress variant="determinate" value={file.progress} />
    </StyledUploadFile>
  );
};

export default UploadFile;
