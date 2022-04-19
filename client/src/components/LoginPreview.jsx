import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import { orange } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Flex from './UI/Flex';

const boxWrapper = {
  flex: 1,
  overflow: 'hidden',
  px: 3,
  backgroundColor: '#ffede1',
};

const Item = styled('div')(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.primary,
}));

const LoginPreview = () => {
  return (
    <Box sx={boxWrapper}>
      <Flex
        direction={'column'}
        alignItems={'top'}
        justifyContent={'center'}
        margin={'10%'}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="left"
          spacing={3}
        >
          <Item>
            <WbCloudyIcon sx={{ fontSize: 120, color: orange[800] }} />
            <Typography
              variant="h3"
              element="h3"
              sx={{
                fontWeight: 600,
                textTransform: 'uppercase',
                lineHeight: 0.167,
                paddingBottom: '16px',
              }}
            >
              RR-cloud
            </Typography>
          </Item>

          <Item>
            <Typography variant="h4" element="h4" mt={3}>
              Добро пожаловать
            </Typography>
            <Typography variant="p">
              Для использования приложения введите свои учетные данные{' '}
            </Typography>
          </Item>

          <Item>
            <Typography variant="h5" mt={4}>
              У вас нет учетной записи?
            </Typography>

            <Stack spacing={2} direction="row" mt={2}>
              <Button variant="contained" size="large">
                Регистрация
              </Button>
              <Button variant="contained" size="large">
                Регистрация
              </Button>
            </Stack>
          </Item>
        </Stack>
      </Flex>
    </Box>
  );
};

export default LoginPreview;
