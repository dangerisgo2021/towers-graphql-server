const MongoClient = require( 'mongodb' ).MongoClient;
const url =
    "mongodb+srv://clark:a@cluster0-8b78v.gcp.mongodb.net/test?retryWrites=true&w=majority";

var _db;

module.exports = {
  
  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('towers');
      return callback( err );
    } );
  },
  
  getDb: function() {
    return _db;
  }
};