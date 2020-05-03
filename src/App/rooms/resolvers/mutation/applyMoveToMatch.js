const {
  applyMoveToMatch: applyMoveToMatchService,
} = require("../../service/applyMoveToMatch");

exports.applyMoveToMatch = async (parent, args) => {
  const { input } = args;
  const { roomId, ...move } = input;
  return applyMoveToMatchService({ roomId, move });
};
