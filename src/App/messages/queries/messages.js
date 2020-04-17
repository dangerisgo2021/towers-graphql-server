const { readMessages } = require("../messagesService");
exports.messages = () => {
  return readMessages();
};
