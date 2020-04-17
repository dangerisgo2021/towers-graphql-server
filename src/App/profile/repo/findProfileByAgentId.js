const { getDb } = require("../../../database");

exports.findProfileByAgentId = async ({ agentId }) => {
  return getDb()
    .collection("profiles")
    .findOne({ agentId })
    .catch(console.error);
};
