import React, { FormEvent, useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import { getUser } from '../../services/getUser';
import { useStyles } from './styles';

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
  const classes = useStyles();

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
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={onSubmit} className={classes.form} noValidate>
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
            className={classes.submit}
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
