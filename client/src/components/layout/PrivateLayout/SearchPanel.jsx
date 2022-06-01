import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { serchFiles, getFiles } from '../../../actions/file';
import { Box, Collapse, IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchPanel = () => {
  const dispatch = useDispatch();
  const { currentDir } = useSelector((state) => state.files);
  const [showSearch, setShowSearch] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(false);

  const searchChangeHandler = (e) => {
    setSearchName(e.target.value);
    if (searchTimeout != false) {
      clearTimeout(searchTimeout);
    }

    if (e.target.value != '') {
      setSearchTimeout(
        setTimeout(
          (value) => {
            dispatch(serchFiles(value));
          },
          500,
          e.target.value
        )
      );
    } else {
      dispatch(getFiles(currentDir));
    }
  };

  return (
    <Stack direction="row">
      <Collapse orientation="horizontal" in={showSearch}>
        <Box>
          <TextField
            fullWidth
            id="search"
            name="serch"
            variant="standard"
            placeholder="Поиск по файлам"
            value={searchName}
            onChange={(e) => searchChangeHandler(e)}
            sx={{
              width: '25vw',
            }}
          />
        </Box>
      </Collapse>

      <IconButton
        size="large"
        aria-haspopup="true"
        color="inherit"
        onClick={() => setShowSearch((prev) => !prev)}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default SearchPanel;
