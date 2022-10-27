const { isNil } = require("lodash");
const { profileReducer, eventTypes } = require("../reducers/profileReducer");

const { getDb } = require("../../../database");

exports.readByAgentId = async ({ agentId, atDateTime }) => {
  if (!agentId) {
    throw new Error("cannot read falsy agentId");
  }

  const snapshotCreatedFilter = isNil(atDateTime)
    ? {}
    : {
        $lte: atDateTime,
      };

  const query = { agentId, ...snapshotCreatedFilter };
  //read profile snapshot
  const profileSnapshot = await getDb()
    .collection("profile_snapshots")
    .find(query)
    .sort({ created: -1 })
    .limit(1);

  const createdQuery = profileSnapshot
    ? { created: { $gt: profileSnapshot.created } }
    : {};

  const events = await getDb()
    .collection("events")
    .find({ type: { $in: eventTypes }, ...createdQuery })
    .toArray();
  console.log({ events });

  return events.reduce(profileReducer, {});
};
