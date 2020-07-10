const { ApolloServer, gql } = require('apollo-server');
const connectDB = require('./config/db');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(
    ({url}) => {
        console.log(`Server ready in URL ${url}`);
    }
);