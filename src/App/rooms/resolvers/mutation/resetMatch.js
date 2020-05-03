const { resetMatch: resetMatchService } = require("../../service/resetMatch");

exports.resetMatch = async (_, { roomId }) => resetMatchService({ roomId });
