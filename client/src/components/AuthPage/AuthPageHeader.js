import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 89,
    marginBottom: 35,
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
    padding: "15px 25px",
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
    <Box container className={classes.root}>
      <Typography className={classes.description}>{description}</Typography>
      <Button
        onClick={buttonLink}
        variant="contained"
        size="large"
        className={classes.button}
      >
        {buttonName}
      </Button>
    </Box>
  )
}

export default AuthPageHeader
