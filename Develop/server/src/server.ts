
import { ApolloServer, ExpressContext } from 'apollo-server-express';
import { gql } from 'apollo-server-express';
import express, { Application, Request, Response } from 'express';
import './config/connection.js';

// Define a custom Request interface to extend the default one
interface CustomRequest extends Request {
  user: any; // Required user property
}

// Define GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

// Initialize Express application
const app: Application = express();

// Middleware example: Log incoming requests
app.use((req: Request, res: Response, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Set up Apollo Server with schema, resolvers, and context
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }: ExpressContext) => {
    // Extract user or authentication data here if necessary
    const customReq = req as unknown as CustomRequest;
    return { user: customReq.user };
  },
});

// Start the server
const startServer = async () => {
  try {
    await server.start();
    server.applyMiddleware({ app: app as any });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

startServer();
