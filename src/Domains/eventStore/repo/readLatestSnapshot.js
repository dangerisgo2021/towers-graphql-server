const { isNil, set } = require("lodash");
const { getDb } = require("../../../database");

exports.readLatestSnapshot = ({ id, atDateTime }) => {
  let query = {};
  
  if (!id) {
    throw new Error(" cannot readLatestSnapshot with falsy id")
  }
  if (!isNil(atDateTime)) {
    set(query, "created.$lt", atDateTime);
  }
  
  if (query && id) {
    query["meta.id"] = id;
  }
  
  return getDb().collection("profile_snapshots").find(query).toArray();
};
