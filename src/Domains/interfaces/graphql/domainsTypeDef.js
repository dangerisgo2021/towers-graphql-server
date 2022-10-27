const { gql } = require("apollo-server-express");

const {
  authenticationTypeDef,
} = require("../../authentication/interfaces/graphql/authenticationTypeDef");

const {
  profileTypeDef,
} = require("../../profile/interfaces/graphql/profileTypeDef");

const domainTypeDef = gql`
  type DomainQuery {
    _empty: String
  }
  type DomainMutation {
    _empty: String
  }

  extend type Query {
    domain: DomainQuery
  }
  extend type Mutation {
    domain: DomainMutation
  }
`;

exports.domainsTypeDef = [domainTypeDef, authenticationTypeDef, profileTypeDef];
