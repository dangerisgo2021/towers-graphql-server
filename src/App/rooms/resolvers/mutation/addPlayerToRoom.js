const { addPlayerToRoom } = require("../../service/addPlayerToRoom");

exports.addPlayerToRoom = async (_, { addPlayerToRoomInput }) => {
  return addPlayerToRoom(addPlayerToRoomInput);
};
