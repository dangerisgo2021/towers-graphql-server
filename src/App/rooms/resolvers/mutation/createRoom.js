const { createRoom } = require("../../service/createRoom");

exports.createRoom = async (_, { input }) => {
  return createRoom(input);
};
