const { searchEvents } = require("../../eventStore/repo/searchEvents");

const { isNil } = require("lodash");
const { profileReducer, eventTypes } = require("../reducers/profileReducer");

const { getDb } = require("../../../database");

exports.readById = async ({ id, atDateTime }) => {
  if (!id) {
    throw new Error("cannot read falsy id");
  }

  const snapshotCreatedFilter = isNil(atDateTime)
    ? {}
    : {
        $lte: atDateTime,
      };

  const query = { id, ...snapshotCreatedFilter };
  //read profile snapshot
  const profileSnapshot = await getDb()
    .collection("profile_snapshots")
    .find(query)
    .sort({ created: -1 })
    .limit(1);

  const { created: createdFrom } = profileSnapshot || {};
  const events = await searchEvents({
    id,
    eventTypes,
    createdFrom,
    createdTill: atDateTime,
  });
  console.log({ events });

  return events.reduce(profileReducer, {});
};
