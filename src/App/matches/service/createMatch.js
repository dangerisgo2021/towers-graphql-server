const { createMatch } = require("../repo/createMatch");

exports.createMatch = async ({ roomId, matchConfigId, board }) =>
  createMatch({
    roomId,
    matchConfigId,
    board,
    moves: [],
    winner: null,
    started: false, // set to true on first move
    created: new Date().getTime(),
  });
