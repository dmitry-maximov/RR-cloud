import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Stack, Button } from '@mui/material';
import Flex from '../ui/Flex';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import { START_PAGE, REGISTRATION_PAGE, LOGIN_PAGE } from '../../utils/const';

const StyledBox = styled(Box)({
  flex: 1,
  overflow: 'hidden',
  px: 3,
  backgroundColor: '#FFF2E5',
});

const Item = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const LoginPreview = ({ isLogin }) => {
  return (
    <StyledBox>
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
          <Link to={START_PAGE}>
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
          </Link>

          <Item>
            <Typography variant="h4" element="h4" mt={3}>
              Добро пожаловать
            </Typography>
            <Typography variant="p">
              Для использования приложения введите свои учетные данные{' '}
            </Typography>
          </Item>

          {isLogin ? (
            <Item>
              <Typography variant="h5" mt={4}>
                У вас нет учетной записи?
              </Typography>

              <Stack
                spacing={2}
                direction="row"
                justifyContent={'center'}
                mt={2}
              >
                <Link to={REGISTRATION_PAGE}>
                  <Button variant="contained" size="large">
                    Регистрация
                  </Button>
                </Link>
              </Stack>
            </Item>
          ) : (
            <Item>
              <Typography variant="h5" mt={4}>
                Уже есть учетная запись?
              </Typography>

              <Stack
                spacing={2}
                direction="row"
                justifyContent={'center'}
                mt={2}
              >
                <Link to={LOGIN_PAGE}>
                  <Button variant="contained" size="large">
                    Войти
                  </Button>
                </Link>
              </Stack>
            </Item>
          )}
        </Stack>
      </Flex>
    </StyledBox>
  );
};

export default LoginPreview;
