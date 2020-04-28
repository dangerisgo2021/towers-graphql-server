const { subscribe } = require("../../../../PubSub");
const { withFilter } = require("apollo-server-express");

exports.updatedRoom = {
  resolve: ({ roomId }) => roomId,
  subscribe: withFilter(
    () => subscribe("roomUpdated"),
    (payload, variables) => {
      return payload.roomId === variables.roomId;
    }
  ),
};
