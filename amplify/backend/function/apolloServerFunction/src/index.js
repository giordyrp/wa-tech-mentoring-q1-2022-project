/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const { ApolloServer } = require('apollo-server-lambda');
const { typeDefs } = require('./apollo/schema');
const { resolvers } = require('./apollo/resolvers');
const connectDB = require('./db');

connectDB();

const server = new ApolloServer({ typeDefs, resolvers });

exports.handler = server.createHandler();
