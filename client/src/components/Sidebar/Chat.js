import React from 'react';
import { Box, Badge } from '@material-ui/core';
import { BadgeAvatar, ChatContent } from '../Sidebar';
import { withStyles } from '@material-ui/core/styles';
import { setActiveChat } from '../../store/activeConversation';
import { connect } from 'react-redux';
import { readMessages } from "../../store/utils/thunkCreators";

const styles = {
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: '0 2px 10px 0 rgba(88,133,196,0.05)',
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'grab',
    },
  },
  chatCount: {
    marginRight: 30,
  },
}

const Chat = (props) => {
  const { setActiveChat, readMessage, classes, conversation, activeConvo, user } = props;
  
  
  const handleClick = async (conversation, body) => {
    await setActiveChat(conversation.otherUser.username);
    await readMessage(body);
  }

  const { otherUser, messages } = conversation;
  const { id } = user;

  // Get the id of unread messages
  const unreadMsg = messages
    .filter((data) => data.senderId !== id && data.status === false)
    .map((x) => x.id);

  return (
    <Box
      onClick={() => handleClick(conversation, unreadMsg)}
      className={classes.root}
    >
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} />
      {!activeConvo && (
        <Box className={classes.chatCount}>
          <Badge badgeContent={unreadMsg.length} color="primary" />
        </Box>
      )}
    </Box>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveChat: (id) => {
      dispatch(setActiveChat(id));
    },
    readMessage: (body) => {
      dispatch(readMessages(body));
    }
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Chat));
