const {
  removePlayerFromRoom: removePlayerFromRoomService,
} = require("../../service/removePlayerFromRoom");

exports.removePlayerFromRoom = async (parent,  { input } ) => removePlayerFromRoomService(input);