import React, { useState } from 'react'
import { Box, Typography, Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { BadgeAvatar } from './index'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const useStyles = makeStyles(() => ({
  root: {
    height: 44,
    marginTop: 23,
    marginLeft: 6,
    display: 'flex',
    alignItems: 'center',
  },
  subContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
  },
  username: {
    letterSpacing: -0.23,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 17,
  },
  ellipsis: {
    color: '#95A7C4',
    marginRight: 24,
    opacity: 0.5,
    cursor: 'pointer',
  },
  paper: {
    marginTop: 30,
  }
}))

const CurrentUser = (props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const user = props.user || {}

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box className={classes.root}>
      <BadgeAvatar photoUrl={user.photoUrl} online={true} />
      <Box className={classes.subContainer}>
        <Typography className={classes.username}>{user.username}</Typography>
        <MoreHorizIcon
          classes={{ root: classes.ellipsis }}
          onClick={handleClick}
        />
        <Menu
          id="logout-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          classes={{ paper: classes.paper }}
        >
          <MenuItem onClick={props.handleLogout}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(CurrentUser)
