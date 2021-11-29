import React, { FormEvent, useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import { getUser } from '../../services/getUser';

import classes from './styles.module.scss';

console.log('classes', classes);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn({ onSignIn }: any) {
  const [login, setLogin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const user = await getUser(login);
      if (onSignIn) {
        onSignIn(user);
      }
    } catch (error) {
      // TODO: alerts from UI-kit
      console.warn('Error on login', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.foo}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={onSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Login"
            name="login"
            value={login}
            onChange={({ target: { value } }) => {
              setLogin(value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              {/* eslint-disable-next-line prettier/prettier */}
              <Link to="/auth/signup">{'Don\'t have an account? Sign Up'}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
