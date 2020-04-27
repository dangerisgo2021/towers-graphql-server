const { findRoomById } = require("../../service/findRoomById");
exports.room = (parent, { id }) => findRoomById({ id });
