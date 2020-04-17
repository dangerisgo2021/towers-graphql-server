const { newMessage } = require("./subscriptions/newMessage");
const { messages } = require("./queries/messages");
const { addMessage } = require("./mutations/addMessage");

exports.messagesResolver = {
  Mutation: {
    addMessage,
  },
  Query: {
    messages,
  },
  Subscription: {
    newMessage,
  },
};
