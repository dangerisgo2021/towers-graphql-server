const { findProfileByAgentId } = require("../repo/findProfileByAgentId");
const { createProfile } = require("../repo/createProfile");

const createInitialProfile = ({ agentId }) => ({
  agentId,
  created: new Date().getTime(),
  updated: new Date().getTime(),
  rating: 2000,
});
exports.findByAgentIdOrCreateProfile = async ({ agentId }) => {
  let profile = await findProfileByAgentId({ agentId });
  if (!profile) {
    profile = await createProfile(createInitialProfile({ agentId }));
  }
  return profile;
};
