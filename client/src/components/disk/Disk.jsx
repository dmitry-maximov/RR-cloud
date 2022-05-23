import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentDir,
  setListView,
  setPlateView,
} from '../../reducers/fileReducer';
import { Stack, IconButton } from '@mui/material';
import FileList from './FileList';
import { getFiles } from '../../actions/file';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ViewListIcon from '@mui/icons-material/ViewList';
import SortIcon from '@mui/icons-material/Sort';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const Disk = () => {
  const dispatch = useDispatch();
  const { currentDir, history, view } = useSelector((state) => state.files);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

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
    <div>
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
      <FileList />
    </div>
  );
};

export default Disk;
