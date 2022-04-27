import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <StyledBox>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: 250,
            fontWeight: 600,
            textTransform: 'uppercase',
            lineHeight: 0.7,
            color: '#FFF2E5',
          }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          textAlign={'center'}
          sx={{
            fontWeight: 500,
            color: 'secondary.main',
          }}
        >
          Страница не найдена
        </Typography>
        <Typography
          variant="t"
          sx={{
            fontWeight: 400,
            color: 'secondary.main',
            textAlign: 'center',
          }}
        >
          страница, которую вы просматриваете, не закрывается или была
          перемещена.
        </Typography>
        <Button variant="contained" size="large" onClick={() => navigate(-1)}>
          Назад
        </Button>
      </Stack>
    </StyledBox>
  );
};

export default NotFoundPage;
