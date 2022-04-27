import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ABOUT_PAGE, HELP_PAGE, LOGIN_PAGE } from '../../../utils/const';
import PersonIcon from '@mui/icons-material/Person';

const StyledHeaderMenu = styled('div')({
  padding: '10px 15px',
});
const NavBar = () => {
  return (
    <StyledHeaderMenu>
      <Link to={ABOUT_PAGE}>
        <Button size="large" variant="text" color={'secondary'}>
          О проекте
        </Button>
      </Link>
      <Link to={HELP_PAGE}>
        <Button size="large" variant="text" color={'secondary'}>
          Помощь и обратная связь
        </Button>
      </Link>
      <Link to={LOGIN_PAGE}>
        <Button
          variant="contained"
          size="large"
          color={'secondary'}
          sx={{ margin: '0 2rem 0rem 4rem' }}
          startIcon={<PersonIcon />}
        >
          Войти
        </Button>
      </Link>
    </StyledHeaderMenu>
  );
};

export default NavBar;
