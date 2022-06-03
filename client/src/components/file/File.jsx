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
import {
  deleteFiles,
  downloadFile,
  setFavoritFile,
  getFiles,
  deleteFavoritFile,
} from '../../actions/file';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useLocation } from 'react-router-dom';
import { CLOUD_SPAСE_PAGE } from '../../utils/const';
import {
  addToBasketFile,
  deleteFromBasketFile,
} from '../../actions/file.basket';

const File = ({ file }) => {
  const dispatch = useDispatch();
  const { currentDir, view } = useSelector((state) => state.files);
  const [contextMenu, setContextMenu] = useState(null);
  const location = useLocation();
  const isSpace = location.pathname === CLOUD_SPAСE_PAGE;

  const openDirectoryHandler = (e, file) => {
    e.preventDefault();
    if (!isSpace) return;

    if (e.ctrlKey) {
      //TO DO : select file
      return;
    }

    if (file.type === 'dir') {
      dispatch(setCurrentDir(file.id));
      dispatch(pushToHistory(currentDir));
    } else return;
  };

  const addedFavoritesHandler = async (e, file) => {
    e.preventDefault();
    await setFavoritFile(file.id);

    dispatch(getFiles(currentDir));
    setContextMenu(null);
  };

  const deleteFavoritesHandler = async (e, file) => {
    e.preventDefault();
    await deleteFavoritFile(file.id);
    dispatch(getFiles(currentDir));
    setContextMenu(null);
  };

  const moveToTrashHandler = async (e, file) => {
    e.preventDefault();
    await addToBasketFile(file.id);
    dispatch(getFiles(currentDir));
    setContextMenu(null);
  };

  const removeHandler = (e, file) => {
    e.preventDefault();
    dispatch(deleteFiles(file.id));
    setContextMenu(null);
  };

  const restoreFromTrashHandler = async (e, file) => {
    e.preventDefault();
    await deleteFromBasketFile(file.id);
    dispatch(getFiles(currentDir));
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
        handleAddFavorit={addedFavoritesHandler}
        handleMoveToTrash={moveToTrashHandler}
        handleDownload={downloadHandler}
        handleDeleteFavorit={deleteFavoritesHandler}
        handleRestoreFromTrash={restoreFromTrashHandler}
        handleRemove={removeHandler}
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
          <TableCell component="th" scope="row" sx={{ width: '10%' }}>
            <div style={{ margin: '.25rem 0 0 0' }}>
              <img src={file.type === 'dir' ? folderLogo : fileLogo} />
            </div>
          </TableCell>
          <TableCell align="left" sx={{ width: '45%' }}>
            <p>{file.name}</p>
          </TableCell>
          <TableCell align="center" sx={{ width: '10%' }}>
            <p> {formatDate(file.updatedAt)}</p>
          </TableCell>
          <TableCell align="center" sx={{ width: '15%' }}>
            {file.type === 'dir' ? '' : `Файл "${file.type}"`}
          </TableCell>
          <TableCell align="center" sx={{ width: '10%' }}>
            {file.size && formatSize(file.size)}
          </TableCell>
          <TableCell align="center" sx={{ width: '10%' }}>
            {file.isFavorit && <StarRateIcon color="primary" />}
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
