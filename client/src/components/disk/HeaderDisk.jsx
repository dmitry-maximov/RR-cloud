import { Stack, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentDir,
  setListView,
  setPlateView,
} from '../../reducers/fileReducer';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ViewListIcon from '@mui/icons-material/ViewList';
import SortIcon from '@mui/icons-material/Sort';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const HeaderDisk = () => {
  const dispatch = useDispatch();
  const { history, view } = useSelector((state) => state.files);

  const backClickHandler = () => {
    const backDirId = history.pop();
    dispatch(setCurrentDir(backDirId));
  };

  const setListViewClickHandler = () => {
    dispatch(setListView());
  };

  const setPlateViewClickHandler = () => {
    dispatch(setPlateView());
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      spacing={2}
      sx={{
        padding: '.25rem',
      }}
    >
      <IconButton
        variant="contained"
        size="large"
        aria-haspopup="true"
        color={history.length > 0 ? 'primary' : 'inherit'}
        onClick={() => backClickHandler()}
      >
        <KeyboardBackspaceIcon />
      </IconButton>
      <div>
        <IconButton size="large" aria-haspopup="true" color="inherit">
          <SortIcon />
        </IconButton>
        <IconButton
          size="large"
          aria-haspopup="true"
          color={view === 'list' ? 'primary' : 'inherit'}
          onClick={() => setListViewClickHandler()}
        >
          <ViewListIcon />
        </IconButton>
        <IconButton
          size="large"
          aria-haspopup="true"
          color={view === 'plate' ? 'primary' : 'inherit'}
          onClick={() => setPlateViewClickHandler()}
        >
          <ViewModuleIcon />
        </IconButton>
      </div>
    </Stack>
  );
};

export default HeaderDisk;