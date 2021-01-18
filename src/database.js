const ObjectId = require("mongodb").ObjectID;
const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://towers:gBwcbRYhpWD111Vy@cluster0.scpoy.mongodb.net/towers?retryWrites=true&w=majority";

let cachedClient = null;
let cachedDb = null;

module.exports = {
  connectToServer: function (callback) {
    if (cachedClient && cachedDb) {
      return { client: cachedClient, db: cachedDb };
    }
    // noinspection JSIgnoredPromiseFromCall,JSCheckFunctionSignatures
    MongoClient.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      function (err, client) {
        cachedClient = client;
        cachedDb = client.db("towers");
        return callback(err);
      }
    );
  },

  getDb: function () {
    return cachedDb;
  },
  ObjectId,
};
