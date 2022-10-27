const { readProfile } = require("./resolvers/readProfile");

exports.profileResolverMap = {
  DomainQuery: {
    profile: readProfile,
  },
};
