const { getDb } = require("../../../database");

exports.createMatch = async (match) => {
  if (!match) {
    throw new Error("cannot insert falsy value");
  }
  
  const doc = await getDb()
      .collection("matches")
      .insertOne(match)
      .catch(console.error);
  
  return { doc, ...doc.ops[0], id: doc.ops[0]._id };
};
