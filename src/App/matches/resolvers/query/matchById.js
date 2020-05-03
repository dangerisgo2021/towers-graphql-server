const { findMatchById } = require("../../service/findMatchById");

exports.matchById = (parent, args) => {
  const id = args.id || parent.matchId;
  return id && findMatchById({ id: id || matchId });
};
