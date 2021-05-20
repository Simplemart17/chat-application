import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Button,
  FormControl,
  TextField,
  Typography,
  InputAdornment,
} from '@material-ui/core'
import { AuthPageHeader } from './index'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 100,
    paddingRight: 100,
    [theme.breakpoints.only('md')]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 35,
  },
  formContainer: {
    marginBottom: 50,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20,
    },
  },
  button: {
    display: 'flex',
    margin: '0 auto',
    fontSize: 17,
    color: '#FFFFFF',
    backgroundColor: theme.palette.primary.main,
    padding: '13px 70px',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#FFFFFF',
    },
  },
}))

const LoginPageDetails = (props) => {
  const classes = useStyles()
  const { handleLogin, buttonLink } = props

  return (
    <Grid item xs className={classes.root}>
      <AuthPageHeader
        description={'Don’t have an account?'}
        buttonName={'Create Account'}
        buttonLink={buttonLink}
      />
      <Box>
        <Typography className={classes.title}>Welcome back!</Typography>
        <form onSubmit={handleLogin}>
          <Grid>
            <Grid className={classes.formContainer}>
              <FormControl fullWidth>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid className={classes.formContainer}>
              <FormControl fullWidth>
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Forgot?</InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              size="large"
              className={classes.button}
            >
              Login
            </Button>
          </Grid>
        </form>
      </Box>
    </Grid>
  )
}

export default LoginPageDetails
