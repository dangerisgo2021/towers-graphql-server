const { isNil, set } = require("lodash");
const { getDb } = require("../../../database");

exports.searchEvents = ({ id, eventTypes, createdFrom, createdTill }) => {
  let query = {};

  if (Array.isArray(eventTypes)) {
    query.type = { $in: eventTypes };
  }
  //might need to make createdFrom isoDate format
  if (!isNil(createdFrom)) {
    set(query, "created.$gt", createdFrom);
  }
  //might need to make createdTill isoDate format
  if (!isNil(createdTill)) {
    set(query, "created.$lte", createdTill);
  }  //might need to make createdTill isoDate format
  if (id) {
    set(query, "meta.domain.id", id);
  }

  return getDb().collection("events").find(query).toArray();
};
