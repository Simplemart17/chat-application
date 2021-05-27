import React, { useState, useEffect, useRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { SidebarContainer } from "./Sidebar";
import { ActiveChat } from "./ActiveChat";
import { logout, fetchConversations } from "../store/utils/thunkCreators";
import { clearOnLogout } from "../store/index";

const styles = {
  root: {
    height: '100vh',
    overflow: 'hidden'
  },
}

const Home = (props) => {
  const { user, classes, fetchConversations, logout } = props;
  const [state, setState] = useState({ isLoggedIn: false });
  const userRef = useRef(user.id);

  useEffect(() => {
    if (user.id !== userRef.current) {
      setState({ isLoggedIn: true })
    }
  }, [user.id])

  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  const handleLogout = async () => {
    await logout(user.id)
  }

  if (!user.id) {
    // If we were previously logged in, redirect to login instead of register
    if (state.isLoggedIn) return <Redirect to="/login" />
    return <Redirect to="/register" />
  }

  return (
    <Grid container component="main" className={classes.root}>
      <SidebarContainer handleLogout={handleLogout} />
      <ActiveChat />
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    conversations: state.conversations,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (id) => {
      dispatch(logout(id))
      dispatch(clearOnLogout())
    },
    fetchConversations: () => {
      dispatch(fetchConversations())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Home))
