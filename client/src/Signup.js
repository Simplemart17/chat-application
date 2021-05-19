import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { register } from './store/utils/thunkCreators'
import { AuthPageImage, SignUpPageDetails } from './components/AuthPage'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
  },
}))

const Login = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const { user, register } = props
  const [formErrorMessage, setFormErrorMessage] = useState({})

  const handleRegister = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value

    if (!username.length) {
      setFormErrorMessage({ username: 'Username is a required field' })
      return
    }
    if (!email.length) {
      setFormErrorMessage({ email: 'Email is a required field' })
      return
    }
    if (!password.length) {
      setFormErrorMessage({ password: 'Password is a required field' })
      return
    }

    await register({ username, email, password })
  }

  if (user.id) {
    return <Redirect to="/home" />
  }

  return (
    <Grid container className={classes.root}>
      <AuthPageImage />
      <SignUpPageDetails
        handleRegister={handleRegister}
        formErrorMessage={formErrorMessage}
        buttonLink={() => history.push('/login')}
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
    register: (credentials) => {
      dispatch(register(credentials))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
