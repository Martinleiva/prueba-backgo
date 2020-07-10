const { gql } = require('apollo-server');

const typeDefs = gql`

    type Client {
        id: ID
        username: String
        email: String
        createdAt: String
    }

    input ClientInput {
        username: String!
        email: String!
        password: String!
    }

    type Query {
        getClientUsers: [Client]
    }

    type Mutation {
        addClientUser(input: ClientInput): Client
    }
`;

module.exports = typeDefs;