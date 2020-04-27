const { getDb } = require("../../../database");

exports.findProfileByAgentId = async ({ agentId }) => {
  if (!agentId) {
    throw new Error("cannot find falsy agentId");
  }

  const doc = await getDb()
    .collection("profiles")
    .findOne({ agentId })
    .catch(console.error);
  return doc ? { ...doc, id: doc._id } : null;
};
