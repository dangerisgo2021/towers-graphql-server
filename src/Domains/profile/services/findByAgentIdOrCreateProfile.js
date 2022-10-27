const { readByAgentId } = require("../repo/readByAgentId");
const { createProfile } = require("../repo/createProfile");

const createInitialProfile = ({ agentId, name }) => ({
  agentId,
  created: new Date().getTime(),
  name: name || "Anon-" + agentId.substring(5),
});

exports.findByAgentIdOrCreateProfile = async ({ agentId }) => {
  let profile = await readByAgentId({ agentId });
  if (!profile) {
    profile = await createProfile(createInitialProfile({ agentId }));
  }
  return profile;
};
