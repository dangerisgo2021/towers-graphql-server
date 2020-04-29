const { insertMatch } = require("../repo/insertMatch");

exports.createMatch = async ({ roomId, matchConfigId, board }) =>
  insertMatch({
    roomId,
    matchConfigId,
    board,
    moves: [],
    winner: null,
    started: false, // set to true on first move
    created: new Date().getTime(),
  });
