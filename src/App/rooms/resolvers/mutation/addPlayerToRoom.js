const { addPlayerToRoom } = require("../../service/addPlayerToRoom");

exports.addPlayerToRoom = async (_, { input }, context) => {
  return addPlayerToRoom({ ...input, userId: context.user });
};
