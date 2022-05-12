import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { logout } from '../../../actions/user';

const NavBar = () => {
  const { isAuth, currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: '2rem 1rem 0rem 1rem' }}>
      {/* <AppBar position="static"> */}
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Привет, {currentUser.login}
        </Typography>
        <IconButton size="large" aria-haspopup="true" color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton size="large" aria-haspopup="true" color="inherit">
          <SettingsIcon />
        </IconButton>
        {isAuth && (
          <div>
            <IconButton onClick={handleMenu} sx={{ p: 0 }}>
              <Avatar
                alt={currentUser.login}
                src="/static/images/avatar/2.jpg"
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Профиль</MenuItem>
              <MenuItem onClick={handleClose}>Мой аккаунт</MenuItem>
              <MenuItem onClick={() => dispatch(logout())}>Выйти</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
      {/* </AppBar> */}
    </Box>
  );
};

export default NavBar;
