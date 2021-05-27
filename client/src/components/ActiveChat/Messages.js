import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import ScrollToBottom from 'react-scroll-to-bottom';

const useStyles = makeStyles(() => ({
  root: {
    height: '68vh',
  },
}));

const Messages = (props) => {
  const classes = useStyles();
  const { messages, otherUser, userId } = props;

  // reorder the message to make chat conversation easily followed
  const sortMessage = (messg) => [...messg].sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return -1
    } else if (a.createdAt > b.createdAt) {
      return 1
    }
    return 0
  });

  return (
    <ScrollToBottom className={classes.root}>
      <Box>
        {sortMessage(messages).map((message) => {
          const time = moment(message.createdAt).format("h:mm");

          return message.senderId === userId ? (
            <SenderBubble key={message.id} text={message.text} time={time} />
          ) : (
            <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
          );
        })}
      </Box>
    </ScrollToBottom>
  );
};

export default Messages;
