const { getDb } = require("../../../database");
const {ObjectId} = require("../../../database.js");

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

  if (search.mode) {
    query.mode = { $in: search.mode };
  }

  if (search.players) {
    query.players = {
      $elemMatch: {
        userId: { $in: search.players.map((player) => ObjectId(player)) },
      },
    };
  }
  console.log(JSON.stringify(query));
  const docs = await getDb()
    .collection("rooms")
    .find(query)
    .sort({ created: -1 })
    .toArray()
    .catch(console.error);

  return docs.map((doc) => ({ ...doc, id: doc._id }));
};
