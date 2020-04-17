const { addMessage } = require("../service/addMessage");

exports.addMessage = async (parent, { text }) => addMessage({ text });
