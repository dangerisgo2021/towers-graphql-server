const { createRoom } = require("../service/createRoom");

exports.createRoom = async (_, { createRoomInput }) => {
  return createRoom(createRoomInput);
};
