const { addPlayerToRoom } = require("../../service/addPlayerToRoom");

exports.addPlayerToRoom = async (_, { input }) => {
  return addPlayerToRoom(input);
};
