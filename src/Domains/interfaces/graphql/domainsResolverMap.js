const { merge } = require("lodash");

const {
  authenticationResolverMap,
} = require("../../authentication/interfaces/graphql/authenticationResolverMap");
const {
  profileResolverMap,
} = require("../../profile/interfaces/graphql/profileResolverMap");

const domainResolverMap = {
  Query: {
    domain: () => ({ _empty: "or is it" }),
  },
  Mutation: {
    domain: () => ({ _empty: "or is it really" }),
  },
};

exports.domainsResolverMap = merge(
  domainResolverMap,
  profileResolverMap,
  authenticationResolverMap
);
