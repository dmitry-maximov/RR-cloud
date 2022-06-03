import React from 'react';
import { Stack, Typography } from '@mui/material';
import { orange } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useLocation } from 'react-router-dom';
import {
  FAVORIT_PAGE,
  START_PAGE,
  CLOUD_SPAСE_PAGE,
  SETTINGS_PAGE,
} from '../../../utils/const';
import AddedModal from './AddedModal';
import Uploader from '../../uploader/Uploader';
import { useNavigate } from 'react-router-dom';
import MemoryWidget from './MemoryWidget';

const SideBar = () => {
  let navigate = useNavigate();
  const location = useLocation();

  const StyledBox = styled(Box)(({ theme }) => ({
    color: theme.palette.text.primary,
    padding: '2rem',
  }));

  const Item = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.primary,
  }));

  return (
    <Box>
      <StyledBox>
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="left"
          spacing={5}
        >
          <Link to={START_PAGE}>
            <Item>
              <Stack direction="row" justifyContent="center">
                <WbCloudyIcon sx={{ fontSize: 60, color: orange[800] }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    padding: '1rem 0.75rem',
                  }}
                >
                  RR-cloud
                </Typography>
              </Stack>
            </Item>
          </Link>
          <AddedModal />
          <Item>
            <List>
              <ListItem
                button
                onClick={() => navigate(CLOUD_SPAСE_PAGE)}
                selected={location.pathname === CLOUD_SPAСE_PAGE}
              >
                <ListItemIcon>
                  <FilterDramaIcon />
                </ListItemIcon>
                <ListItemText primary="Мое облако" />
              </ListItem>
              <ListItem
                button
                onClick={() => navigate(FAVORIT_PAGE)}
                selected={location.pathname === FAVORIT_PAGE}
              >
                <ListItemIcon>
                  <StarHalfIcon />
                </ListItemIcon>
                <ListItemText primary="Избранное" />
              </ListItem>
              <ListItem
                button
                onClick={() => navigate(SETTINGS_PAGE)}
                selected={location.pathname === SETTINGS_PAGE}
              >
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Настройки" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Корзина" />
              </ListItem>
            </List>
          </Item>
          <Item>
            <MemoryWidget />
          </Item>
        </Stack>
      </StyledBox>
      <Uploader />
    </Box>
  );
};

export default SideBar;
