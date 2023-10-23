import { readFileSync } from 'fs';
import gql from 'graphql-tag';
import { ApolloServer, ContextFunction } from '@apollo/server';
import {
  StandaloneServerContextFunctionArgument,
  startStandaloneServer,
} from '@apollo/server/standalone';
import resolvers from './resolvers';
import { DataSourceContext, createContext } from './types/DataSourceContext';
import { GraphQLError } from 'graphql';

const port = process.env.PORT ?? '4001';
const authSecret = process.env.AUTH_SECRET;

const context: ContextFunction<
  [StandaloneServerContextFunctionArgument],
  DataSourceContext
  > = async ({ req }) => {
    // implement some sort of jwt auth
  if (authSecret && req.headers['authorization'] !== authSecret) {
    throw new GraphQLError('Missing Authorization', {
      extensions: {
        code: 'UNAUTHENTICATED',
        http: { status: 401 },
      },
    });
  }

  return createContext();
};

export async function main() {
  const typeDefs = gql(
    readFileSync('schema.graphql', {
      encoding: 'utf-8',
    })
  );
  const server = new ApolloServer({ typeDefs, resolvers, introspection: true });
  const app = await startStandaloneServer(server, {
    context,
    listen: { port: Number.parseInt(port) },
  });

  console.log(`🚀  Tweets GQL API ready at ${app.url}`);
  return server;
}

main();
