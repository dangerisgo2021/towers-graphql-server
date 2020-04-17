const { findMessages } = require("../repo/findMessages");

exports.readMessages = async () => findMessages();
