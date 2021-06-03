const {gql} = require('apollo-server-express');
module.exports.typeDefs = gql `
  type book{
    id: ID!
  }
`;

module.exports.resolver = {
  Query:{},
  Mutation:{}
}
