const { findRoomById } = require("../service/findRoomById");
exports.room = (parent, { id }) => {
  return findRoomById({ id });
};
