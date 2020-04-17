const { profile } = require("./queries/profile");


exports.profileResolver = {
  Query: {
    profile,
  }
};
