const { findRoomById } = require("../repo/findRoomById");

exports.findRoomById = async ({id}) => findRoomById({id});
