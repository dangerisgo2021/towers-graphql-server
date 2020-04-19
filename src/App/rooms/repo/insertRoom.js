const { getDb } = require("../../../database");

exports.insertRoom = async (room) => {
  if (!room) {
    throw new Error("cannot insert falsy value");
  }

  const doc = await getDb()
    .collection("rooms")
    .insertOne(room)
    .catch(console.error);

  //map doc to room
  return { ...doc.ops[0], id: doc.ops[0]._id };
};
