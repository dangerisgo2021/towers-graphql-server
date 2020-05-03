const { updateMatch } = require("../repo/updateMatch");

exports.resetMatch = async ({ id, board }) =>
  updateMatch({
    id,
    board,
    moves: [],
    winner: null,
    started: false, // set to true on first move
    updated: new Date().getTime(),
  });
