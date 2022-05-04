import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledRowBox = styled('div')(({ theme }) => ({
  color: theme.secondary,
  display: 'flex',
  padding: '5px',
}));

const RowBoxContact = (props) => {
  return (
    <StyledRowBox>
      {props.children}
      <Typography
        variant="p"
        sx={{
          fontWeight: 600,
          lineHeight: 0.167,
          padding: '.75rem .25rem',
        }}
      >
        {props.caption}
      </Typography>
    </StyledRowBox>
  );
};

const HelpPreview = () => {
  return (
    <Stack
      spacing={2}
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
      color={'secondary.main'}
    >
      <Typography variant="h4">Чем могу помочь?</Typography>
      <Typography variant="p">Заполните форму или напишите письмо</Typography>
      <RowBoxContact caption={'+7 888 345 678'}>
        <PhoneIphoneIcon />
      </RowBoxContact>
      <RowBoxContact caption={'foo@RRcloud.edu'}>
        <AlternateEmailIcon />
      </RowBoxContact>
      <Stack direction="row" spacing={1}>
        <RowBoxContact>
          <GitHubIcon />
        </RowBoxContact>
        <RowBoxContact>
          <TelegramIcon />
        </RowBoxContact>
        <RowBoxContact>
          <LinkedInIcon />
        </RowBoxContact>
      </Stack>
    </Stack>
  );
};

export default HelpPreview;
