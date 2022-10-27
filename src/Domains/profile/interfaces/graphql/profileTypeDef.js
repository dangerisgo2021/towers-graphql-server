const { gql } = require("apollo-server-express");

exports.profileTypeDef = gql`
  type ProfileDomainObject {
    id: ID
    agentId: ID
    created: Date
    updated: Date
  }

  input ProfileReadInput {
    id: ID,
    agentId: ID
  }

  input ProfileSearchInput {
    created: Range
  }

  extend type DomainQuery {
    profiles(search: ProfileSearchInput): ProfileDomainObject
    profile(read: ProfileReadInput): ProfileDomainObject
  }
`;
