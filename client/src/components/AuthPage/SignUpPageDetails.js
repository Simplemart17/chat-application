import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Button,
  FormControl,
  TextField,
  FormHelperText,
  Typography
} from '@material-ui/core'
import { AuthPageHeader } from './index'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "#FFFFFF",
    paddingLeft: 100,
    paddingRight: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15
  },
  formContainer: {
    marginBottom: 50
  },
  button: {
    display: "flex",
    margin: "0 auto",
    fontSize: 17,
    color: '#FFFFFF',
    backgroundColor: theme.palette.primary.main,
    padding: "13px 70px",
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#FFFFFF',
  },
}
}))

const SignUpPageDetails = (props) => {
  const classes = useStyles()
  const { handleRegister, formErrorMessage, buttonLink } = props

  return (
    <Grid item xs className={classes.root}>
      <AuthPageHeader
        description={'Already have an account?'}
        buttonName={'Login'}
        buttonLink={buttonLink}
      />
      <Box>
        <Typography className={classes.title}>Create an account.</Typography>
        <form onSubmit={handleRegister}>
          <Grid>
            <Grid className={classes.formContainer}>
              <FormControl error={!!formErrorMessage.username} fullWidth>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
                <FormHelperText>
                  {formErrorMessage.username}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid className={classes.formContainer}>
              <FormControl error={!!formErrorMessage.email} fullWidth>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                />
                <FormHelperText>
                  {formErrorMessage.email}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid className={classes.formContainer}>
              <FormControl error={!!formErrorMessage.password} fullWidth>
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                />
                <FormHelperText>
                  {formErrorMessage.password}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Button type="submit" variant="contained" size="large" className={classes.button}>
              Create
            </Button>
          </Grid>
        </form>
      </Box>
    </Grid>
  )
}

export default SignUpPageDetails
