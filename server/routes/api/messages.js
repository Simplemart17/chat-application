const router = require("express").Router();
const { Conversation, Message } = require("../../db/models");
const onlineUsers = require("../../onlineUsers");

// expects {recipientId, text, conversationId } in body (conversationId will be null if no conversation exists yet)
router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }

    const senderId = req.user.id;
    const { recipientId, text, conversationId, sender } = req.body;

      // get the conversation that existed between the two users
      const conversation = await Conversation.findConversation(
        senderId,
        recipientId
      );

    // check if the conversationId matches the existing conversation between the users
    if (conversation && conversation.id === conversationId) {
      const message = await Message.create({ senderId, text, conversationId });
      return res.json({ message, sender });
    } else {
      // create new conversation between two users
      const conversation = await Conversation.create({
        user1Id: senderId,
        user2Id: recipientId,
      });
      if (onlineUsers.includes(sender.id)) {
        sender.online = true;
      }
      const message = await Message.create({
        senderId,
        text,
        conversationId: conversation.id,
      });
      res.json({ message, sender });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
