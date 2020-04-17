const { addMessage } = require("../messagesService");
const { messages } = require("../messages");
exports.addMessage = async (parent, { text }) => {
  messages.push(text);
  return addMessage({ text });
};
