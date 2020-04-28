const { insertMatch } = require("../repo/insertMatch");

exports.createMatch = async ({ roomId, matchConfigId }) =>
  insertMatch({
    roomId,
    matchConfigId,
    moves: [],
    board: null,
    winner: null,
    started: false,
    created: new Date().getTime(),
  });
