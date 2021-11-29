import { styled } from '@mui/system';
import BaseAvatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export const Paper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const Avatar = styled(BaseAvatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary,
}));

export const Form = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
}));

export const Submit = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));
