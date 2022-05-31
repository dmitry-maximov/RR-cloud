import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pushToHistory, setCurrentDir } from '../../reducers/fileReducer';
import { Grid, TableCell, TableRow, Typography } from '@mui/material';
import folderLogo from '../../img/m_folder.png';
import fileLogo from '../../img/m_file.png';
import folderPlateLogo from '../../img/folder.png';
import filePlateLogo from '../../img/file.png';
import { formatDate, formatSize } from '../../utils/formatting';
import { Box } from '@mui/system';
import ContextMenu from '../contextmenu/ContextMenu';
import { downloadFile } from '../../actions/file';

const File = ({ file }) => {
  const dispatch = useDispatch();
  const { currentDir, view } = useSelector((state) => state.files);
  const [contextMenu, setContextMenu] = useState(null);

  const openDirectoryHandler = (e, file) => {
    e.preventDefault();
    if (e.ctrlKey) {
      //TO DO : select file
      return;
    }
    if (file.type === 'dir') {
      dispatch(setCurrentDir(file.id));
      dispatch(pushToHistory(currentDir));
    } else return;
  };

  const addedАavoritesHandler = (e, file) => {
    e.preventDefault();
    //TO DO :
    alert(`move to favorit file id=${file.id}`);
    setContextMenu(null);
  };
  const moveToTrashHandler = (e, file) => {
    e.preventDefault();
    //TO DO :
    alert(`move to trash file id=${file.id}`);

    setContextMenu(null);
  };

  const downloadHandler = async (e, file) => {
    e.preventDefault();
    const response = await downloadFile(file.id);
    if (response.status === 200) {
      const blob = new Blob([response.data]);
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
    setContextMenu(null);
  };

  const openContextMenuHandler = (e, file) => {
    e.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: e.clientX + 2,
            mouseY: e.clientY - 6,
            file,
          }
        : null
    );
  };

  const closeContextMenuHandler = (e) => {
    e.preventDefault();
    setContextMenu(null);
  };

  return (
    <>
      <ContextMenu
        contextMenu={contextMenu}
        handleClose={closeContextMenuHandler}
        handleOpenFolder={openDirectoryHandler}
        handleAddFavorit={addedАavoritesHandler}
        handleMoveToTrash={moveToTrashHandler}
        handleDownload={downloadHandler}
      />
      {view === 'list' ? (
        <TableRow
          sx={{
            th: { padding: '0 16px' },
            'td, th': { border: 0 },
            '&:hover': {
              backgroundColor: '#0000000a',
              cursor: 'pointer',
            },
            cursor: 'context-menu',
          }}
          onClick={(e) => openDirectoryHandler(e, file)}
          onContextMenu={(e) => openContextMenuHandler(e, file)}
        >
          <TableCell component="th" scope="row">
            <div style={{ margin: '.25rem 0 0 0' }}>
              <img src={file.type === 'dir' ? folderLogo : fileLogo} />
            </div>
          </TableCell>
          <TableCell align="left">
            <p>{file.name}</p>
          </TableCell>
          <TableCell align="center">
            <p> {formatDate(file.updatedAt)}</p>
          </TableCell>
          <TableCell align="center">
            {file.type === 'dir' ? '' : `Файл "${file.type}"`}
          </TableCell>
          <TableCell align="center">
            {file.size && formatSize(file.size)}
          </TableCell>
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
              <img
                src={file.type === 'dir' ? folderPlateLogo : filePlateLogo}
              />
              <Typography variant="p">{file.name}</Typography>
            </Box>
          </Grid>
        </>
      )}
    </>
  );
};

export default File;
