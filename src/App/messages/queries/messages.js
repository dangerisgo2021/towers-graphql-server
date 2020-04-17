const { readMessages } = require("../service/readMessages");
exports.messages = () => {
  return readMessages();
};
