import express from 'express';
import { Application, Request } from 'express';

interface CustomRequest extends Request {
  user: any;
}
import { ApolloServer, ExpressContext } from 'apollo-server-express';
import { gql } from 'apollo-server-express';

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

import './config/connection.js';
import routes from './routes/index.js';

const app: Application = express();
  context: ({ req }: { req: CustomRequest }) => {
const server = new ApolloServer<ExpressContext>({
  typeDefs,
  resolvers,
  context: ({ req }: { req: CustomRequest }) => {
    // Implement any authentication or other context logic
    return { user: req.user };
  },
});

async function startServer() {
  await server.start();


  app.listen({ port: 3001 }, () =>
    console.log(`Server ready at http://localhost:3001${server.graphqlPath}`)
  );
}

startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)
  }