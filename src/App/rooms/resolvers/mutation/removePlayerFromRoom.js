const {
  removePlayerFromRoom: removePlayerFromRoomService,
} = require("../../service/removePlayerFromRoom");

exports.removePlayerFromRoom = async (parent, { input }, context) =>
  removePlayerFromRoomService({ ...input, userId: context.user });
