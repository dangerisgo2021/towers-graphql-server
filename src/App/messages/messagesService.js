const { insertMessage, findMessages } = require("./messagesRepo");
const { publish } = require("../../PubSub");

exports.addMessage = async ({ text }) => {
  //validate message
  if (!text) {
    throw new Error("need text to create message");
  }
  //add message to messages collection in db
  const newMessage = await insertMessage({
    text,
  });
  console.log({ newMessage });
  //publish new Message to subscribers
  publish("newMessage", newMessage).catch(console.error);
  //return added message
  return newMessage;
};

exports.readMessages = async () => findMessages();
