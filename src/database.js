const ObjectId = require('mongodb').ObjectID;
const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://towers:zwcY4uMOUczknaix@cluster0.scpoy.mongodb.net/towers?retryWrites=true&w=majority";

let _db;

module.exports = {
  connectToServer: function (callback) {
    // noinspection JSIgnoredPromiseFromCall,JSCheckFunctionSignatures
    MongoClient.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      function (err, client) {
        _db = client.db("heroku_6k5jt957");
        return callback(err);
      }
    );
  },

  getDb: function () {
    return _db;
  },
  ObjectId,
};
