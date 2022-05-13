import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../actions/user';
import {
  Stack,
  Box,
  Typography,
  MenuItem,
  Menu,
  Avatar,
  Divider,
  ListItemIcon,
  TextField,
  IconButton,
  Collapse,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';

const TitleBox = styled('div')(({ theme }) => ({
  color: theme.palette.secondary,
  '&::after': {
    position: 'absolute',
    top: '10vh',
    content: '""',
    width: '70vw',
    height: 1,
    background: 'rgba(0, 0, 0, 0.05)',
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  padding: '2.25rem 1.5rem 1rem',
}));

const NavBar = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const { isAuth, currentUser } = useSelector((state) => state.user);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledBox>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          padding: '.25rem',
        }}
      >
        <TitleBox>
          <Typography variant="h4">Привет, {currentUser.login}</Typography>
        </TitleBox>

        <Stack direction="row" spacing={1}>
          <Collapse orientation="horizontal" in={showSearch}>
            <Box>
              <TextField
                fullWidth
                id="search"
                name="serch"
                variant="standard"
                placeholder="Поиск по файлам"
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

          <IconButton size="large" aria-haspopup="true" color="inherit">
            <NotificationsIcon />
          </IconButton>

          {isAuth && (
            <>
              <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={currentUser.login}
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem>
                  <Avatar /> Профиль
                </MenuItem>
                <MenuItem>
                  <Avatar /> Мой аккаунт
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Настройки
                </MenuItem>
                <MenuItem onClick={() => dispatch(logout())}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Выйти
                </MenuItem>
              </Menu>
            </>
          )}
        </Stack>
      </Stack>
    </StyledBox>
  );
};

export default NavBar;
