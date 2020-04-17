const {
  findByAgentIdOrCreateProfile,
} = require("../service/findByAgentIdOrCreateProfile");
exports.profile = (parent, args) => {
  return findByAgentIdOrCreateProfile({ agentId: args.agentId });
};
