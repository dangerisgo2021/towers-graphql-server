const { getDb } = require("../../../database");

exports.queryRooms = async ({ search }) => {
  if (!search) {
    throw new Error("cannot execute falsy search");
  }

  let query = {};

  //should make a mongodb query builder
  if ({ ...search }.hasOwnProperty("started")) {
    query.started = search.started || { $ne: true };
  }

  if (search.name) {
    query.name = { $regex: search.name };
  }

  const docs = await getDb()
    .collection("rooms")
    .find(query)
    .toArray()
    .catch(console.error);

  return docs.map((doc) => ({ ...doc, id: doc._id }));
};
