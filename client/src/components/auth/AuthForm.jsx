import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const AuthForm = (props) => {
  const boxwrapper = {
    flex: 1,
    boxShadow: 'rgba(245, 242, 229, 0.1) 1px 1px 2px 0px',
    border: '1px solid #ffede1',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const StyledBox = styled('div')({
    padding: '15% 5%',
  });

  return (
    <Box sx={boxwrapper}>
      <StyledBox>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="left"
          spacing={2}
        >
          <Typography
            variant="h4"
            textAlign={'center'}
            sx={{
              color: 'secondary.main',
              fontWeight: 500,
            }}
          >
            {props.caption}
          </Typography>
          {props.children}
        </Stack>
      </StyledBox>
    </Box>
  );
};

export default AuthForm;
