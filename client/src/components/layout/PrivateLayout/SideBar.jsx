import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { orange } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { START_PAGE } from '../../../utils/const';
import AddedModal from './AddedModal';

const SideBar = () => {
  const Item = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.primary,
  }));

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:
        theme.palette.mode === 'light' ? theme.palette.primary : '#308fe8',
    },
  }));

  return (
    <Box
      sx={{
        padding: '2rem',
      }}
    >
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
            <ListItem button>
              <ListItemIcon>
                <FilterDramaIcon />
              </ListItemIcon>
              <ListItemText primary="Мое облако" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <StarHalfIcon />
              </ListItemIcon>
              <ListItemText primary="Избранное" />
            </ListItem>
            <ListItem button>
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
          <Typography variant="h6">Занято:</Typography>
          <BorderLinearProgress variant="determinate" value={80} />
          <Typography
            variant="t"
            sx={{
              padding: '.5rem .25rem',
              float: 'right',
            }}
          >
            8GB из 10GB
          </Typography>
        </Item>
      </Stack>
    </Box>
  );
};

export default SideBar;
