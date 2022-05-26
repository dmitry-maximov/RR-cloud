import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import DeleteIcon from '@mui/icons-material/Delete';

const ContextMenu = ({
  contextMenu,
  handleClose,
  handleOpenFolder,
  handleAddFavorit,
  handleMoveToTrash,
}) => {
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
      <MenuItem onClick={(e) => handleOpenFolder(e, contextMenu.file)}>
        <ListItemIcon></ListItemIcon>
        Открыть
      </MenuItem>
      <MenuItem onClick={(e) => handleAddFavorit(e, contextMenu.file)}>
        <ListItemIcon>
          <StarHalfIcon fontSize="small" />
        </ListItemIcon>
        Добавить в избранное
      </MenuItem>
      <MenuItem onClick={(e) => handleMoveToTrash(e, contextMenu.file)}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        Удалить
      </MenuItem>
    </Menu>
  );
};

export default ContextMenu;
