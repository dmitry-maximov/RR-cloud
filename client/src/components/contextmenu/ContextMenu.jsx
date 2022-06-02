import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import { useLocation } from 'react-router-dom';
import { CLOUD_SPAСE_PAGE } from '../../utils/const';

const ContextMenu = ({
  contextMenu,
  handleClose,
  handleOpenFolder,
  handleAddFavorit,
  handleMoveToTrash,
  handleDownload,
  handleDeleteFavorit,
}) => {
  const location = useLocation();
  const isSpace = location.pathname === CLOUD_SPAСE_PAGE;
  const file = contextMenu?.file;
  return (
    <Menu
      open={contextMenu !== null}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={
        contextMenu !== null
          ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
          : undefined
      }
    >
      {isSpace && (
        <MenuItem onClick={(e) => handleOpenFolder(e, file)}>
          <ListItemIcon></ListItemIcon>
          Открыть
        </MenuItem>
      )}
      {file && file.isFavorit ? (
        <MenuItem onClick={(e) => handleDeleteFavorit(e, file)}>
          <ListItemIcon>
            <StarHalfIcon fontSize="small" />
          </ListItemIcon>
          Убрать из избранного
        </MenuItem>
      ) : (
        <MenuItem onClick={(e) => handleAddFavorit(e, file)}>
          <ListItemIcon>
            <StarHalfIcon fontSize="small" />
          </ListItemIcon>
          Добавить в избранное
        </MenuItem>
      )}
      <MenuItem onClick={(e) => handleMoveToTrash(e, file)}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        Удалить
      </MenuItem>
      {file && file.type !== 'dir' && (
        <MenuItem onClick={(e) => handleDownload(e, file)}>
          <ListItemIcon>
            <DownloadIcon fontSize="small" />
          </ListItemIcon>
          Скачать
        </MenuItem>
      )}
    </Menu>
  );
};

export default ContextMenu;
