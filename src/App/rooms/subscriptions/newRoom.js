const { subscribe } = require("../../../PubSub");

exports.newRoom = {
  resolve: (room) => room,
  subscribe: () => subscribe("newRoom"),
};
