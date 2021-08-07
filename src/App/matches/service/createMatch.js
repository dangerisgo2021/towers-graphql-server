const { createMatch } = require("../repo/createMatch");

exports.createMatch = async ({ roomId, matchConfigId, board }) =>
  createMatch({
    roomId,
    matchConfigId,
    board,
    moves: [],
    created: new Date().getTime(),
  });
