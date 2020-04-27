const { findProfileByAgentId } = require("../repo/findProfileByAgentId");
const { createProfile } = require("../repo/createProfile");

const createInitialProfile = ({ agentId, name }) => ({
  agentId,
  created: new Date().getTime(),
  updated: new Date().getTime(),
  rating: 2000,
  name: name || "Anon" + agentId.substring(5),
});
exports.findByAgentIdOrCreateProfile = async ({ agentId }) => {
  let profile = await findProfileByAgentId({ agentId });
  if (!profile) {
    profile = await createProfile(createInitialProfile({ agentId }));
  }
  return profile;
};
