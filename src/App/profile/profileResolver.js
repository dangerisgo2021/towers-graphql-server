const { profile } = require("./resolvers/query/profile");

exports.profileResolver = {
  Query: {
    profile,
  }
};
