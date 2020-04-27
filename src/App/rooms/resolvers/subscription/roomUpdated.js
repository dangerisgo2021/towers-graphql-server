const { subscribe } = require("../../../../PubSub");

exports.newRoom = {
  resolve: (roomId) => ({ roomId }),
  subscribe: () => subscribe("roomUpdated"),
};
