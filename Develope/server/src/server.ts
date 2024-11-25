import { ApolloServer, ExpressContext } from 'apollo-server-express';
import { gql } from 'apollo-server-express';
import express, { Application } from 'express';
import './config/connection.js';

interface CustomRequest extends Request {
  user: any;
}

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }: ExpressContext) => {
    // Add the user to the context
    const customReq = req as unknown as CustomRequest;
    return { user: customReq.user };
  },
});

const app: Application = express();
server.start().then(() => {
  
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
