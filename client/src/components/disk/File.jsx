import { useDispatch, useSelector } from 'react-redux';
import { pushToHistory, setCurrentDir } from '../../reducers/fileReducer';
import { Grid, TableCell, TableRow, Typography } from '@mui/material';
import folderLogo from '../../img/m_folder.png';
import folderPlateLogo from '../../img/folder.png';
import fileLogo from '../../img/file.png';
import { formatDate } from '../../utils/formatting';
import { Box } from '@mui/system';

const File = ({ file }) => {
  const dispatch = useDispatch();
  const { currentDir, view } = useSelector((state) => state.files);

  const openDirectoryHandler = (file) => {
    if (file.type === 'dir') {
      dispatch(setCurrentDir(file.id));
      dispatch(pushToHistory(currentDir));
    }
  };

  return (
    <>
      {view === 'list' ? (
        <TableRow
          sx={{
            th: { padding: '0 16px' },
            'td, th': { border: 0 },
            '&:hover': {
              backgroundColor: '#0000000a',
              cursor: 'pointer',
            },
          }}
          onClick={() => openDirectoryHandler(file)}
        >
          <TableCell component="th" scope="row">
            <img src={file.type === 'dir' ? folderLogo : fileLogo} />
          </TableCell>
          <TableCell align="center">
            <p>{file.name}</p>
          </TableCell>
          <TableCell align="center">
            <p> {formatDate(file.updatedAt)}</p>
          </TableCell>
          <TableCell align="center">
            {file.type === 'dir' ? '' : file.type}
          </TableCell>
          <TableCell align="center"> {file.size}</TableCell>
        </TableRow>
      ) : (
        <>
          <Grid item xs={2} onClick={() => openDirectoryHandler(file)}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px',
                '&:hover': {
                  backgroundColor: '#0000000a',
                  cursor: 'pointer',
                },
              }}
            >
              <img src={file.type === 'dir' ? folderPlateLogo : fileLogo} />
              <Typography variant="h6">{file.name}</Typography>
            </Box>
          </Grid>
        </>
      )}
    </>
  );
};

export default File;
