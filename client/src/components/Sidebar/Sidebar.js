import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Search, Chat, CurrentUser } from "./index.js";

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: 21,
    paddingRight: 21,
    flexGrow: 1
  },
  title: {
    fontSize: 20,
    letterSpacing: -0.29,
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 15
  }
}));

const Sidebar = (props) => {
  const classes = useStyles();
  const conversations = props.conversations || [];
  const { handleChange, searchTerm, handleLogout, user, activeConversation, setActiveChat, readMessage } = props;

  return (
    <Box className={classes.root}>
      <CurrentUser handleLogout={handleLogout} user={user} />
      <Typography className={classes.title}>Chats</Typography>
      <Search handleChange={handleChange} />
      {conversations
        .filter((conversation) => conversation.otherUser.username.includes(searchTerm))
        .map((conversation) => {
          return <Chat 
            conversation={conversation}
            key={conversation.otherUser.username}
            user={user}
            activeConvo={conversation.otherUser.username === activeConversation}
            setActiveChat={setActiveChat}
            readMessage={readMessage}
            unreadMsg={conversation
              .messages
              .filter((data) => data.senderId !== user.id && data.status === false)
              .map((msg) => msg.id)}
          />;
        })}
    </Box>
  );
};

export default Sidebar;
