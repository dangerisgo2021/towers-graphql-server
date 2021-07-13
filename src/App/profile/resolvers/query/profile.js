const {
  findByUserIdOrCreateProfile,
} = require("../../service/findByUserIdOrCreateProfile");
exports.profile = (parent, args) => {
  return findByUserIdOrCreateProfile({ userId: args.userId });
};
