const { findMatchById } = require("../../service/findMatchById");

exports.matchById = ({ matchId }, { id }) =>findMatchById({ id: id || matchId });
