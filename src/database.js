const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb://graphql-server:Towers123@ds117623.mlab.com:17623/heroku_6k5jt957";

let _db;

module.exports = {
  connectToServer: function (callback) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
      _db = client.db("heroku_6k5jt957");
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
