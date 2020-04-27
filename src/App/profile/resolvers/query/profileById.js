const { findById } = require("../../service/findById");

exports.profileById = ({ profileId }, { id }) => {
  return findById({ id: id || profileId });
};
