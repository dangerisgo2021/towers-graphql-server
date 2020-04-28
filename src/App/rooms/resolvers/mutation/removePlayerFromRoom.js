const {
  removePlayerFromRoom: removePlayerFromRoomService,
} = require("../../service/removePlayerFromRoom");

exports.removePlayerFromRoom = async (parent, args) => {
  const { input } = args;
  console.log({ parent, input, args });
  return removePlayerFromRoomService(input);
};

// exports.removePlayerFromRoom = async (_, args) => {
//   const { input } = args;
//   console.log({ _, input, args });
//   return removePlayerFromRoomService(input);
// };
