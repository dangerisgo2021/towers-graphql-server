const { startMatch: startMatchService } = require("../../service/startMatch");

exports.startMatch = async (_, { roomId }) => startMatchService({ roomId });
