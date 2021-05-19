import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '45px 0px 70px 0px',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      paddingTop: 15
    },
  },
  description: {
    fontSize: 17,
    letterSpacing: -0.29,
    marginRight: 15,
    color: '#BEC4B6',
  },
  button: {
    fontSize: 17,
    backgroundColor: '#FFFFFF',
    color: theme.palette.primary.main,
    paddingTop: "15px",
    paddingBottom: "15px",
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#FFFFFF',
  },
}
}))

const AuthPageHeader = (props) => {
  const classes = useStyles()
  const { description, buttonName, buttonLink } = props

  return (
    <Grid container alignItems="center" justify="flex-end" className={classes.root}>
      <Typography className={classes.description}>{description}</Typography>
      <Button
        onClick={buttonLink}
        variant="contained"
        size="large"
        className={classes.button}
      >
        {buttonName}
      </Button>
    </Grid>
  )
}

export default AuthPageHeader
