import React from 'react';
import { Box, Badge } from '@material-ui/core';
import { BadgeAvatar, ChatContent } from '../Sidebar';
import { withStyles } from '@material-ui/core/styles';

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
  const { setActiveChat, readMessage, classes, conversation, activeConvo, unreadMsg } = props;
  const { otherUser, unread } = conversation;
  
  const handleClick = async (conversation, body) => {
    await setActiveChat(conversation.otherUser.username);
    unreadMsg.length && await readMessage(body);
  }


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
          <Badge
            badgeContent={unread}
            color="primary"
          />
        </Box>
      )}
    </Box>
  )
}

export default withStyles(styles)(Chat);
