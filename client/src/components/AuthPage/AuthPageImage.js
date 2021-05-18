import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import backgroundImage from '../../assets/bg-img.png'
import chatIcon from '../../assets/bubble.svg'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    backgroundImage: `linear-gradient(to bottom, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    flexDirection: 'column',
    opacity: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 35,
    marginTop: 35,
    color: '#FFFFFF',
    maxWidth: '70%',
    textAlign: 'center',
  },
}))

const AuthPageImage = () => {
  const classes = useStyles()

  return (
    <Grid item xs className={classes.root}>
      <Box>
        <img src={chatIcon} alt="chat icon" />
      </Box>
      <Typography className={classes.description}>
        Converse with anyone with any language
      </Typography>
    </Grid>
  )
}

export default AuthPageImage
