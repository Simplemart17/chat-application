import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid, CssBaseline } from '@material-ui/core'
import { login } from './store/utils/thunkCreators'
import { makeStyles } from '@material-ui/core/styles'
import { AuthPageImage, LoginPageDetails } from './components/AuthPage'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
  },
}))

const Login = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const { user, login } = props

  const handleLogin = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value

    await login({ username, password })
  }

  if (user.id) {
    return <Redirect to="/home" />
  }

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <AuthPageImage />
      <LoginPageDetails
        handleLogin={handleLogin}
        buttonLink={() => history.push('/register')}
      />
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
